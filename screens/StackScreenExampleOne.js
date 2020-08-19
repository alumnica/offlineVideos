import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colorsArray } from "../helpers/colors.js";

const StackScreenExampleOne = ({
  navigation,
  route,
  navData,
}) => {
  const getColor = () => {
    return colorsArray[
      Math.floor(Math.random() * Math.floor(colorsArray.length))
    ];
  };
  let [color, setColor] = useState(getColor());
  let [plants, setPlants] = useState("");

  navigation.setOptions({ headerTintColor: route.params.color });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#121a21",
    },
    text: {
      color: "#feffff",
      fontFamily: "DMSerifDisplay_400Regular",
      fontSize: 30,
    },
    info: {
      fontFamily: "Poppins_300Light",
      color: "#feffff" },
    button: {
      marginVertical: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: color,
      borderRadius: 2,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.push("Home", { color: color });
        }}
      >
        <Text style={styles.text}>NextScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StackScreenExampleOne
