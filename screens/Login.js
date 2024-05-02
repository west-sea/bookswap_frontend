import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.login, styles.loginBg]}>
      <Pressable
        style={[styles.clipPathGroupParent, styles.groupParentPosition]}
        onPress={() => navigation.navigate("Login1")}
      >
        <Image
          style={styles.clipPathGroup}
          resizeMode="cover"
          source={require("../assets/clip-path-group.png")}
        />
        <Text style={[styles.signInWith, styles.bookswapFlexBox]}>
          Sign in with Google
        </Text>
      </Pressable>
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-12.png")}
        />
        <Text style={[styles.bookswap, styles.bookswapFlexBox]}>BookSwap</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginBg: {
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  groupParentPosition: {
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  bookswapFlexBox: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  clipPathGroup: {
    width: 20,
    height: 20,
  },
  signInWith: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    marginLeft: 10,
  },
  clipPathGroupParent: {
    marginLeft: -140,
    top: 560,
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.labelColorLightPrimary,
    borderWidth: 2,
    width: 280,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  frameChild: {
    width: 100,
    height: 100,
  },
  bookswap: {
    fontSize: 30,
    fontFamily: FontFamily.interRegular,
    marginTop: 24,
  },
  groupParent: {
    marginLeft: -75,
    top: 114,
  },
  login: {
    flex: 1,
    width: "100%",
    height: 640,
  },
});

export default Login;
