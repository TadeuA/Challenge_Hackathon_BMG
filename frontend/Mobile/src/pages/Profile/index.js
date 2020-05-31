import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import * as Progress from "react-native-progress";

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

        <View>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            style={{ height: "50%" }}
            keyExtractor={({ item, index }) => toString(index)}
            renderItem={({ item, index }) => (
              <View>
                <View>
                  <Image />
                  <Text>Nivel 2</Text>
                </View>
                <View>
                  <Text>Novo(a)Nesse Assunto?</Text>
                  <Text>Comece aqui pello básico</Text>
                </View>
                <Progress.Bar
                  progress={2 / index}
                  width={300}
                  height={25}
                  borderRadius={30}
                  backgroundColor={"#C6C6C6"}
                  color={"#F58220"}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.menuContainer}></View>
      </View>
    </View>
  );
}
3;
