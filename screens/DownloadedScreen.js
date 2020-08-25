import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getRandomColor, colors } from "../helpers/colors.js";

const DownloadedScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dowloaded Screen</Text>
    </View>
  );
};

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
});

export default DownloadedScreen;
