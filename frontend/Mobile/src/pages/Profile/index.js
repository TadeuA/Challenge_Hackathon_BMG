import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import costumerProfile from "../../assets/costumerProfile.png";

import styles from "./styles";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={() => {}}>
          <View>
            <Image source={costumerProfile} />
          </View>
        </TouchableOpacity>
        <Text>Sabrina Vasconcelos</Text>
        <View>
          <TouchableOpacity onPress={() => {}}>
            <Text>Coquistas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text>Amigos</Text>
          </TouchableOpacity>
        </View>
        <View></View>

        <View style={styles.menuContainer}></View>
      </View>
    </View>
  );
}
