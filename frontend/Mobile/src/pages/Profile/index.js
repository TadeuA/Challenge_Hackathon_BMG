import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={() => {}}></TouchableOpacity>
        <View></View>
        <View></View>

        <View style={styles.menuContainer}></View>
      </View>
    </View>
  );
}
