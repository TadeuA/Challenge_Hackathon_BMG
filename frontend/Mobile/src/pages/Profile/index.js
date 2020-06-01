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
            style={{ height: "65%" }}
            keyExtractor={({ item, index }) => toString(index)}
            renderItem={({ item, index }) => (
              <View style={styles.profileConquest}>
                <View style={styles.profileLevel}>
                  <View style={styles.profileLevelImg}>
                    <Image />
                    <Text>Nivel 2</Text>
                  </View>
                  <View style={styles.profileLevelDescription}>
                    <Text style={styles.profileLevelTittle}>
                      Novo(a)Nesse Assunto?
                    </Text>
                    <Text style={styles.profileLevelText}>
                      Comece aqui pelo básico
                    </Text>
                    <Progress.Bar
                      progress={2 / index}
                      width={250}
                      height={25}
                      borderRadius={30}
                      backgroundColor={"#C6C6C6"}
                      color={"#F58220"}
                    />
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}
3;
