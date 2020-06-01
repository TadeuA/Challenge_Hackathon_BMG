import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { WebView } from "react-native-webview";
import * as Progress from "react-native-progress";

import styles from "./styles";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

import DUDA from "../../assets/DUDA.png";
import { useNavigation } from "@react-navigation/native";
const Cred = () => {
  const navigation = useNavigation();

  function navigateCred() {
    navigation.navigate("inSide");
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerProgress}>
        <TouchableOpacity onPress={() => {}}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Progress.Bar
          progress={0.66}
          width={300}
          height={25}
          borderRadius={30}
          backgroundColor={"#C6C6C6"}
          color={"#F58220"}
        />
      </View>
      <View style={styles.courseLession}>
        <View>
          <Text style={styles.tittle}>
            Crédito consignado x Crédito pessoal
          </Text>
          <Text style={styles.subTittle}>Entenda cada um deles.</Text>
          <Text style={styles.textDesciption}>
            Nesse vídeo vou esclarecer suas dúvidas e explicar as diferenças
            entre o crédito consignado e o crédito pessoal. Vamos lá? :){" "}
          </Text>
        </View>

        <WebView
          source={{ url: "https://www.youtube.com/watch?v=OKo1mq4qmO8" }}
        />
        <View style={styles.dudaAjuda}>
          <View style={styles.dudaAjudaContainer}>
            <Text style={styles.dudaAjudaText}>
              E aí, Sabrina! Eu consegui te ajudar?
            </Text>
            <Text style={styles.dudaAjudaText}>Espero que sim.</Text>
            <Text style={styles.dudaAjudaText}>
              Um abraço, e até a próxima! ;)
            </Text>
          </View>
          <View style={styles.dudaAjudaImagem}>
            <Image source={DUDA} />
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.courseButton}>
        <View>
          <Text style={styles.courseButtonText}>Voltar ao Menu</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default connect()(Cred);
