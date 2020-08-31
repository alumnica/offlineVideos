import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { colors } from "../helpers/colors.js";
import DownloadButton from "./DownloadButton.js";
import EraseButton from "./EraseButton.js"

import * as FileSystem from "expo-file-system";

const ListItem = ({ item, navigation, index, downloaded }) => {

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Video", {
          url: item.url, name: (item.tittle || item)
        });
      }}
    >
      <View style={[styles.textContainer, index === 0 && styles.first]}>
        <Text style={styles.text}>{item.tittle || item}</Text>
        {downloaded ? <EraseButton name={item} />:  (<DownloadButton url={item.url} name={item.tittle} />)}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontFamily: "Poppins_200ExtraLight",
    fontSize: 18,
  },
  textContainer: {
    width: "100%",
    backgroundColor: colors.black,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: colors.salmon,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  first: {
    borderTopWidth: 1,
  },
});

export default ListItem;
