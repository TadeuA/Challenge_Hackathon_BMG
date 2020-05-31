import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";

import styles from "./styles";
import { connect } from "react-redux";
import * as Progress from "react-native-progress";
import options from "../../configs/options";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Nivel = () => {
  const navigation = useNavigation();

  function navigateToGame() {
    navigation.navigate("Maps");
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <Progress.Bar
        progress={0.4}
        width={300}
        height={25}
        borderRadius={30}
        backgroundColor={"#C6C6C6"}
        color={"#F58220"}
      />
      <Text style={styles.tittle}>Maravilha!</Text>
      <Text style={styles.tittle}>DAgora, escolha uma opção</Text>

      <View>
        <TouchableOpacity
          onPress={navigateToGame}
          style={styles.containerOption}
        >
          <View style={styles.containerOptionSelect}>
            <Image source={options("noob")} />
            <View style={styles.containerText}>
              <Text style={styles.containerOptionTittle}>
                Novo(a) nesse assunto?
              </Text>
              <Text style={styles.containerOptionText}>
                Comece aqui pelo básico
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigateToGame}
          style={styles.containerOption}
        >
          <View style={styles.containerOptionSelect}>
            <Image source={options("expert")} />
            <View style={styles.containerText}>
              <Text style={styles.containerOptionTittle}>
                Já possuo conhecimento prévio!
              </Text>
              <Text style={styles.containerOptionText}>
                Teste aqui seu conhecimento para iniciar da maneira que fizer
                sentido para você
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default connect()(Nivel);
