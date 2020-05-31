import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import * as Progress from "react-native-progress";

import styles from "./styles";
import { connect } from "react-redux";

import IAm from "../../components/IAm";

const Groups = () => {
  return (
    <View style={styles.container}>
      <Progress.Bar progress={0.05} width={200} />
      <IAm />
    </View>
  );
};

export default connect()(Groups);
