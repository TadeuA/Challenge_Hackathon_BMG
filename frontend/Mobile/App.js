import "intl";
import "intl/locale-data/jsonp/pt-BR";
import React from "react";
import { Provider } from "react-redux";
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Remote debugger"]);

import Routes from "./src/routes";

import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
