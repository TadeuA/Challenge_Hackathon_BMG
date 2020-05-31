import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import * as Progress from "react-native-progress";

import styles from "./styles";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import seeds from "../../assets/seeds.png";
import DUDA from "../../assets/DUDA.png";
import { useNavigation } from "@react-navigation/native";
const Course = () => {
  const navigation = useNavigation();

  function navigateCred() {
    navigation.navigate("Creds");
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Progress.Bar
        progress={0.66}
        width={300}
        height={25}
        borderRadius={30}
        backgroundColor={"#C6C6C6"}
        color={"#F58220"}
      />
      <View>
        <Image source={seeds} />
        <Text>Vamos começar!</Text>
        <Text>Qual é a o melhor momento para solicitar crédito pessoal?</Text>
        <View>
          <View>
            <Text>Para pagar uma divida</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>Cobrir custos de uma viagem</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>Melhorar seu negócio e/ou para conseguir uma promoção</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>Para melhorar a estética</Text>
          </View>
        </View>
        <TouchableOpacity onPress={navigateCred}>
          <Text>VEREFICAR</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <AntDesign name="stepbackward" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <AntDesign name="stepforward" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default connect()(Course);
