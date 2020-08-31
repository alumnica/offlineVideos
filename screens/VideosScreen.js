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
  const [data, setData] = useState([]);

  const _getAllDirectories = async (reference, pageToken) => {
    try {
      let data = [];
      let refs = await reference.list({ pageToken });
      //This way is quicker, because you getDownloadURL in parallel but its a JS antipattern because you are no using map array
      await Promise.all(
        refs.items.map(async (ref, i) => {
          let url = await ref.getDownloadURL();
          data.push({ tittle: ref.name, key: `${i}`, url: url });
        })
      );
      //This way is slower, double time
      // for (const [i,ref] of refs.items.entries()) {
      //   let url = await ref.getDownloadURL()
      //   data.push({ tittle: ref.name, key: `${i}`, url: url});
      // }
      setData(data);
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
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({item,index}) => {
            return <ListItem item={item} index={index} navigation={navigation} />;
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

export default VideosScreen;
