import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Edit from "../components/Edit";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const Bookshelf2 = () => {
  const navigation = useNavigation();
  const [editTextVisible, setEditTextVisible] = useState(false);

  const openEditText = useCallback(() => {
    setEditTextVisible(true);
  }, []);

  const closeEditText = useCallback(() => {
    setEditTextVisible(false);
  }, []);

  return (
    <>
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
        <Text style={[styles.bookshelf2, styles.bookshelf2Typo]}>
          Bookshelf
        </Text>
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
                  <Text style={[styles.request, styles.edit1Typo]}>
                    0 Request
                  </Text>
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
        <View style={[styles.frameContainer, styles.frameContainerLayout]}>
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
        <View style={styles.editParent}>
          <Pressable onPress={openEditText}>
            <Text style={[styles.edit1, styles.edit1Typo]}>Edit</Text>
          </Pressable>
          <Text style={[styles.delete, styles.textTypo]}>Delete</Text>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={editTextVisible}>
        <View style={styles.editTextOverlay}>
          <Pressable style={styles.editTextBg} onPress={closeEditText} />
          <Edit onClose={closeEditText} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  homeTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  bookshelf2Typo: {
    fontFamily: FontFamily.subtitle02Bold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  textTypo: {
    marginTop: 7,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  edit1Typo: {
    fontSize: FontSize.size_xs,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  iconLayout: {
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
    textAlign: "center",
    color: Color.labelColorLightPrimary,
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
    color: Color.labelColorLightPrimary,
  },
  text: {
    color: Color.colorGray_200,
  },
  request: {
    textAlign: "center",
  },
  requestWrapper: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
    justifyContent: "center",
    borderRadius: Border.br_21xl,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
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
    color: Color.labelColorLightPrimary,
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
  editTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  editTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  edit1: {
    alignSelf: "stretch",
    textAlign: "left",
  },
  delete: {
    color: "#ff2828",
  },
  editParent: {
    top: 154,
    left: 286,
    borderRadius: 8,
    padding: Padding.p_5xs,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  bookshelf: {
    width: "100%",
    height: 640,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
});

export default Bookshelf2;
