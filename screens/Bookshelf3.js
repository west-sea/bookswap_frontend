import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Bookshelf3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bookshelf}>
      <View style={styles.frameParent}>
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
        <View style={styles.parentLayout}>
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
              <Text style={[styles.jojoMoyes, styles.requestTypo]}>
                JoJo Moyes
              </Text>
              <Text style={[styles.text, styles.textTypo]}>04/06</Text>
            </View>
            <View style={styles.frameContainer}>
              <View style={styles.frameContainer}>
                <View style={styles.requestWrapper}>
                  <Text style={[styles.request, styles.requestTypo]}>
                    0 Request
                  </Text>
                </View>
              </View>
              <View style={styles.hideFrom1UserWrapper}>
                <Text style={styles.textTypo}>Hide from 1 user</Text>
              </View>
            </View>
          </View>
          <Image
            style={[styles.moreHorizIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/more-horiz.png")}
          />
        </View>
      </View>
      <View style={[styles.frameParent1, styles.parentLayout]}>
        <View style={[styles.waiting1Wrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.waiting1, styles.homeTypo]}>Waiting 1</Text>
        </View>
        <View style={[styles.finish0Wrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.waiting1, styles.homeTypo]}>Finish 0</Text>
        </View>
      </View>
      <Image
        style={[styles.addBoxIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/add-box.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeTypo: {
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  bookshelf2Typo: {
    fontFamily: FontFamily.subtitle02Bold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  requestTypo: {
    fontSize: FontSize.size_xs,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  textTypo: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  parentLayout: {
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
    textAlign: "center",
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
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  bookshelf2: {
    left: 26,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    top: 26,
    position: "absolute",
  },
  rectangleIcon: {
    width: 86,
    height: 114,
  },
  meBeforeYou: {
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  jojoMoyes: {
    marginTop: 7,
    textAlign: "left",
  },
  text: {
    marginTop: 7,
  },
  request: {
    textAlign: "center",
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
  frameContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  hideFrom1UserWrapper: {
    marginLeft: 6,
    flexDirection: "row",
  },
  frameGroup: {
    alignSelf: "stretch",
    marginLeft: 13,
    justifyContent: "space-between",
    flex: 1,
  },
  moreHorizIcon: {
    marginLeft: 13,
  },
  bookshelfInner: {
    top: 133,
    left: 17,
    position: "absolute",
  },
  waiting1: {
    fontSize: FontSize.subtitle02Bold_size,
    textAlign: "center",
  },
  waiting1Wrapper: {
    backgroundColor: Color.colorGainsboro_200,
  },
  finish0Wrapper: {
    marginLeft: 8,
  },
  frameParent1: {
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
    width: "100%",
    height: 640,
    overflow: "hidden",
    flex: 1,
  },
});

export default Bookshelf3;
