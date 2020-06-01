import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import * as Progress from "react-native-progress";

import styles from "./styles";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import seeds from "../../assets/seeds.png";
import DUDA from "../../assets/DUDA.png";
import { useNavigation } from "@react-navigation/native";
const Course = () => {
  const navigation = useNavigation();

  function navigateCred() {
    navigation.navigate("Creds");
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
        <View style={styles.courseTittle}>
          <Image source={seeds} />
          <Text style={styles.courseTittleLesson}>Vamos começar!</Text>
          <Text style={styles.courseDescreption}>
            Qual é a o melhor momento para solicitar crédito pessoal?
          </Text>
        </View>

        <View style={styles.courseOption}>
          <View style={styles.courseOptionSelect}>
            <Text style={styles.courseOptionText}>Para pagar uma divida</Text>
          </View>

          <View style={styles.courseOptionSelect}>
            <Text style={styles.courseOptionText}>
              Cobrir custos de uma viagem
            </Text>
          </View>
        </View>
        <View style={styles.courseOption}>
          <View style={styles.courseOptionSelect}>
            <Text style={styles.courseOptionText}>
              Melhorar seu negócio e/ou para conseguir uma promoção
            </Text>
          </View>

          <View style={styles.courseOptionSelect}>
            <Text style={styles.courseOptionText}>
              Para melhorar a estética
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={navigateCred} style={styles.courseButton}>
          <Text style={styles.courseButtonText}>CONTINUAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.courseArrow}>
        <TouchableOpacity onPress={() => {}}>
          <AntDesign name="stepbackward" size={24} color="#C4C4C4" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <AntDesign name="stepforward" size={24} color="#C4C4C4" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default connect()(Course);
