import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding}>
      <Image
        style={styles.onboardingChild}
        resizeMode="cover"
        source={require("../assets/group-2.png")}
      />
      <Image
        style={styles.editIcon}
        resizeMode="cover"
        source={require("../assets/edit.png")}
      />
      <View style={[styles.emailParent, styles.parentFlexBox]}>
        <Text style={[styles.email, styles.emailTypo]}>Email</Text>
        <View style={[styles.emailgooglecomWrapper, styles.frameChildLayout]}>
          <Text style={[styles.emailgooglecom, styles.completeTypo]}>
            email@google.com
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.nicknameParent, styles.parentFlexBox]}
        onPress={() => navigation.navigate("Onboarding1")}
      >
        <Text style={[styles.nickname, styles.emailTypo]}>Nickname</Text>
        <View style={styles.frameChildLayout} />
      </Pressable>
      <Text style={[styles.favoriteGenre, styles.emailTypo]}>
        Favorite Genre
      </Text>
      <View style={styles.frameParent}>
        <View style={styles.wrapperBorder}>
          <Text style={styles.major}>Major</Text>
        </View>
        <View style={[styles.novelWrapper, styles.wrapperBorder]}>
          <Text style={styles.major}>Novel</Text>
        </View>
        <View style={[styles.novelWrapper, styles.wrapperBorder]}>
          <Text style={styles.major}>Essay</Text>
        </View>
        <View style={[styles.novelWrapper, styles.wrapperBorder]}>
          <Text style={styles.major}>Poetry</Text>
        </View>
        <View style={[styles.novelWrapper, styles.wrapperBorder]}>
          <Text style={styles.major}>Genre</Text>
        </View>
        <View style={[styles.novelWrapper, styles.wrapperBorder]}>
          <Text style={styles.major}>Genre</Text>
        </View>
        <View style={[styles.novelWrapper, styles.wrapperBorder]}>
          <Text style={styles.major}>Genre</Text>
        </View>
      </View>
      <View style={styles.completeWrapper}>
        <Text style={[styles.complete, styles.completeTypo]}>Complete</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    width: 280,
    left: 40,
    position: "absolute",
  },
  emailTypo: {
    textAlign: "left",
    fontFamily: FontFamily.subtitle02Bold,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.subtitle02Bold_size,
  },
  frameChildLayout: {
    marginLeft: 12,
    height: 30,
    width: 199,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_300,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    alignItems: "center",
  },
  completeTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  wrapperBorder: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_3xs,
    borderColor: Color.labelColorLightPrimary,
    borderRadius: Border.br_21xl,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  onboardingChild: {
    top: 53,
    left: 120,
    width: 120,
    height: 120,
    position: "absolute",
  },
  editIcon: {
    top: 133,
    left: 200,
    borderRadius: Border.br_xl,
    width: 32,
    height: 32,
    position: "absolute",
  },
  email: {
    lineHeight: 21,
    flex: 1,
  },
  emailgooglecom: {
    color: Color.colorGray_300,
    fontSize: FontSize.subtitle02Bold_size,
    fontWeight: "500",
  },
  emailgooglecomWrapper: {
    backgroundColor: Color.colorWhitesmoke_200,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    flexDirection: "row",
  },
  emailParent: {
    top: 203,
  },
  nickname: {
    flex: 1,
  },
  nicknameParent: {
    top: 253,
  },
  favoriteGenre: {
    top: 303,
    left: 40,
    textAlign: "left",
    fontFamily: FontFamily.subtitle02Bold,
    fontWeight: "700",
    position: "absolute",
  },
  major: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  novelWrapper: {
    marginLeft: 6,
  },
  frameParent: {
    top: 340,
    flexWrap: "wrap",
    flexDirection: "row",
    width: 280,
    left: 40,
    position: "absolute",
  },
  complete: {
    fontSize: FontSize.size_base,
    color: Color.colorDarkgray_200,
  },
  completeWrapper: {
    top: 561,
    backgroundColor: "#f3f3f3",
    borderColor: Color.colorDarkgray_200,
    borderWidth: 2,
    padding: Padding.p_3xs,
    justifyContent: "center",
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    alignItems: "center",
    flexDirection: "row",
    width: 280,
    left: 40,
    position: "absolute",
  },
  onboarding: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    width: "100%",
    height: 640,
    overflow: "hidden",
    flex: 1,
  },
});

export default Onboarding;
