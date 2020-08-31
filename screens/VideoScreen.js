import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Video } from "expo-av";
import { colors } from "../helpers/colors.js";
import storage from "@react-native-firebase/storage";
import * as FileSystem from "expo-file-system";
import Loading from "../components/Loading.js";
import { useDimensions } from "@react-native-community/hooks";

const VideoScreen = (props) => {
  const dimensions = useDimensions();
  const { width, height } = useDimensions().window;
  let { name, url } = props.route.params;
  let [uri, setUri] = useState(url);
  let [loading, setLoading] = useState(true);

  const _isContentDownloaded = async (name) => {
    try {
      let uri = FileSystem.documentDirectory + name;
      let info = await FileSystem.getInfoAsync(uri);
      let downloaded = info.exists;
      if (downloaded) {
        let cUri = await FileSystem.getContentUriAsync(uri);
        console.log("cUri:", cUri);
        setUri(cUri);
      }
    } catch (e) {
      console.log("_isContentDowloaded", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    _isContentDownloaded(name);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <Video
        source={{ uri }}
        useNativeControls={true}
        shouldPlay={true}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        style={{ width, height: width * 0.7 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default VideoScreen;
