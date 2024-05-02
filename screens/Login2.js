import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Login2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Text style={styles.welcomeToBookswap}>{`Welcome to BookSwap
Jason!`}</Text>
      <View style={[styles.uploadMyBookWrapper, styles.wrapperBorder]}>
        <Text style={styles.uploadMyBook}>Upload My Book</Text>
      </View>
      <Pressable
        style={[styles.seeOtherBooksWrapper, styles.wrapperBorder]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.uploadMyBook}>See other Books</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperBorder: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 280,
    borderWidth: 2,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    left: 39,
    position: "absolute",
  },
  welcomeToBookswap: {
    top: 167,
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    left: 39,
    position: "absolute",
  },
  uploadMyBook: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  uploadMyBookWrapper: {
    top: 424,
  },
  seeOtherBooksWrapper: {
    top: 371,
  },
  login: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default Login2;
