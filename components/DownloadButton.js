import React, { useState,useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { colors, getRandomColor } from "../helpers/colors.js";
import TabBarIcon from "../components/TabBarIcon";
import * as FileSystem from "expo-file-system";
import AsyncStorage from "@react-native-community/async-storage";

const DownloadButton = ({name,url}) => {
  let [downloadProgress, setDownloadProgress] = useState(0);
  let [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    _isContentDownloaded(name)
  },[name])

  const _callback = (downloadProgress) => {
    const progress =
      downloadProgress.totalBytesWritten /
      downloadProgress.totalBytesExpectedToWrite;
    setDownloadProgress(progress === 1 ? 100 : (progress * 100).toFixed(2));
  };

  const _getPausedDownload = async () => {
    try {
      const value = await AsyncStorage.getItem(name);
      return value;
    } catch (e) {
      console.log(e);
    }
  };

  const _resumeDownload = async (pausedDownloadJSON) => {
    try {
      const pausedDownload = JSON.parse(pausedDownloadJSON);
      const downloadResumable = new FileSystem.DownloadResumable(
        pausedDownload.url,
        pausedDownload.fileUri,
        pausedDownload.options,
        _callback,
        pausedDownload.resumeData
      );
      await downloadResumable.resumeAsync()
    } catch (e) {
      console.log(e);
    } finally {

        setDownloaded(true);
    }
  };

  const _startDownload = async () => {
    try {
      let uri = FileSystem.documentDirectory + name;
      const downloadResumable = FileSystem.createDownloadResumable(
        url,
        uri,
        {},
        _callback
      );

      AsyncStorage.setItem(
        name,
        JSON.stringify(downloadResumable.savable())
      );
      await downloadResumable.downloadAsync()
    } catch (e) {
      console.error(e);
    } finally {
      setDownloaded(true);
    }
  };

  const _downloadAsync = async () => {
    try {
      let pausedDownloadJSON = await _getPausedDownload();
      pausedDownloadJSON !== null
        ? _resumeDownload(pausedDownloadJSON)
        : _startDownload();
    } catch (e) {}
  };

  const _isContentDownloaded = async (name) => {
    try {
      let uri = FileSystem.documentDirectory + name;
      let info = await FileSystem.getInfoAsync(uri);
      let downloaded = info.exists;
      setDownloaded(downloaded);
    } catch (e) {
      console.log("_isContentDownloaded", e);
    }
  };

  return downloaded ? (
    <View style={styles.touchable}>
      <TabBarIcon focused={false} size={34} name="check-circle" />
    </View>
  ) : (
    <TouchableOpacity
      style={styles.touchable}
      onPress={() => {
        _downloadAsync();
      }}
    >
      <TabBarIcon focused={true} size={34} name="file-download" />
      <Text style={styles.downloadProgress}>
        {downloadProgress === 0 ? "" : downloadProgress + "%"}
      </Text>
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

export default DownloadButton;
