import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

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
          <Text style={styles.textWelcome}>Bem vindx ao Educa+</Text>
          <Text style={styles.textNick}>
            Aqui você aprende e acumula pontos, e troca por recompensas.
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
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
