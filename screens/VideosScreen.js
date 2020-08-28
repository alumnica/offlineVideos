import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet,Flatlist} from "react-native";
import { colors } from "../helpers/colors.js";

import storage from '@react-native-firebase/storage';

const VideosScreen = ({ navigation, route }) => {
  function listFilesAndDirectories(reference, pageToken) {
    return reference.list({ pageToken }).then(result => {
      // Loop over each item
      result.items.forEach(ref => {
        console.log(ref.fullPath);
      });

      if (result.nextPageToken) {
        return listFilesAndDirectories(reference, result.nextPageToken);
      }

      return Promise.resolve();
    });
  }

  const reference = storage().ref('moment_files');

  listFilesAndDirectories(reference).then(() => {
    console.log('Finished listing');
  });



  return (
    <View style={styles.container}>
      <Text style={styles.text}>Videos Screen</Text>
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

export default VideosScreen;
