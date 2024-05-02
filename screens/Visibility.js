import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const Visibility = () => {
  return (
    <View style={styles.visibility}>
      <Image
        style={styles.visibilityIcon}
        resizeMode="cover"
        source={require("../assets/visibility.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  visibilityIcon: {
    position: "absolute",
    height: "62.5%",
    width: "91.88%",
    top: "16.88%",
    right: "3.75%",
    bottom: "20.63%",
    left: "4.38%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  visibility: {
    flex: 1,
    width: "100%",
    height: 16,
  },
});

export default Visibility;
