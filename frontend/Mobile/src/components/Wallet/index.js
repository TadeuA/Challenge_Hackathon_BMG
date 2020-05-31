import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";

import styles from "./styles";
//import componentes this page
const cardHeight = 250;
const cardTitle = 45;
const cardPadding = 10;
const cards = [
  {
    name: "Shot",
    color: "#a9d0b6",
    price: "30 CHF",
  },
  {
    name: "Juice",
    color: "#e9bbd1",
    price: "64 CHF",
  },
  {
    name: "Mighty Juice",
    color: "#eba65c",
    price: "80 CHF",
  },
  {
    name: "Sandwich",
    color: "#95c3e4",
    price: "85 CHF",
  },
  {
    name: "Combi",
    color: "#1c1c1c",
    price: "145 CHF",
  },
  {
    name: "Signature",
    color: "#a390bc",
    price: "92 CHF",
  },
  {
    name: "Coffee",
    color: "#fef2a0",
    price: "47 CHF",
  },
];

export default function Wallet() {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <View style={styles.absolute}>
        {cards.map((card, index) => {
          const inputRange = [-cardHeight, 0];
          const outputRange = [
            cardHeight * index,
            (cardHeight - cardTitle) * -index,
          ];
          if (index > 0) {
            inputRange.push(cardPadding * index);
            outputRange.push((cardHeight - cardPadding) * -index);
          }
          const translateY = scrollY.interpolate({
            inputRange,
            outputRange,
            extrapolateRight: "clamp",
          });
          return (
            <Animated.View
              key={card.name}
              style={{ transform: [{ translateY }] }}
            >
              <View
                style={[
                  styles.card,
                  {
                    backgroundColor: card.color,
                    height: cardHeight,
                  },
                ]}
                {...card}
              />
            </Animated.View>
          );
        })}
      </View>

      <Animated.ScrollView
        scrollEventThrottle={16}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { y: scrollY } },
            },
          ],
          { useNativeDriver: true }
        )}
      />
    </View>
  );
}
