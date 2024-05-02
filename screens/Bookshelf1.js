import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const Bookshelf1 = () => {
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
      <Text style={[styles.bookshelf2, styles.bookshelf2Typo]}>Bookshelf</Text>
      <View style={styles.bookshelfInner}>
        <View style={styles.frameContainerLayout}>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle-5.png")}
          />
          <View style={styles.frameGroup}>
            <View>
              <Text style={[styles.meBeforeYou, styles.bookshelf2Typo]}>
                Me Before You
              </Text>
              <Text style={[styles.jojoMoyes, styles.textTypo]}>
                JoJo Moyes
              </Text>
              <Text style={[styles.text, styles.textTypo]}>04/06</Text>
            </View>
            <View style={[styles.frameWrapper, styles.frameFlexBox]}>
              <View style={styles.requestWrapper}>
                <Text style={styles.request}>0 Request</Text>
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.moreHoriz, styles.moreHorizLayout]}
            onPress={() => navigation.navigate("Bookshelf2")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/more-horiz.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.frameContainer, styles.frameContainerLayout]}>
        <View style={[styles.waiting1Wrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.waiting1, styles.homeTypo]}>Waiting 1</Text>
        </View>
        <View style={[styles.finish0Wrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.waiting1, styles.homeTypo]}>Finish 0</Text>
        </View>
      </View>
      <Image
        style={[styles.addBoxIcon, styles.moreHorizLayout]}
        resizeMode="cover"
        source={require("../assets/add-box.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  homeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    color: Color.labelColorLightPrimary,
  },
  bookshelf2Typo: {
    textAlign: "left",
    fontFamily: FontFamily.subtitle02Bold,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
  },
  textTypo: {
    marginTop: 7,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  moreHorizLayout: {
    height: 24,
    width: 24,
  },
  frameContainerLayout: {
    width: 320,
    flexDirection: "row",
  },
  wrapperFlexBox: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_7xs,
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
    marginTop: 8,
    fontSize: FontSize.size_base,
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
    position: "absolute",
  },
  bookshelf2: {
    left: 26,
    fontSize: FontSize.size_xl,
    top: 26,
    position: "absolute",
  },
  rectangleIcon: {
    width: 86,
    height: 114,
  },
  meBeforeYou: {
    fontSize: FontSize.size_base,
  },
  jojoMoyes: {
    color: Color.labelColorLightPrimary,
    marginTop: 7,
  },
  text: {
    color: Color.colorGray_200,
  },
  request: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  requestWrapper: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_21xl,
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    marginTop: 24,
    alignItems: "center",
  },
  frameGroup: {
    marginLeft: 13,
    flex: 1,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  moreHoriz: {
    marginLeft: 13,
  },
  bookshelfInner: {
    top: 133,
    left: 17,
    position: "absolute",
  },
  waiting1: {
    fontSize: FontSize.subtitle02Bold_size,
  },
  waiting1Wrapper: {
    backgroundColor: Color.colorGainsboro_200,
  },
  finish0Wrapper: {
    marginLeft: 8,
  },
  frameContainer: {
    top: 81,
    left: 20,
    position: "absolute",
  },
  addBoxIcon: {
    left: 310,
    top: 26,
    position: "absolute",
  },
  bookshelf: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    height: 640,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Bookshelf1;
