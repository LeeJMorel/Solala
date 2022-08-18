import React from "react";
import { View, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as Components from "../../components";
import { theme } from "../../constants";
const { light, size } = theme;

//<Components.SelectionButton title="Date:" data="Dates" />
export default function Todo(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.topBar}>
          <View style={{ alignItems: "flex-start", flex: 1 }}>
            <Components.SelectionButton title="Sort:" data="todo view" />
          </View>
          <View style={{ alignItems: "flex-end", flex: 1 }}>
            <Components.SelectionButton title="Date:" data="Dates" />
          </View>
        </View>
        <Components.ToDoPlannerView />
      </View>
      <Components.Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: light.primary,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - RFValue(25),
  },
  mainView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: size.padding,
    paddingRight: size.padding,
    paddingTop: size.padding,
    paddingBottom: size.padding,
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
  },
  card: {
    flex: 1,
    margin: size.margin,
  },
});
