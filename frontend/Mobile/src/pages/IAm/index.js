import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import * as Progress from "react-native-progress";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const IAm = () => {
  const navigation = useNavigation();

  function navigateToGame() {
    navigation.navigate("Knowledge");
  }
  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={0.05}
        width={300}
        height={25}
        borderRadius={30}
        backgroundColor={"#C6C6C6"}
        color={"#F58220"}
      />
      <Text style={styles.title}>Eu sou assim...</Text>
      <View style={styles.containerIn}>
        <View>
          <TouchableOpacity
            style={styles.containerOption}
            onPress={navigateToGame}
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
            onPress={navigateToGame}
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
            onPress={navigateToGame}
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
            onPress={navigateToGame}
          >
            <Text style={styles.containerOptionText}>
              Já tenho o hábito de investir e aplico meu dinheiro na poupança /
              outros investimentos
            </Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default connect()(IAm);
