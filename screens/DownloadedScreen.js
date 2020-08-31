import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet,FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getRandomColor, colors } from "../helpers/colors.js";

import * as FileSystem from "expo-file-system";
import ListItem from "../components/ListItem.js";

const DownloadedScreen = ({ navigation, route }) => {
  let [files, setFiles] = useState([]);

  useEffect(() => {
    const _getDir = async () => {
      try {
        let all = await FileSystem.readDirectoryAsync(
          FileSystem.documentDirectory
        );
        setFiles(all);
        console.log(all);
      } catch (e) {
        console.lot("error", e);
      } finally {
      }
    };
    _getDir();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={files}
          renderItem={({item,index}) => {
            return <ListItem downloaded={true} item={item} index={index} navigation={navigation} />;
          }}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.black,
    paddingTop: 10,
  },
  listContainer: { width: "100%" },
});


export default DownloadedScreen;
