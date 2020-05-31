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
      <Text style={styles.title}>Eu sou assim...</Text>
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.containerOption}
            onPress={() =>
              toggleLevel("Já tive o crédito negado algumas instituições")
            }
          >
            <Text style={styles.containerOptionText}>
              Já tive o crédito negado algumas instituições
            </Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.containerOption}
            onPress={() =>
              toggleLevel("Utilizo o crédito e tenho dinheiro em conta")
            }
          >
            <Text style={styles.containerOptionText}>
              Utilizo o crédito e tenho dinheiro em conta
            </Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.containerOption}
            onPress={() =>
              toggleLevel(
                "Não tenho a cultura de investir e não aplico meu dinheiro com medo de precisar"
              )
            }
          >
            <Text style={styles.containerOptionText}>
              Não tenho a cultura de investir e não aplico meu dinheiro com medo
              de precisar
            </Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.containerOption}
            onPress={() =>
              toggleLevel(
                "Já tenho o hábito de investir e aplico meu dinheiro na poupança /outros investimentos"
              )
            }
          >
            <Text style={styles.containerOptionText}>
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
  container: {
    flexDirection: "column",
    height: "80%",
    marginHorizontal: 10,
    borderWidth: 3,
    borderColor: "#C4C4C4",
    justifyContent: "space-between",
  },
  title: {
    paddingHorizontal: 10,
    color: "#F58220",
    fontSize: 25,
    paddingBottom: 15,
  },
  containerOption: {
    padding: 34.5,
    borderWidth: 3,
    borderColor: "#C4C4C4",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerOptionText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
