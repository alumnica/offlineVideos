import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { colors, getRandomColor } from "../helpers/colors.js";
import TabBarIcon from "../components/TabBarIcon";
import * as FileSystem from "expo-file-system";
import AsyncStorage from "@react-native-community/async-storage";

const EraseButton = ({ name, url }) => {
  const _deleteAlert = () => {
    Alert.alert(
      name,
      "My Alert Msg",
      [
        {
          text: "cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "BORRAR",
          onPress: () => {
            _deleteFile();
          },
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  };

  const _deleteFile = async () => {
    try {
      let fileUri = FileSystem.documentDirectory + name;
      await FileSystem.deleteAsync(fileUri);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TouchableOpacity
      style={styles.touchable}
      onPress={() => {
        _deleteAlert();
      }}
    >
      <TabBarIcon focused={true} size={34} name="trash-alt" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    padding: "2%",
    flexDirection: "row",
    alignItems: "center",
  },
  downloadProgress: { color: colors.white, marginLeft: "2%", fontSize: 16 },
});

export default EraseButton;
