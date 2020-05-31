import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import * as Progress from "react-native-progress";
import options from "../../configs/options";
import styles from "./styles";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Knowledge = () => {
  const navigation = useNavigation();

  function navigateToGame() {
    navigation.navigate("Nivel");
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
      <Text style={styles.tittle}>Agora me conta uma coisa</Text>
      <Text style={styles.tittle}>
        Das opções abaixo, qual você sente mais dificuldade?
      </Text>
      <View>
        <TouchableOpacity onPress={navigateToGame} style={styles.selectOption}>
          <View>
            <Image source={options("loan")} />
            <Text style={styles.textOption}>Empréstimo Consignado</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToGame} style={styles.selectOption}>
          <View>
            <Image source={options("cred")} />
            <Text style={styles.textOption}>Crédito Pessoal</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToGame} style={styles.selectOption}>
          <View>
            <Image source={options("card")} />
            <Text style={styles.textOption}>Cartão Consignado</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToGame} style={styles.selectOption}>
          <View>
            <Image source={options("cash")} />
            <Text style={styles.textOption}>Cashback</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToGame} style={styles.selectOption}>
          <View>
            <Image source={options("safe")} />
            <Text style={styles.textOption}>Cofrinho Virtual</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default connect()(Knowledge);
