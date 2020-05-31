import React from "react";

import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";

const DialogAnswer = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.dialogContainer}>
        <Text style={styles.question}>{item.question}</Text>

        <TextInput
          style={styles.input}
          onChangeText={() => {}}
          placeholder="Outra Resposta"
        />
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.textButton}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DialogAnswer;
