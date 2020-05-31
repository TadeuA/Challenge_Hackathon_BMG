import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

import trails from "../../configs/trails";
import { useNavigation } from "@react-navigation/native";

export default function Sections() {
  const navigation = useNavigation();

  function navigateToCourse() {
    navigation.navigate("Modules");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textCurses}>Cursos</Text>
      <View style={styles.curses}>
        <View>
          <TouchableOpacity onPress={navigateToCourse}>
            <View style={styles.listCurses}>
              <Image source={trails("saver", 0)} style={[styles.imageSize]} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToCourse}>
            <View style={styles.listCurses}>
              <Image
                source={trails("investor", 0)}
                style={[styles.imageSize]}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={navigateToCourse}>
            <View style={styles.listCurses}>
              <Image
                source={trails("policyholder", 0)}
                style={[styles.imageSize]}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToCourse}>
            <View style={styles.listCurses}>
              <Image
                source={trails("policyholderNoOptios", 0)}
                style={[styles.imageSize]}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
