import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Start() {
  const navigation = useNavigation();

  function navigateToGame() {
    navigation.navigate("inSide");
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Crie um nickname para começar sua iteração</Text>
      </View>
      <Text>Login</Text>
      <View>
        <Text>Nickname</Text>
        <TextInput placeholder="Digite o seu nickname"></TextInput>
      </View>
      <View>
        <TouchableOpacity onPress={navigateToGame}>
          <Text>Login</Text>
          <Feather name="arrow-right" size={40} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
