import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Start from "../pages/Start";

import TabNavConfig from "./TabNavConfig";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Start" component={Start} options={{}} />

      <AppStack.Screen name="inSide" component={TabNavConfig} />
    </AppStack.Navigator>
  );
}
