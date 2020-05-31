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
      <View>
        <View>
          <Text>Crédito consignado x Crédito pessoal</Text>
          <Text>Entenda cada um deles.</Text>
          <Text>
            Nesse vídeo vou esclarecer suas dúvidas e explicar as diferenças
            entre o crédito consignado e o crédito pessoal. Vamos lá? :){" "}
          </Text>
        </View>
        <WebView
          source={{ uri: "https://www.youtube.com/watch?v=OKo1mq4qmO8" }}
        />
        <View>
          <Text>E aí, Sabrina! Eu consegui te ajudar?</Text>
          <Text>Espero que sim.</Text>
          <Text>Um abraço, e até a próxima! ;)</Text>
        </View>
        <Image source={DUDA} />
      </View>

      <TouchableOpacity onPress={() => {}}>
        <View>
          <Text>Voltar ao Menu</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default connect()(Cred);
