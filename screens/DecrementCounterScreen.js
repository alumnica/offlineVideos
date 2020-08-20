import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { getRandomColor, colors } from "../helpers/colors.js";
import { connect } from "react-redux";
import { decrement } from "../store/counterSlice.js";

const mapDispatchToProps = { decrement };

const DecrementCounterScreen = ({
  navigation,
  route,
  buttonClicked,
  counter,
  decrement,
}) => {

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

  return (
    <View style={styles.container}>
      <View style={styles.counterWrapper}>
        <Text style={styles.counter}>{counter}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.push("Home", { color: color });
          decrement();
        }}
      >
        <Text style={styles.text}>Decrease</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DecrementCounterScreen);
