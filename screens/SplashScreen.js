import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={styles.splashScreen}>
      <View style={styles.groupParent}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-11.png")}
        />
        <Text style={styles.bookswap}>BookSwap</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    width: 120,
    height: 120,
  },
  bookswap: {
    fontSize: 36,
    fontFamily: FontFamily.interRegular,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    marginTop: 24,
  },
  groupParent: {
    position: "absolute",
    top: 214,
    left: 90,
    alignItems: "center",
  },
  splashScreen: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default SplashScreen;
