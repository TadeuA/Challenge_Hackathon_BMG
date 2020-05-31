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
      <View style={styles.containerTop}>
        <View>
          <Text>Bem vindx ao Educa+</Text>
          <Text style={styles.textNick}>
            Crie um <Text style={styles.textNickName}>nickname</Text> para
            começar sua iteração
          </Text>
        </View>
      </View>
      <View style={styles.backgroundBotton}>
        <View style={styles.textLoginForm}>
          <Text style={styles.textLogin}>Como você gosta de ser chamado:</Text>
          <Text style={styles.textLoginName}>
            Aquele seu apelido de família, amigos, etc.
          </Text>
          <TextInput
            placeholder="Seu Apelido"
            style={styles.textLoginUser}
          ></TextInput>
          <TouchableOpacity onPress={navigateToGame}>
            <View style={styles.containerLoginButton}>
              <Text style={styles.textLoginButton}>Acessar</Text>
              <Feather name="arrow-right" size={30} color="#FFF" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
