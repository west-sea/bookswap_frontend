import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const MessageInner = ({ onClose }) => {
  return (
    <View style={[styles.messageInner, styles.frameChildBg]}>
      <View style={styles.messageInnerChild} />
      <View style={[styles.wrapper, styles.wrapperBorder]}>
        <Text style={styles.text}>교환 완료</Text>
      </View>
      <View style={[styles.container, styles.wrapperBorder]}>
        <Text style={styles.text}>요청 취소</Text>
      </View>
      <Image
        style={styles.arrowBackIosIcon}
        resizeMode="cover"
        source={require("../assets/arrow-back-ios.png")}
      />
      <Image
        style={styles.messageInnerItem}
        resizeMode="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <Text style={[styles.meBeforeYou, styles.sendTypo]}>Me Before You</Text>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={[styles.frameChild, styles.frameChildBorder]} />
        <Text style={[styles.send, styles.sendTypo]}>Send</Text>
      </View>
      <View style={[styles.frameGroup, styles.frameFlexBox]}>
        <View style={[styles.helloWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.hello, styles.helloTypo]}>Hello!</Text>
        </View>
        <Text style={[styles.pm, styles.pmTypo]}>10:29 PM</Text>
      </View>
      <View style={[styles.groupParent, styles.parentFlexBox]}>
        <Image
          style={styles.frameItem}
          resizeMode="cover"
          source={require("../assets/group-31.png")}
        />
        <Text style={[styles.banana, styles.sendTypo]}>Banana</Text>
      </View>
      <View style={[styles.frameContainer, styles.frameFlexBox]}>
        <View style={[styles.helloWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.hello, styles.helloTypo]}>
            When do you want to meet?
          </Text>
        </View>
        <Text style={[styles.pm, styles.pmTypo]}>10:30 PM</Text>
      </View>
      <View style={styles.frame}>
        <Text style={styles.pmTypo}>2024. 04. 06.</Text>
      </View>
      <View
        style={[
          styles.jasonAcceptsBananasRequestWrapper,
          styles.wrapperFlexBox,
        ]}
      >
        <Text style={[styles.jasonAcceptsBananasContainer, styles.helloTypo]}>
          {`Jason accepts Banana’s request.
Schedule on appointment by cha`}
          t.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildBg: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    overflow: "hidden",
  },
  wrapperBorder: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_21xl,
    top: 108,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    position: "absolute",
  },
  sendTypo: {
    fontFamily: FontFamily.subtitle02Bold,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  frameChildBorder: {
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
  },
  frameFlexBox: {
    alignItems: "flex-end",
    left: 20,
    flexDirection: "row",
    position: "absolute",
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  helloTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.labelColorLightPrimary,
  },
  pmTypo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  messageInnerChild: {
    marginLeft: -180,
    top: 62,
    height: 93,
    backgroundColor: Color.colorWhitesmoke_100,
    left: "50%",
    position: "absolute",
    width: 360,
  },
  text: {
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_xs,
  },
  wrapper: {
    left: 75,
  },
  container: {
    left: 154,
  },
  arrowBackIosIcon: {
    top: 24,
    left: 25,
    width: 24,
    height: 24,
    position: "absolute",
  },
  messageInnerItem: {
    top: 78,
    width: 45,
    height: 59,
    left: 20,
    position: "absolute",
  },
  meBeforeYou: {
    top: 81,
    left: 77,
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontWeight: "700",
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_mini,
    width: 266,
    height: 30,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  send: {
    marginLeft: 13,
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontWeight: "700",
  },
  frameParent: {
    top: 570,
    left: 0,
    padding: 20,
    alignItems: "center",
    backgroundColor: Color.colorWhitesmoke_100,
    overflow: "hidden",
  },
  hello: {
    fontSize: FontSize.subtitle02Bold_size,
    textAlign: "left",
  },
  helloWrapper: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_9xs,
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
  },
  pm: {
    marginLeft: 4,
  },
  frameGroup: {
    top: 274,
  },
  frameItem: {
    width: 40,
    height: 40,
  },
  banana: {
    fontSize: FontSize.size_xl,
    marginLeft: 4,
    textAlign: "center",
  },
  groupParent: {
    marginLeft: -58,
    top: 16,
    alignItems: "center",
    left: "50%",
  },
  frameContainer: {
    top: 325,
  },
  frame: {
    top: 165,
    left: 133,
    borderRadius: Border.br_xl,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorWhitesmoke_100,
    position: "absolute",
  },
  jasonAcceptsBananasContainer: {
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  jasonAcceptsBananasRequestWrapper: {
    marginLeft: -114.5,
    top: 198,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_100,
    left: "50%",
    position: "absolute",
  },
  messageInner: {
    height: 640,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: 360,
  },
});

export default MessageInner;
