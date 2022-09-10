import { format } from "date-fns";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  SafeAreaView,
  Modal,
  Image,
  Platform,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as Favicon from "../../assets/favicons_js";
import * as Icons from "../../assets/favicons_light";
import { theme } from "../constants";
import CheckBoxComponent from "./CheckBoxComponent";
import BodyButton from "./BodyButton";
import EventPopup from "./EventPopup.js";
import TaskPopup from "./TaskPopup.js";
import Zoom from "./Zoom.js";
import * as Utils from "../utils/CardSorting";
import * as CalendarUtil from "../utils/CalendarUtil";

import BodyCheckList from "./BodyCheckList";
import { gapi } from "gapi-script";

const { light, size, text, shadowProp } = theme;

export const Titles = {
  BodyCheck: "Body Check",
  Upcoming: "Upcoming",
  TodayEvent: "Today's Events",
  HighPriority: "Priorities",
};

function Item({ data, type }) {
  const [isZoomVisible, setZoomVisible] = React.useState(false);
  const handleZoomVisible = () => {
    setZoomVisible(() => !isZoomVisible);
  };
  return (
    <View style={cardStyles.cardItem}>
      {type === Titles.HighPriority && (
        <View style={cardStyles.cardObjectLeft}>
          <CheckBoxComponent
            onChange={(checked) => {
              // do stuff with checked
              console.log(
                `Todo ${data.title} is ${checked ? "complete" : "incomplete"}`
              );
            }}
          />
        </View>
      )}
      {type === Titles.TodayEvent && (
        <View style={cardStyles.cardObjectLeft}>
          <Text style={cardStyles.cardObjectText}>
            {new Date(data.time).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </View>
      )}
      <View style={cardStyles.centeredView}>
        <Pressable onPress={handleZoomVisible}>
          <Text style={cardStyles.cardObjectText}>
            {type === Titles.Upcoming && data.notes !== ""
              ? data.notes
              : data.title}
          </Text>
        </Pressable>
      </View>
      <Modal visible={isZoomVisible} transparent>
        <Zoom
          zoom={handleZoomVisible}
          cardData={data}
          type={type === Titles.HighPriority ? "Task" : "Event"}
        />
      </Modal>
    </View>
  );
}

const itemSeparator = () => {
  return (
    <View style={{ height: size.margin, backgroundColor: light.secondary }} />
  );
};
/* green bubble for menus */

const Card = (props) => {
  const renderItem = ({ item }) => (
    <Item data={item.cardData} type={props.title} />
  );
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [scrollDownIndex, setScrollDownIndex] = React.useState(0);
  const [scrollUpIndex, setScrollUpIndex] = React.useState(0);
  const [displayScrollUp, setDisplayScrollUp] = React.useState(false);
  const [DATA, setDATA] = React.useState([]);
  const [googleEvents, setGoogleEvents] = React.useState([]);
  const flatList = useRef();

  useEffect(() => {
    window.gapi.client.load("calendar", "v3", getGapiEvents);

    const userId = getAuth().currentUser.uid;
    const db = getDatabase();
    let reference;
    if (props.title === Titles.HighPriority) {
      reference = ref(db, "users/" + userId + "/tasks");
    } else {
      reference = ref(db, "users/" + userId + "/events");
    }
    let data = [];

    return onValue(reference, (snapshot) => {
      const value = snapshot.val();
      data = [];
      for (const n in value) {
        if (
          value[n]["date"] === format(new Date(), "yyy-MM-dd") &&
          props.title === Titles.TodayEvent
        ) {
          data.push({
            id: n,
            cardData: value[n],
          });
        } else if (
          props.title === Titles.HighPriority &&
          value[n]["priority"] > 50
        ) {
          data.push({ id: n, cardData: value[n] });
        } else if (
          props.title === Titles.Upcoming ||
          props.title == Titles.BodyCheck
        ) {
          data.push({ id: n, cardData: value[n] });
        }
      }
      setDATA(data);
    });
  }, []);
  const getGapiEvents = () => {
    window.gapi.client.tasks.tasklists.list({}).then(function (response) {
      const events = response.result.items;

      if (events.length > 0) {
        setGoogleEvents(formatEvents(events));
        //console.log(events);
      }
    });
  };
  const formatEvents = (list) => {
    const rval = [];
    list.map((item) => {
      if (typeof item != "undefined") {
        rval.push({
          id: item.id,
          cardData: {
            title: item.summary,
            time: item.start.dateTime,
            date: item.start.dateTime,
            notes:
              typeof item.description != "undefined" ? item.description : "",
          },
        });
      }
    });
    return rval;
  };

  const getAllEvents = () => {
    const data = googleEvents.concat(DATA);
    if (props.title === Titles.TodayEvent || props.title === Titles.Upcoming) {
      return Utils.SortData(data, Utils.SortType.TIME);
    } else if (props.title === Titles.HighPriority) {
      return Utils.SortData(data, Utils.SortType.PRIORITY);
    } else {
      return data;
    }
  };
  const handleAddObject = () => {
    setIsModalVisible(() => !isModalVisible);
  };
  const scrollsDown = () => {
    if (scrollDownIndex < DATA.length) {
      setScrollDownIndex(scrollDownIndex + 1);
      flatList.current.scrollToIndex({ index: scrollDownIndex });
    }
  };
  const scrollUp = () => {
    if (scrollUpIndex >= 0) {
      setScrollUpIndex(scrollUpIndex - 1);
      flatList.current.scrollToIndex({ index: scrollUpIndex });
    }
  };

  const onViewRef = React.useRef((viewableItems) => {
    if (
      typeof viewableItems.viewableItems[
        viewableItems.viewableItems.length - 1
      ] !== "undefined"
    ) {
      setScrollDownIndex(
        viewableItems.viewableItems[viewableItems.viewableItems.length - 1]
          .index
      );
      setScrollUpIndex(viewableItems.viewableItems[0].index - 1);
      //console.log(viewableItems.viewableItems[0].index);
      if (viewableItems.viewableItems[0].index === 0) {
        setDisplayScrollUp(false);
      } else {
        setDisplayScrollUp(true);
      }
    }
  });
  return (
    <SafeAreaView
      style={[
        cardStyles.card,
        { flex: props.title === Titles.BodyCheck ? -1 : 1 },
      ]}>
      <View style={cardStyles.cardHeader}>
        <View style={cardStyles.cardHeaderLeft} />

        <View style={cardStyles.centeredView}>
          <Text style={cardStyles.cardHeaderText}>{props.title}</Text>
        </View>
        <View style={cardStyles.cardHeaderRight}>
          {(props.title === Titles.TodayEvent ||
            props.title === Titles.HighPriority) && (
            <>
              <Pressable onPress={handleAddObject}>
                <Image
                  style={{
                    width: Platform.OS === "web" ? RFValue(11) : RFValue(25),
                    height: Platform.OS === "web" ? RFValue(11) : RFValue(25),
                  }}
                  source={Icons.Plus}
                />
              </Pressable>

              <Modal visible={isModalVisible} transparent>
                {props.title === Titles.TodayEvent && (
                  <EventPopup isModalVisible={handleAddObject} />
                )}
                {props.title === Titles.HighPriority && (
                  <TaskPopup isModalVisible={handleAddObject} />
                )}
              </Modal>
            </>
          )}
        </View>
      </View>
      {!(props.title === Titles.BodyCheck) && (
        <View
          style={{
            alignSelf: "stretch",
            flex: 1,
          }}>
          <FlatList
            data={getAllEvents()}
            ref={flatList}
            initialScrollIndex={0}
            onViewableItemsChanged={onViewRef.current}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={itemSeparator}
          />
        </View>
      )}
      {!(props.title === Titles.BodyCheck) && (
        <View style={{ flexDirection: "row" }}>
          <Pressable onPress={scrollsDown}>
            <Favicon.ScrollDown
              iconColor="light"
              style={cardStyles.scrollButton}
            />
          </Pressable>
          {displayScrollUp === true && (
            <Pressable onPress={scrollUp}>
              <Favicon.ScrollUp
                iconColor="light"
                style={cardStyles.scrollButton}
              />
            </Pressable>
          )}
        </View>
      )}
      <View style={{ flexDirection: "row", width: "100%" }}>
        {props.title === Titles.BodyCheck && (
          <View
            style={{
              flex: 1,
              marginStart: size.margin,
              paddingBottom: size.margin,
            }}>
            <BodyCheckList />
          </View>
        )}

        <View
          style={{
            justifyContent: "center",
            marginTop: -size.margin,
          }}>
          {props.title === Titles.BodyCheck && (
            <View
              style={{ width: size.margin, backgroundColor: light.secondary }}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: light.secondary,
    flexDirection: "column",
    borderRadius: size.borderRadius,
    opacity: 0.7,
    paddingBottom: size.innerPadding,
    alignItems: "center",
    ...shadowProp,
  },

  cardHeader: {
    alignSelf: "stretch",
    borderRadius: size.borderRadius,
    backgroundColor: light.accent,
    opacity: 0.7,
    justifyContent: "space-between",
    flexDirection: "row",
    textAlign: "center",
    marginBottom: size.margin,
  },

  cardHeaderLeft: {
    flex: 0.1,
  },

  cardHeaderCenter: {
    flex: 10,
  },

  cardHeaderRight: {
    flex: 0.1,
    paddingTop: size.innerPadding,
    paddingBottom: size.innerPadding,
    paddingRight: size.innerPadding,
    alignItems: "flex-end",
  },

  cardHeaderText: {
    ...Platform.select({
      web: {
        ...text.title,
      },
      default: {
        ...text.mobileHeader,
      },
    }),
    color: light.textPrimary,
    padding: size.innerPadding,
  },

  cardItem: {
    padding: size.innerPadding,
    marginHorizontal: size.margin,

    backgroundColor: light.primary,
    borderRadius: size.borderRadius,
    justifyContent: "center",
    flexDirection: "row",
    textAlign: "center",
    alignSelf: "stretch",
  },

  cardObjectLeft: {
    /*checkbox bubble, time, reset, ect */
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  cardObjectRight: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  cardObjectText: {
    ...text.body,
    color: light.textSecondary,
    flexDirection: "row",
  },

  scrollDown: {
    alignSelf: "flex-end",
    justifyContent: "center",
  },

  centeredView: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollButton: {
    width: RFValue(12),
    height: RFValue(12),
    marginEnd: size.margin,
  },
});

export default Card;
