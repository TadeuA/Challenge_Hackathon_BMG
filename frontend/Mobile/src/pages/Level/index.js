import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import * as Progress from "react-native-progress";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import { connect } from "react-redux";

import IAm from "../../components/IAm";
import Difficulty from "../../components/Difficulty";
const Groups = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <Progress.Bar
        progress={0.05}
        width={300}
        height={25}
        borderRadius={30}
        backgroundColor={"#C6C6C6"}
        color={"#F58220"}
      />
      <Difficulty />
    </View>
  );
};

export default connect()(Groups);
