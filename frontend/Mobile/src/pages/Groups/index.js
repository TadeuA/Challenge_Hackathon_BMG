import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";

import styles from "./styles";
import shild from "../../configs/shild";
import avatar from "../../assets/avatar1.png";
import { connect } from "react-redux";

import * as GroupActions from "../../store/actions/groups";

const Groups = ({ groups, groupActive, toggleRank }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grupos</Text>
      <View style={styles.groupsContainer}>
        <Text style={styles.textGroupsContainer}>Meus Grupos</Text>
        <FlatList
          data={groups}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View styles={styles.shildsContainer}>
              <TouchableOpacity onPress={() => toggleRank(item)}>
                <View style={styles.backToShild}>
                  <Image style={styles.shild} source={shild(item.shild)} />
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View style={styles.ranckContainer}>
        <Text style={styles.textPoints}>Points</Text>

        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          style={{ height: "60%" }}
          keyExtractor={({ item, index }) => toString(index)}
          ListEmptyComponent={
            <Text style={styles.gamerSelectGroup}>Selecione um Grupo</Text>
          }
          renderItem={({ item, index }) => (
            <View style={styles.gamersContainer}>
              <View style={styles.gamersContainerPeople}>
                <Text style={styles.position}>{index + 1}</Text>
                <View style={styles.peopleContainer}>
                  <Image styles={styles.avatar} source={avatar} />
                </View>
                <Text styles={styles.nickName}>nickName</Text>
              </View>
              <Text style={styles.pointsGamers}>{600 / (index + 1)}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  groups: state.groups.groups,
  groupActive: state.groups.groupActive,
});
const mapDispatchToProps = (dispatch) => ({
  toggleRank: (item) => dispatch(GroupActions.togglesSelectGroup(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
