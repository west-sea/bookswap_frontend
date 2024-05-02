import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Upload1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.upload}>
      <Image
        style={styles.arrowBackIosIcon}
        resizeMode="cover"
        source={require("../assets/arrow-back-ios.png")}
      />
      <Text style={[styles.upload1, styles.ok1Typo]}>Upload</Text>
      <Image
        style={styles.uploadChild}
        resizeMode="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <View style={[styles.titleParent, styles.parentFlexBox]}>
        <Text style={[styles.title, styles.titleTypo]}>Title</Text>
        <View style={styles.meBeforeYouWrapper}>
          <Text style={[styles.meBeforeYou, styles.titleTypo]}>
            Me Before You
          </Text>
        </View>
      </View>
      <Text style={[styles.cover, styles.titleTypo]}>Cover</Text>
      <View style={[styles.authorParent, styles.parentFlexBox]}>
        <Text style={[styles.title, styles.titleTypo]}>Author</Text>
        <View style={styles.meBeforeYouWrapper}>
          <Text style={[styles.meBeforeYou, styles.titleTypo]}>JoJo Moyes</Text>
        </View>
      </View>
      <Text style={[styles.genre, styles.titleTypo]}>Genre</Text>
      <Text style={[styles.visibility, styles.titleTypo]}>Visibility</Text>
      <View style={styles.frameParent}>
        <View style={styles.majorWrapper}>
          <Text style={[styles.major, styles.majorTypo]}>Major</Text>
        </View>
        <View style={[styles.novelWrapper, styles.wrapperBorder]}>
          <Text style={[styles.major, styles.majorTypo]}>Novel</Text>
        </View>
        <View style={styles.wrapperBorder}>
          <Text style={[styles.major, styles.majorTypo]}>Essay</Text>
        </View>
        <View style={styles.wrapperBorder}>
          <Text style={[styles.major, styles.majorTypo]}>Poetry</Text>
        </View>
        <View style={styles.wrapperBorder}>
          <Text style={[styles.major, styles.majorTypo]}>Genre</Text>
        </View>
        <View style={styles.wrapperBorder}>
          <Text style={[styles.major, styles.majorTypo]}>Genre</Text>
        </View>
        <View style={styles.wrapperBorder}>
          <Text style={[styles.major, styles.majorTypo]}>Genre</Text>
        </View>
        <View style={styles.wrapperBorder}>
          <Text style={[styles.major, styles.majorTypo]}>Genre</Text>
        </View>
      </View>
      <Pressable
        style={styles.ok}
        onPress={() => navigation.navigate("Bookshelf1")}
      >
        <Text style={[styles.ok1, styles.ok1Typo]}>OK</Text>
      </Pressable>
      <Image
        style={styles.editIcon}
        resizeMode="cover"
        source={require("../assets/edit.png")}
      />
      <Image
        style={[styles.uploadItem, styles.uploadChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={styles.uploadInner}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.uploadChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.uploadChild1, styles.uploadChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Text style={[styles.allUsers, styles.nobodyTypo]}>All users</Text>
      <Text style={[styles.nobody, styles.nobodyPosition]}>Nobody</Text>
      <Text style={[styles.showToSome, styles.showToSomePosition]}>
        Show to Some users
      </Text>
      <Image
        style={[styles.lockIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/lock.png")}
      />
      <Image
        style={[styles.personAddIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/person-add.png")}
      />
      <View style={[styles.ellipseParent, styles.parentFlexBox]}>
        <Image
          style={styles.uploadChildLayout}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Text style={[styles.hideFromSome, styles.majorTypo]}>
          Hide from Some users
        </Text>
        <Image
          style={[styles.personCancelIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/person-cancel.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ok1Typo: {
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.subtitle02Bold,
    fontWeight: "700",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  titleTypo: {
    fontSize: FontSize.subtitle02Bold_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  majorTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    color: Color.labelColorLightPrimary,
  },
  wrapperBorder: {
    marginLeft: 6,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    borderColor: Color.labelColorLightPrimary,
    borderRadius: Border.br_21xl,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  uploadChildLayout: {
    height: 10,
    width: 10,
  },
  nobodyTypo: {
    left: 60,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  nobodyPosition: {
    top: 492,
    position: "absolute",
  },
  showToSomePosition: {
    top: 519,
    position: "absolute",
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  arrowBackIosIcon: {
    top: 24,
    left: 25,
    width: 24,
    height: 24,
    position: "absolute",
  },
  upload1: {
    marginLeft: -35,
    top: 26,
    left: "50%",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    position: "absolute",
  },
  uploadChild: {
    left: 121,
    width: 86,
    height: 114,
    top: 72,
    position: "absolute",
  },
  title: {
    textAlign: "left",
    fontFamily: FontFamily.subtitle02Bold,
    fontWeight: "700",
    fontSize: FontSize.subtitle02Bold_size,
    flex: 1,
  },
  meBeforeYou: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "left",
  },
  meBeforeYouWrapper: {
    borderRadius: Border.br_9xs,
    borderColor: Color.colorGainsboro_300,
    width: 199,
    height: 30,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    marginLeft: 12,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  titleParent: {
    top: 222,
    width: 280,
    alignItems: "center",
    left: 40,
  },
  cover: {
    width: 69,
    textAlign: "left",
    left: 40,
    fontSize: FontSize.subtitle02Bold_size,
    fontFamily: FontFamily.subtitle02Bold,
    fontWeight: "700",
    position: "absolute",
    top: 72,
  },
  authorParent: {
    top: 264,
    width: 280,
    alignItems: "center",
    left: 40,
  },
  genre: {
    top: 314,
    textAlign: "left",
    left: 40,
    fontSize: FontSize.subtitle02Bold_size,
    fontFamily: FontFamily.subtitle02Bold,
    fontWeight: "700",
    position: "absolute",
  },
  visibility: {
    top: 436,
    textAlign: "left",
    left: 40,
    fontSize: FontSize.subtitle02Bold_size,
    fontFamily: FontFamily.subtitle02Bold,
    fontWeight: "700",
    position: "absolute",
  },
  major: {
    textAlign: "center",
  },
  majorWrapper: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    borderColor: Color.labelColorLightPrimary,
    borderRadius: Border.br_21xl,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  novelWrapper: {
    backgroundColor: Color.colorGainsboro_200,
  },
  frameParent: {
    top: 351,
    flexWrap: "wrap",
    flexDirection: "row",
    width: 280,
    left: 40,
    position: "absolute",
  },
  ok1: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  ok: {
    left: 308,
    top: 28,
    position: "absolute",
  },
  editIcon: {
    top: 170,
    left: 190,
    borderRadius: Border.br_xl,
    width: 32,
    height: 32,
    position: "absolute",
  },
  uploadItem: {
    top: 468,
    left: 41,
    width: 10,
    position: "absolute",
  },
  uploadInner: {
    top: 470,
    left: 43,
    width: 6,
    height: 6,
    position: "absolute",
  },
  ellipseIcon: {
    top: 495,
    left: 41,
    width: 10,
    position: "absolute",
  },
  uploadChild1: {
    top: 522,
    left: 41,
    width: 10,
    position: "absolute",
  },
  allUsers: {
    top: 465,
    position: "absolute",
  },
  nobody: {
    left: 60,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  showToSome: {
    left: 60,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  lockIcon: {
    left: 111,
    top: 492,
    position: "absolute",
  },
  personAddIcon: {
    left: 184,
    top: 519,
    position: "absolute",
  },
  hideFromSome: {
    marginLeft: 8,
    textAlign: "left",
  },
  personCancelIcon: {
    marginLeft: 8,
  },
  ellipseParent: {
    top: 549,
    left: 42,
  },
  upload: {
    width: "100%",
    height: 640,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
});

export default Upload1;
