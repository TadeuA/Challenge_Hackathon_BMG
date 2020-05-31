import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import costumerProfile from "../../assets/costumerProfile.png";

import styles from "./styles";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={() => {}}></TouchableOpacity>
        <View></View>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.profileImage}>
            <Image source={costumerProfile} />
          </View>
        </TouchableOpacity>
        <Text style={styles.nameProfile}>Sabrina Vasconcelos</Text>
      </View>
      <View>
        <View style={styles.menuProfile}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.menuProfileTitle}>Coquistas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.menuProfileTitle}>Amigos</Text>
          </TouchableOpacity>
        </View>

        <View></View>

        <View style={styles.menuContainer}></View>
      </View>
    </View>
  );
}
3;
