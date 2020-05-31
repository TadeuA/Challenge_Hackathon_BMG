import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import * as Progress from "react-native-progress";

import styles from "./styles";
import { connect } from "react-redux";

import trails from "../../configs/trails";
import { useNavigation } from "@react-navigation/native";
const Modules = () => {
  const navigation = useNavigation();

  function navigateToLession() {
    navigation.navigate("Course");
  }
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={navigateToLession}>
          <Image source={trails("saver", 0)} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={navigateToLession}>
          <Image source={trails("saver", 1)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToLession}>
          <Image source={trails("saver", 2)} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={navigateToLession}>
          <Image source={trails("saver", 3)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToLession}>
          <Image source={trails("saver", 4)} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={navigateToLession}>
          <Image source={trails("saver", 5)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default connect()(Modules);
