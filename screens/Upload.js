import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const Upload = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.upload}>
      <Pressable
        style={styles.arrowBackIos}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios.png")}
        />
      </Pressable>
      <Text style={styles.upload1}>Upload</Text>
      <View style={styles.uploadChild} />
      <View style={[styles.titleParent, styles.parentFlexBox]}>
        <Text style={[styles.title, styles.titleTypo]}>Title</Text>
        <View style={styles.frameChild} />
      </View>
      <Text style={[styles.cover, styles.titleTypo]}>Cover</Text>
      <View style={[styles.authorParent, styles.parentFlexBox]}>
        <Text style={[styles.title, styles.titleTypo]}>Author</Text>
        <View style={styles.frameChild} />
      </View>
      <Text style={[styles.genre, styles.titleTypo]}>Genre</Text>
      <Text style={[styles.visibility, styles.titleTypo]}>Visibility</Text>
      <View style={styles.frameParent}>
        <View style={styles.wrapperBorder}>
          <Text style={[styles.major, styles.majorTypo]}>Major</Text>
        </View>
        <View style={[styles.novelWrapper, styles.wrapperBorder]}>
          <Text style={[styles.major, styles.majorTypo]}>Novel</Text>
        </View>
        <View style={[styles.novelWrapper, styles.wrapperBorder]}>
          <Text style={[styles.major, styles.majorTypo]}>Essay</Text>
        </View>
        <View style={[styles.novelWrapper, styles.wrapperBorder]}>
          <Text style={[styles.major, styles.majorTypo]}>Poetry</Text>
        </View>
        <View style={[styles.novelWrapper, styles.wrapperBorder]}>
          <Text style={[styles.major, styles.majorTypo]}>Genre</Text>
        </View>
        <View style={[styles.novelWrapper, styles.wrapperBorder]}>
          <Text style={[styles.major, styles.majorTypo]}>Genre</Text>
        </View>
        <View style={[styles.novelWrapper, styles.wrapperBorder]}>
          <Text style={[styles.major, styles.majorTypo]}>Genre</Text>
        </View>
      </View>
      <Text style={styles.ok}>OK</Text>
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
      <Image
        style={[styles.uploadChild2, styles.uploadChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Text style={[styles.allUsers, styles.nobodyTypo]}>All users</Text>
      <Text style={[styles.nobody, styles.nobodyTypo]}>Nobody</Text>
      <Text style={[styles.showToSome, styles.nobodyTypo]}>
        Show to Some users
      </Text>
      <Text style={[styles.hideFromSome, styles.majorTypo]}>
        Hide from Some users
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
      <Image
        style={[styles.personCancelIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/person-cancel.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Upload1")}
      />
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
  titleTypo: {
    fontSize: FontSize.subtitle02Bold_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.subtitle02Bold,
    fontWeight: "700",
  },
  majorTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    color: Color.labelColorLightPrimary,
  },
  wrapperBorder: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    borderRadius: Border.br_21xl,
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
  },
  uploadChildLayout: {
    height: 10,
    width: 10,
    position: "absolute",
  },
  nobodyTypo: {
    left: 60,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  iconLayout: {
    height: 16,
    width: 16,
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
  upload1: {
    marginLeft: -35,
    top: 26,
    left: "50%",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.subtitle02Bold,
    fontWeight: "700",
    position: "absolute",
  },
  uploadChild: {
    left: 121,
    borderWidth: 2,
    width: 86,
    height: 114,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    top: 72,
    position: "absolute",
  },
  title: {
    textAlign: "left",
    flex: 1,
  },
  frameChild: {
    borderRadius: Border.br_9xs,
    borderColor: Color.colorGainsboro_300,
    width: 199,
    height: 30,
    marginLeft: 12,
    borderWidth: 1,
    alignItems: "center",
    borderStyle: "solid",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  titleParent: {
    top: 222,
  },
  cover: {
    width: 69,
    textAlign: "left",
    left: 40,
    fontSize: FontSize.subtitle02Bold_size,
    position: "absolute",
    top: 72,
  },
  authorParent: {
    top: 264,
  },
  genre: {
    top: 314,
    textAlign: "left",
    left: 40,
    fontSize: FontSize.subtitle02Bold_size,
    position: "absolute",
  },
  visibility: {
    top: 436,
    textAlign: "left",
    left: 40,
    fontSize: FontSize.subtitle02Bold_size,
    position: "absolute",
  },
  major: {
    textAlign: "center",
  },
  novelWrapper: {
    marginLeft: 6,
  },
  frameParent: {
    top: 351,
    flexWrap: "wrap",
    flexDirection: "row",
    width: 280,
    left: 40,
    position: "absolute",
  },
  ok: {
    top: 28,
    left: 308,
    fontSize: FontSize.size_base,
    color: "#c2c2c2",
    textAlign: "left",
    fontFamily: FontFamily.subtitle02Bold,
    fontWeight: "700",
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
    height: 10,
    width: 10,
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
    height: 10,
    width: 10,
  },
  uploadChild1: {
    top: 522,
    left: 41,
    height: 10,
    width: 10,
  },
  uploadChild2: {
    top: 552,
    left: 42,
  },
  allUsers: {
    top: 465,
  },
  nobody: {
    top: 492,
  },
  showToSome: {
    top: 519,
  },
  hideFromSome: {
    top: 549,
    left: 61,
    textAlign: "left",
    position: "absolute",
  },
  lockIcon: {
    left: 111,
    top: 492,
  },
  personAddIcon: {
    left: 184,
    top: 519,
  },
  personCancelIcon: {
    top: 550,
    left: 194,
  },
  rectanglePressable: {
    top: 66,
    left: 0,
    backgroundColor: "rgba(217, 217, 217, 0)",
    width: 360,
    height: 574,
    position: "absolute",
  },
  upload: {
    height: 640,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
});

export default Upload;
