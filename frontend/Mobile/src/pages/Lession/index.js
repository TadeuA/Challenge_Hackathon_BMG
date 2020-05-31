import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import * as Progress from "react-native-progress";

import styles from "./styles";
import { connect } from "react-redux";

import DUDA from "../../assets/DUDA.png";
import { useNavigation } from "@react-navigation/native";
const Lession = () => {
  const navigation = useNavigation();

  function navigateToGame() {
    navigation.navigate("inSide");
  }
  return (
    <View style={styles.container}>
      <Text>Seu perfil de investidor e:</Text>
      <Text>xxxxxxxx</Text>
      <Image source={DUDA} />
      <TouchableOpacity onPress={navigateToGame}>
        <Text>Clique para Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect()(Lession);
