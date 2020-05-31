import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Start from "../pages/Start";

import Maps from "../pages/Maps";
import IAm from "../pages/IAm";
import Nivel from "../pages/Nivel";
import Knowledge from "../pages/Knowledge";

import TabNavConfig from "./TabNavConfig";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Start" component={Start} />
      <AppStack.Screen name="Maps" component={Maps} />
      <AppStack.Screen name="IAm" component={IAm} />
      <AppStack.Screen name="Nivel" component={Nivel} />
      <AppStack.Screen name="Knowledge" component={Knowledge} />

      <AppStack.Screen name="inSide" component={TabNavConfig} />
    </AppStack.Navigator>
  );
}
