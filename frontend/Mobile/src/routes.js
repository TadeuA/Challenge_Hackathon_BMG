import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import RouteCongif from "./configs/RouteConfig";

export default function Routes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F1E3CB" }}>
          <RouteCongif />
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
