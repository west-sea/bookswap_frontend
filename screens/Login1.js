import * as React from "react";
import { Image, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const Login1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Pressable
        style={styles.image1}
        onPress={() => navigation.navigate("Onboarding")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: -191,
    marginLeft: -180,
    height: "100%",
    width: "100%",
  },
  image1: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: 360,
    height: 382,
  },
  login: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login1;
