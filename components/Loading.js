import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { colors } from "../helpers/colors.js";

const Loading = (props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.backgroundColor || colors.black,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={props.spinnerSize || "large"}
        color={props.spinnerColor ||colors.white}
      />
    </View>
  );
};

export default Loading;
