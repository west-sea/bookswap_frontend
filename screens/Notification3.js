import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Border, FontSize, Color } from "../GlobalStyles";

const Notification3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notification}>
      <View style={styles.notificationChild} />
      <Pressable
        style={styles.arrowBackIos}
        onPress={() => navigation.navigate("Notification4")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios.png")}
        />
      </Pressable>
      <Text style={styles.request}>Request</Text>
      <View style={styles.frameParent}>
        <View style={styles.groupFlexBox}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-31.png")}
          />
          <View style={styles.bananaParent}>
            <Text style={[styles.banana, styles.bananaTypo]}>Banana</Text>
            <Text style={styles.minAgo}>5 min ago</Text>
          </View>
          <View style={[styles.acceptedWrapper, styles.wrapperSpaceBlock]}>
            <Text style={[styles.accepted, styles.bananaTypo]}>Accepted</Text>
          </View>
        </View>
        <View style={[styles.groupContainer, styles.groupFlexBox]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-31.png")}
          />
          <View style={styles.bananaParent}>
            <Text style={[styles.banana, styles.bananaTypo]}>Starberry</Text>
            <Text style={styles.minAgo}>20 min ago</Text>
          </View>
          <View style={[styles.acceptWrapper, styles.wrapperSpaceBlock]}>
            <Text style={[styles.accept, styles.bananaTypo]}>Accept</Text>
          </View>
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <Image
          style={styles.frameInner}
          resizeMode="cover"
          source={require("../assets/rectangle-5.png")}
        />
        <View style={styles.frameGroup}>
          <View>
            <View>
              <Text style={[styles.meBeforeYou, styles.bananaTypo]}>
                Me Before You
              </Text>
              <Text style={[styles.jojoMoyes, styles.textTypo]}>
                JoJo Moyes
              </Text>
              <Text style={[styles.text, styles.textTypo]}>04/06</Text>
            </View>
          </View>
          <View style={styles.reservatedWrapper}>
            <Text style={styles.reservated}>Reservated</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bananaTypo: {
    textAlign: "left",
    fontFamily: FontFamily.subtitle02Bold,
    fontWeight: "700",
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_3xs,
    borderWidth: 2,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  groupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    width: 320,
  },
  textTypo: {
    marginTop: 7,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  notificationChild: {
    marginLeft: -180,
    top: 62,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 360,
    height: 138,
    left: "50%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowBackIos: {
    left: 25,
    top: 24,
    width: 24,
    height: 24,
    position: "absolute",
  },
  request: {
    marginLeft: -40,
    top: 26,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.subtitle02Bold,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    width: 40,
    height: 40,
  },
  banana: {
    fontSize: FontSize.subtitle02Bold_size,
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.labelColorLightPrimary,
  },
  minAgo: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkgray_300,
    marginTop: 6,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    alignSelf: "stretch",
  },
  bananaParent: {
    marginLeft: 8,
    justifyContent: "center",
    flex: 1,
  },
  accepted: {
    fontSize: FontSize.subtitle02Bold_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  acceptedWrapper: {
    borderColor: Color.labelColorLightPrimary,
  },
  accept: {
    color: Color.colorSilver_100,
    fontSize: FontSize.subtitle02Bold_size,
    textAlign: "left",
  },
  acceptWrapper: {
    borderColor: Color.colorSilver_100,
  },
  groupContainer: {
    marginTop: 16,
  },
  frameParent: {
    top: 220,
    left: 20,
    position: "absolute",
  },
  frameInner: {
    width: 86,
    height: 114,
  },
  meBeforeYou: {
    fontSize: FontSize.size_base,
    color: Color.labelColorLightPrimary,
  },
  jojoMoyes: {
    color: Color.labelColorLightPrimary,
  },
  text: {
    color: Color.colorGray_200,
  },
  reservated: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  reservatedWrapper: {
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameGroup: {
    justifyContent: "space-between",
    marginLeft: 13,
    alignSelf: "stretch",
  },
  rectangleParent: {
    top: 72,
    flexDirection: "row",
    width: 320,
    left: 20,
    position: "absolute",
  },
  notification: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    height: 640,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Notification3;
