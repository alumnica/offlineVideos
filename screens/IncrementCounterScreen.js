import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { getRandomColor, colors } from "../helpers/colors.js";
import { connect } from "react-redux";
import { increment } from "../store/counterSlice.js";

const mapDispatchToProps = { increment };

const IncrementCounterScreen = ({
  navigation,
  route,
  navData,
  counter,
  increment,
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
      color: colors.white,
      fontFamily: "DMSerifDisplay_400Regular",
      fontSize: 30,
    },
    counter: {
      fontFamily: "Poppins_200ExtraLight",
      color: colors.white,
      fontSize: 60,
    },
    counterWrapper: {
      borderBottomWidth: 1,
      borderColor: color,
      marginBottom: 20,
    },
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
      <View style={styles.counterWrapper}>
        <Text style={styles.counter}>{counter}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.push("Home", { color: color });
          increment();
        }}
      >
        <Text style={styles.text}>Increase</Text>
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
)(IncrementCounterScreen);
