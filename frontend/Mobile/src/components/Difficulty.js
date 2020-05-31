import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

import * as ActionsLevel from "../store/actions/level";

import options from "../configs/options";

import { connect } from "react-redux";

const Difficulty = (toggleLevel) => {
  return (
    <>
      <Text>Agora me conta uma coisa</Text>
      <Text>Das opções abaixo, qual você sente mais dificuldade?</Text>
      <View>
        <View>
          <Image source={options("loan")} />
          <Text>Empréstimo Consignado</Text>
        </View>
        <View>
          <Image source={options("cred")} />
          <Text>Crédito Pessoal</Text>
        </View>
        <View>
          <Image source={options("card")} />
          <Text>Cartão Consignado</Text>
        </View>
        <View>
          <Image source={options("cash")} />
          <Text>Cashback</Text>
        </View>
        <View>
          <Image source={options("safe")} />
          <Text>Cofrinho Virtual</Text>
        </View>
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  toggleLevel: (level) => dispatch(ActionsLevel.togglesDifficulty(level)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Difficulty);

const styles = StyleSheet.create({
  container: {},
});
