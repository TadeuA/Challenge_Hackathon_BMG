import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import hilosProfile from "../../assets/peoples/marciaKetz.png";

import styles from "./styles";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Image source={hilosProfile} style={styles.imgProfile} />
        </TouchableOpacity>
        <Text style={styles.userName}>Márcia Kelz</Text>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
            <Text style={styles.textMenuItem}>Editar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
            <Text style={styles.textMenuItem}>Total de vendas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
            <Text style={styles.textMenuItem}>Produtos mais vendidos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
            <Text style={styles.textMenuItem}>Suporte via WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
            <Text style={styles.textMenuItem}>Suporte via E-mail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
            <Text style={styles.textMenuExit}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
