import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";

const Bookshelf = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bookshelf}>
      <View style={[styles.frameParent, styles.frameFlexBox]}>
        <Pressable
          style={styles.groupParent}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-1.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        </Pressable>
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-1.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Message</Text>
        </View>
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-1.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Bookshelf</Text>
        </View>
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-1.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Profile</Text>
        </View>
      </View>
      <Text style={[styles.bookshelf2, styles.addBoxPosition]}>Bookshelf</Text>
      <View style={[styles.frameGroup, styles.frameFlexBox]}>
        <View style={[styles.waiting0Wrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.waiting0, styles.homeTypo]}>Waiting 0</Text>
        </View>
        <View style={[styles.finish0Wrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.waiting0, styles.homeTypo]}>Finish 0</Text>
        </View>
      </View>
      <Pressable
        style={[styles.addBox, styles.addBoxPosition]}
        onPress={() => navigation.navigate("Upload")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/add-box.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  homeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    color: Color.labelColorLightPrimary,
  },
  addBoxPosition: {
    top: 26,
    position: "absolute",
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_21xl,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  frameChild: {
    width: 32,
    height: 32,
  },
  home: {
    fontSize: FontSize.size_base,
    marginTop: 8,
  },
  groupParent: {
    width: 80,
    alignItems: "center",
  },
  frameParent: {
    top: 546,
    left: 0,
    width: 360,
    height: 94,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    alignItems: "center",
  },
  bookshelf2: {
    left: 26,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.subtitle02Bold,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    top: 26,
  },
  waiting0: {
    fontSize: FontSize.subtitle02Bold_size,
  },
  waiting0Wrapper: {
    backgroundColor: Color.colorGainsboro_200,
  },
  finish0Wrapper: {
    marginLeft: 8,
  },
  frameGroup: {
    top: 81,
    left: 20,
    width: 320,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  addBox: {
    left: 310,
    width: 24,
    height: 24,
  },
  bookshelf: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    height: 640,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Bookshelf;
