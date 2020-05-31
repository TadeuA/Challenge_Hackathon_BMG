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

const Nivel = (toggleLevel) => {
  return (
    <>
      <Text>Maravilha!</Text>
      <Text>DAgora, escolha uma opção</Text>

      <View>
        <TouchableOpacity onPress={() => {}}>
          <View>
            <Image source={options("noob")} />
            <Text>Novo(a) nesse assunto?</Text>
            <Text>Comece aqui pelo básico</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View>
            <Image source={options("expert")} />
            <Text>Já possuo conhecimento prévio!</Text>
            <Text>
              Teste aqui seu conhecimento para iniciar da maneira que fizer
              sentido para você
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  toggleLevel: (level) => dispatch(ActionsLevel.togglesNivel(level)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nivel);

const styles = StyleSheet.create({
  container: {},
});
