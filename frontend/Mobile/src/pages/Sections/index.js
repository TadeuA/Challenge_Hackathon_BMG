import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

import trails from "../../configs/trails";

export default function Sections() {
  return (
    <View>
      <Text>Cursos</Text>
      <View>
        <View>
          <TouchableOpacity onPress={() => {}}>
            <View>
              <Image source={trails("saver", 0)} style={[styles.imageSize]} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <View>
              <Image
                source={trails("investor", 0)}
                style={[styles.imageSize]}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => {}}>
            <View>
              <Image
                source={trails("policyholder", 0)}
                style={[styles.imageSize]}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <View>
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
