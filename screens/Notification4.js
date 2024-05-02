import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Notification4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notification}>
      <Image
        style={styles.arrowBackIosIcon}
        resizeMode="cover"
        source={require("../assets/arrow-back-ios.png")}
      />
      <Text style={styles.notification1}>Notification</Text>
      <View style={styles.frameParent}>
        <View style={[styles.groupParent, styles.groupFlexBox]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-52.png")}
          />
          <View style={styles.bananaParent}>
            <Text style={[styles.banana, styles.textTypo]}>
              Banana님이 메세지를 보냈습니다.
            </Text>
            <Text style={[styles.secAgo, styles.textTypo]}>10 sec ago</Text>
          </View>
          <Pressable
            style={[styles.wrapper, styles.groupFlexBox]}
            onPress={() => navigation.navigate("Message")}
          >
            <Text style={[styles.text, styles.textTypo]}>메세지 보기</Text>
          </Pressable>
        </View>
        <View style={[styles.groupContainer, styles.groupFlexBox]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-52.png")}
          />
          <View style={styles.bananaParent}>
            <Text style={[styles.banana, styles.textTypo]}>
              Banana님이 회원님의 책에 요청을 보냈습니다.
            </Text>
            <Text style={[styles.secAgo, styles.textTypo]}>5 min ago</Text>
          </View>
          <View style={[styles.wrapper, styles.groupFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>요청 보기</Text>
          </View>
        </View>
        <View style={[styles.groupContainer, styles.groupFlexBox]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-51.png")}
          />
          <View style={styles.bananaParent}>
            <Text style={[styles.banana, styles.textTypo]}>
              StarBerry님이 회원님의 책에 요청을 보냈습니다.
            </Text>
            <Text style={[styles.secAgo, styles.textTypo]}>20 min ago</Text>
          </View>
          <View style={[styles.wrapper, styles.groupFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>요청 보기</Text>
          </View>
        </View>
        <View style={[styles.groupContainer, styles.groupFlexBox]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-4.png")}
          />
          <View style={styles.bananaParent}>
            <Text
              style={[styles.banana, styles.textTypo]}
            >{`000000님이 회원님의 요청을 수락했습니다. `}</Text>
            <Text style={[styles.secAgo, styles.textTypo]}>1일 전</Text>
          </View>
          <View style={[styles.wrapper, styles.groupFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>메세지 보내기</Text>
          </View>
        </View>
        <View style={[styles.groupContainer, styles.groupFlexBox]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-4.png")}
          />
          <View style={styles.bananaParent}>
            <Text style={[styles.banana, styles.textTypo]}>
              000000님이 회원님의 요청을 거절했습니다.
            </Text>
            <Text style={[styles.secAgo, styles.textTypo]}>4일 전</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.subtitle02Bold,
    fontWeight: "700",
  },
  arrowBackIosIcon: {
    top: 24,
    left: 25,
    width: 24,
    height: 24,
    position: "absolute",
  },
  notification1: {
    marginLeft: -57,
    top: 26,
    left: "50%",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.subtitle02Bold,
    fontWeight: "700",
    position: "absolute",
  },
  frameChild: {
    width: 55,
    height: 50,
  },
  banana: {
    fontSize: FontSize.subtitle02Bold_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    alignSelf: "stretch",
  },
  secAgo: {
    fontSize: FontSize.size_xs,
    color: Color.colorDarkgray_300,
    marginTop: 6,
    alignSelf: "stretch",
  },
  bananaParent: {
    justifyContent: "center",
    marginLeft: 8,
    flex: 1,
  },
  text: {
    fontSize: FontSize.subtitle02Bold_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  wrapper: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.labelColorLightPrimary,
    borderWidth: 2,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_5xs,
    marginLeft: 8,
  },
  groupParent: {
    width: 320,
    flexDirection: "row",
  },
  groupContainer: {
    marginTop: 16,
    width: 320,
    flexDirection: "row",
  },
  frameParent: {
    top: 81,
    left: 20,
    position: "absolute",
  },
  notification: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    width: "100%",
    height: 640,
    overflow: "hidden",
    flex: 1,
  },
});

export default Notification4;
