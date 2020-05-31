import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import * as ActionsLevel from "../store/actions/level";

import { connect } from "react-redux";

const IAm = (toggleLevel) => {
  return (
    <>
      <Text>Eu sou assim...</Text>
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={() =>
              toggleLevel("Já tive o crédito negado algumas instituições")
            }
          >
            <Text>Já tive o crédito negado algumas instituições</Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() =>
              toggleLevel("Utilizo o crédito e tenho dinheiro em conta")
            }
          >
            <Text>Utilizo o crédito e tenho dinheiro em conta</Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() =>
              toggleLevel(
                "Não tenho a cultura de investir e não aplico meu dinheiro com medo de precisar"
              )
            }
          >
            <Text>
              Não tenho a cultura de investir e não aplico meu dinheiro com medo
              de precisar
            </Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() =>
              toggleLevel(
                "Já tenho o hábito de investir e aplico meu dinheiro na poupança /outros investimentos"
              )
            }
          >
            <Text>
              Já tenho o hábito de investir e aplico meu dinheiro na poupança /
              outros investimentos
            </Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  toggleLevel: (level) => dispatch(ActionsLevel.togglesIAm(level)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IAm);

const styles = StyleSheet.create({
  container: {},
});
