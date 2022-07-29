import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  SafeAreaView,
  Modal,
  Platform, Button
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Favicon from "../../assets/favicons_js";
import TaskPopup from "./TaskPopup.js";
import EventPopup from "./EventPopup.js";
import Plus from "../../assets/favicons_light/plus.svg";
import ScrollDown from "../../assets/favicons_light/scroll_down.svg";
import ScrollRight from "../../assets/favicons_light/scroll_right.svg";

import { theme } from "../constants";
const { light, size, text, shadowProp } = theme;

// npm install @react-native-community/slider --save
// yarn add react-native-select-dropdown
export const Titles = {
    BodyCheck: "Body Check",
    Upcoming: "Upcoming",
    TodayEvent: "Today's Events",
    HighPriority: "Priorities"
}

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d73",
        title: "Fourth Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d74",
        title: "Fifth Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e20d74",
        title: "Sixth Item",
    },

];

var h;
const onLayoutEvent = (evt) => {
    h = evt.nativeEvent.layout.height;
}
const Item = ({ title, type }) => (
    <View style={[cardStyles.cardItem,
    { }
    ]
    } onLayout={onLayoutEvent}>
        <View style={cardStyles.cardObjectLeft}>
            {type === Titles.HighPriority && (
                <Button title={"Done"} />
            )}
            {type === Titles.TodayEvent && (
                <Text style={cardStyles.cardObjectText}>8 AM</Text>
            )}
        </View>
        <View style={cardStyles.cardObjectRight}>
          <Text style={cardStyles.cardObjectText}>{title}</Text>
        </View>
    </View>
);
//showsVerticalScrollIndicator={false} ref={scrollRef} scrollEventThrottle={1} onScroll={(e) => setScrollPos(e.nativeEvent.contentOffset.y)}
/* green bubble for menus */
const Card = (props) => {

    const renderItem = ({ item }) => <Item title={item.title} type={props.title} />;
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [scrollIndex, setScrollIndex] = React.useState(0);

    const handleAddObject = () => {
        setIsModalVisible(() => !isModalVisible);
    };
    const flatList = useRef();

  //reaserch needed...we also need a scroll up...how do these arrows work with flatbox?
    const scrollsDown = () => {
        if (scrollIndex < DATA.length) {
            setScrollIndex(scrollIndex + 1);
            flatList.current.scrollToIndex({ index: scrollIndex })
        }
    };
    const onViewRef = React.useRef((viewableItems) => {
        setScrollIndex(viewableItems.viewableItems[viewableItems.viewableItems.length-1].index)
    })
    return (
        <SafeAreaView style={[cardStyles.card,
            { width: (props.title === Titles.TodayEvent || props.title === Titles.BodyCheck) ? "200%" : "100%" },
            { alignItems: props.title === Titles.BodyCheck ? "flex-start" : "center" },
        ]}>
            <View style={cardStyles.cardHeader}>
                <View style={cardStyles.cardHeaderCenter}>
                    <Text style={cardStyles.cardHeaderText}>{props.title}</Text>
                </View>
                {(props.title === Titles.TodayEvent || props.title === Titles.HighPriority) && (
                    <View style={cardStyles.cardHeaderRight}>
                        <Pressable onPress={handleAddObject}>
                            <Favicon.Plus style={{ width: RFValue(11) }} />
                        </Pressable>
                        {(Platform.OS === "ios" || Platform.OS === "android") && (
                            <Pressable onPress={handleAddObject}>
                                <Plus width={15} height={15} />
                            </Pressable>
                        )}
                        <Modal visible={isModalVisible} transparent={true}>
                            {props.title === Titles.TodayEvent && (
                                <EventPopup isModalVisible={handleAddObject} />
                            )}
                            {props.title === Titles.HighPriority && (
                                <TaskPopup isModalVisible={handleAddObject} />
                            )}
                        </Modal>
                    </View>
                )}
            </View>
            
            {!(props.title === Titles.BodyCheck) && (

                <View style={{ alignSelf: "stretch", height: props.title === Titles.TodayEvent ? RFValue(89) : RFValue(59) }}>
                        <FlatList
                            data={DATA}
                            ref={flatList}
                            initialScrollIndex={0}
                            onViewableItemsChanged={onViewRef.current}
                            showsVerticalScrollIndicator={false}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                        />
                </View>
            )}
            <View style={{ flexDirection:"row" }}>
            {(props.title === Titles.BodyCheck) && (
                    
                <View style={{height: props.title === Titles.TodayEvent ? RFValue(89) : RFValue(59), width:"95%"}}>
                    <FlatList
                        data={DATA}
                        ref={flatList}
                        horizontal
                        initialScrollIndex={0}
                        onViewableItemsChanged={onViewRef.current}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                )}
            <View>
                {!(props.title === Titles.BodyCheck) && (
                    <Pressable
                        onPress={scrollsDown}
                    >
                        <Favicon.ScrollDown style={{ width: RFValue(12) }} />
                        {(Platform.OS === 'ios' || Platform.OS === 'android') && (
                            <ScrollDown width={20} height={20} />
                        )}
                    </Pressable>
                )}
                    {(props.title === Titles.BodyCheck) && (
                        <View style={{ position: "relative", left:10, top:20}} >
                        <Pressable
                            onPress={scrollsDown}
                        >
                            <Favicon.ScrollRight style={{ width: RFValue(12)}} />
                            {(Platform.OS === 'ios' || Platform.OS === 'android') && (
                                    <ScrollRight height={40} />
                            )}
                        </Pressable>
                    </View>
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
    ...shadowProp
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
    flex: 1,
  },

  cardHeaderCenter: {
    flex: 10,
  },

  cardHeaderRight: {
    flex: 1,
    paddingTop: size.innerPadding,
    paddingBottom: size.innerPadding,
    paddingRight: size.innerPadding,
    paddingLeft: size.innerPadding,
    alignItems: "flex-end",
  },

  cardHeaderText: {
    ...text.title,
    color: light.textPrimary,
  },

  cardItem: {

    padding: size.innerPadding,
    marginHorizontal: size.margin,

    marginBottom: size.margin,
    backgroundColor: light.primary,
    borderRadius: size.borderRadius,
    justifyContent: "center",
    flexDirection: "row",
      textAlign: "center",
      alignSelf: "stretch"
  },

  cardObjectLeft: {
    /*checkbox bubble, time, reset, ect */
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  cardObjectRight: {
    flex: 3,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  cardObjectText: {
    ...text.body,
      color: light.textSecondary,
      flexDirection:"row"
  },

  scrollDown: {
    alignSelf: "flex-end",
    justifyContent: "center",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Card;
