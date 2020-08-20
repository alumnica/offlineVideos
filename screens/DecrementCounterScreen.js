import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getRandomColor, colors } from "../helpers/colors.js";

const DecrementCounterScreen = ({ navigation, route }) => {
  let [color, setColor] = useState(getRandomColor());
  navigation.setOptions({ headerTintColor: route.params.color });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.black,
    },
    text: {
      color: color,
      fontFamily: "DMSerifDisplay_400Regular",
      fontSize: 30,
    },
    counter: {
      fontFamily: "Poppins_200ExtraLight",
      color: color,
      fontSize: 60,
    },
    counterWrapper: {
      borderBottomWidth: 1,
      borderColor: colors.white,
      marginBottom: 20,
    },
    button: {
      marginVertical: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: colors.white,
      borderRadius: 2,
    },
  });

  const count = useSelector((state) => {
    return state.counter;
  });

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.counterWrapper}>
        <Text style={styles.counter}>{count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.push("Home", { color });
          dispatch({ type: "counter/decrement" });
        }}
      >
        <Text style={styles.text}>Decrease</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DecrementCounterScreen;
