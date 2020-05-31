import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Keyboard } from "react-native";

import {
  Octicons,
  AntDesign,
  EvilIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

import Profile from "../pages/Profile";
import Sections from "../pages/Sections";
import Groups from "../pages/Groups";

export default function TabNavConfig() {
  const [visibleTab, setVisibleTab] = useState(true);

  Keyboard.addListener("keyboardDidHide", (event) => {
    setVisibleTab(true);
  });
  Keyboard.addListener("keyboardDidShow", (event) => {
    setVisibleTab(false);
  });

  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        initialRouteName="Sections"
        screenOptions={({ route }) => ({
          tabBarVisible: visibleTab,

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let IconComponent;

            if (route.name === "Profile") {
              IconComponent = Octicons;
              iconName = "person";
            } else if (route.name === "Groups") {
              IconComponent = MaterialCommunityIcons;
              iconName = "robot";
            } else if (route.name === "Sections") {
              IconComponent = AntDesign;
              iconName = "CodeSandbox";
            }

            return <IconComponent name={iconName} size={35} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#FFF",
          inactiveTintColor: "#FFF",
          inactiveBackgroundColor: "#F1E3CB",
          activeBackgroundColor: "#F1E3CB",
          showLabel: false,
          tabStyle: styles.tab,
          style: styles.general,
        }}
      >
        <Tab.Screen name="Groups" component={Groups} />
        <Tab.Screen name="Sections" component={Sections} />

        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1E3CB",
  },
  tab: {
    borderRadius: 100,
    height: 53,
    width: 53,
    marginHorizontal: 5,
  },
  general: {
    marginBottom: 20,
    height: 65,
    backgroundColor: "#F58220",
    borderRadius: 100,
    marginHorizontal: 10,
    paddingHorizontal: 30,
    justifyContent: "center",
    paddingVertical: 5,
  },
});
