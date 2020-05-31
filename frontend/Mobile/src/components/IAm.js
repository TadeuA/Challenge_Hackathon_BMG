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

import { connect } from "react-redux";

const IAm = () => {
  return (
    <>
      <Text>Eu sou assim...</Text>
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => {}}>
            <Text>Já tive o crédito negado algumas instituições</Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => {}}>
            <Text>Utilizo o crédito e tenho dinheiro em conta</Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => {}}>
            <Text>
              Não tenho a cultura de investir e não aplico meu dinheiro com medo
              de precisar
            </Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => {}}>
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

export default connect()(IAm);

const styles = StyleSheet.create({
  container: {},
});
