import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Text, View, Pressable, Modal } from "react-native";
import MessageInner from "../components/MessageInner";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Message = () => {
  const [frameContainer8Visible, setFrameContainer8Visible] = useState(false);

  const openFrameContainer8 = useCallback(() => {
    setFrameContainer8Visible(true);
  }, []);

  const closeFrameContainer8 = useCallback(() => {
    setFrameContainer8Visible(false);
  }, []);

  return (
    <>
      <View style={styles.message}>
        <View style={[styles.frameParent, styles.wrapperSpaceBlock]}>
          <View style={styles.groupParent}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/group-1.png")}
            />
            <Text style={[styles.home, styles.homeFlexBox]}>Home</Text>
          </View>
          <View style={styles.groupParent}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/group-1.png")}
            />
            <Text style={[styles.home, styles.homeFlexBox]}>Message</Text>
          </View>
          <View style={styles.groupParent}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/group-1.png")}
            />
            <Text style={[styles.home, styles.homeFlexBox]}>Bookshelf</Text>
          </View>
          <View style={styles.groupParent}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/group-1.png")}
            />
            <Text style={[styles.home, styles.homeFlexBox]}>Profile</Text>
          </View>
        </View>
        <Text style={styles.message2}>Message</Text>
        <View style={styles.frameGroup}>
          <Pressable
            style={styles.groupParent2Layout}
            onPress={openFrameContainer8}
          >
            <Image
              style={styles.frameChild1}
              resizeMode="cover"
              source={require("../assets/group-41.png")}
            />
            <View style={styles.bananaParent}>
              <Text style={[styles.banana, styles.textTypo1]}>Banana</Text>
              <Text style={[styles.whenDoYou, styles.textTypo]}>
                When do you want to meet?
              </Text>
            </View>
            <View style={styles.pmParent}>
              <Text style={styles.pmTypo}>10:30 PM</Text>
              <View style={[styles.wrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.text, styles.textTypo]}>2</Text>
              </View>
            </View>
          </Pressable>
          <View style={[styles.groupParent2, styles.groupParent2Layout]}>
            <Image
              style={styles.frameChild1}
              resizeMode="cover"
              source={require("../assets/group-42.png")}
            />
            <View style={styles.bananaParent}>
              <Text style={[styles.banana, styles.textTypo1]}>Apple</Text>
              <Text style={[styles.whenDoYou, styles.textTypo]}>
                Thank you. See u tomorrow
              </Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.pmTypo}>22:20</Text>
            </View>
          </View>
          <View style={[styles.groupParent2, styles.groupParent2Layout]}>
            <Image
              style={styles.frameChild1}
              resizeMode="cover"
              source={require("../assets/group-42.png")}
            />
            <View style={styles.bananaParent}>
              <Text style={[styles.banana, styles.textTypo1]}>Bread</Text>
              <Text style={[styles.whenDoYou, styles.textTypo]}>Sure!</Text>
            </View>
            <Text style={[styles.text2, styles.pmTypo]}>08:30</Text>
          </View>
          <View style={[styles.groupParent2, styles.groupParent2Layout]}>
            <Image
              style={styles.frameChild1}
              resizeMode="cover"
              source={require("../assets/group-42.png")}
            />
            <View style={styles.bananaParent}>
              <Text style={[styles.banana, styles.textTypo1]}>FamFamYo</Text>
              <Text style={[styles.whenDoYou, styles.textTypo]}>
                Can I ask edition?
              </Text>
            </View>
            <Text style={[styles.text2, styles.pmTypo]}>03/29</Text>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer8Visible}>
        <View style={styles.frameContainer8Overlay}>
          <Pressable
            style={styles.frameContainer8Bg}
            onPress={closeFrameContainer8}
          />
          <MessageInner onClose={closeFrameContainer8} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  wrapperSpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
  },
  homeFlexBox: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  textTypo1: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  textTypo: {
    fontSize: FontSize.subtitle02Bold_size,
    textAlign: "left",
  },
  groupParent2Layout: {
    width: 320,
    flexDirection: "row",
  },
  pmTypo: {
    color: Color.colorDarkgray_400,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  frameChild: {
    width: 32,
    height: 32,
  },
  home: {
    fontSize: FontSize.size_base,
    marginTop: 8,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
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
    flexDirection: "row",
    paddingVertical: 0,
    position: "absolute",
  },
  message2: {
    top: 26,
    left: 26,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.subtitle02Bold,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  frameContainer8Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer8Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameChild1: {
    width: 69,
    height: 59,
  },
  banana: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  whenDoYou: {
    marginTop: 6,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.subtitle02Bold_size,
    fontFamily: FontFamily.interRegular,
  },
  bananaParent: {
    marginLeft: 8,
    flex: 1,
  },
  text: {
    color: Color.systemBackgroundLightPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  wrapper: {
    borderRadius: Border.br_mini,
    backgroundColor: "#ff6746",
    width: 30,
    height: 30,
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    marginTop: 4,
  },
  pmParent: {
    alignItems: "flex-end",
    marginLeft: 8,
  },
  container: {
    marginLeft: 8,
    alignItems: "center",
  },
  groupParent2: {
    marginTop: 16,
  },
  text2: {
    marginLeft: 8,
  },
  frameGroup: {
    top: 78,
    left: 20,
    position: "absolute",
  },
  message: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    width: "100%",
    height: 640,
    overflow: "hidden",
    flex: 1,
  },
});

export default Message;
