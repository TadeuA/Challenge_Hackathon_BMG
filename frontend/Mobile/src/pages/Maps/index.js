import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import * as Progress from "react-native-progress";

import styles from "./styles";
import { connect } from "react-redux";

import DUDA from "../../assets/DUDA.png";
import { useNavigation } from "@react-navigation/native";
const Maps = () => {
  const navigation = useNavigation();

  function navigateToGame() {
    navigation.navigate("inSide");
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerBody}>
        <View style={styles.containerText}>
          <Text style={styles.containerTextP}>Seu perfil de investidor e:</Text>
          <Text style={styles.containerTextP}>xxxxxxxx</Text>
        </View>
        <Image source={DUDA} />
        <TouchableOpacity
          onPress={navigateToGame}
          style={styles.containerButton}
        >
          <Text style={styles.containerButtonText}>Clique para Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default connect()(Maps);
