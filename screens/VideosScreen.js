import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { colors } from "../helpers/colors.js";

import storage from "@react-native-firebase/storage";
import ListItem from "../components/ListItem.js";

const VideosScreen = ({ navigation, route }) => {
  const [files, setFiles] = useState([]);

  const _getAllDirectories = async (reference, pageToken) => {
    try {
      let data = [];
      let refs = await reference.list({ pageToken });
      refs.items.forEach((item, i) => {
        data.push({ tittle: item.name, key: `${i}` });
      });
      console.log(data);
      setFiles(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const reference = storage().ref("moment_files");
    _getAllDirectories(reference);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Videos Screen</Text>
      <View style={styles.listContainer}>
        <FlatList data={files} renderItem={ListItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.black,
    paddingTop: 55,
  },
  text: {
    color: colors.white,
    fontFamily: "DMSerifDisplay_400Regular",
    fontSize: 30,
    marginBottom: 20,
  },
  listContainer: { width: "100%" },
});

export default VideosScreen;
