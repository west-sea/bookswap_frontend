import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Text, Pressable, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Frame1 from "../components/Frame1";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Edit1 = () => {
  const navigation = useNavigation();
  const [frameContainer14Visible, setFrameContainer14Visible] = useState(false);

  const openFrameContainer14 = useCallback(() => {
    setFrameContainer14Visible(true);
  }, []);

  const closeFrameContainer14 = useCallback(() => {
    setFrameContainer14Visible(false);
  }, []);

  return (
    <>
      <View style={styles.edit2}>
        <Image
          style={styles.arrowBackIosIcon}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios.png")}
        />
        <Text style={[styles.edit, styles.ok1Typo]}>Edit</Text>
        <Pressable
          style={styles.ok}
          onPress={() => navigation.navigate("Bookshelf3")}
        >
          <Text style={[styles.ok1, styles.ok1Typo]}>OK</Text>
        </Pressable>
        <Image
          style={styles.edit2Child}
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
            <Text style={[styles.meBeforeYou, styles.titleTypo]}>
              JoJo Moyes
            </Text>
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
        <Image
          style={styles.editIcon}
          resizeMode="cover"
          source={require("../assets/edit.png")}
        />
        <Image
          style={[styles.edit2Item, styles.edit2Layout]}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.edit2Inner, styles.edit2Layout]}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.edit2Layout]}
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
        <Pressable style={styles.frameGroup} onPress={openFrameContainer14}>
          <View style={[styles.sejunParent, styles.parentFlexBox]}>
            <Text style={[styles.sejun, styles.majorTypo]}>sejun</Text>
            <Image
              style={styles.materialSymbolscancelOutlinIcon}
              resizeMode="cover"
              source={require("../assets/materialsymbolscanceloutline.png")}
            />
          </View>
          <Text style={[styles.addUsers, styles.majorTypo]}>Add users....</Text>
        </Pressable>
        <View style={[styles.groupParent, styles.edit2Position]}>
          <Image
            style={styles.edit2Layout}
            resizeMode="cover"
            source={require("../assets/group-7.png")}
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

      <Modal animationType="fade" transparent visible={frameContainer14Visible}>
        <View style={styles.frameContainer14Overlay}>
          <Pressable
            style={styles.frameContainer14Bg}
            onPress={closeFrameContainer14}
          />
          <Frame1 onClose={closeFrameContainer14} />
        </View>
      </Modal>
    </>
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
  edit2Layout: {
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
  edit2Position: {
    left: 41,
    position: "absolute",
  },
  arrowBackIosIcon: {
    top: 24,
    left: 25,
    width: 24,
    height: 24,
    position: "absolute",
  },
  edit: {
    marginLeft: -19,
    top: 26,
    left: "50%",
    fontSize: FontSize.size_xl,
    textAlign: "center",
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
  edit2Child: {
    left: 121,
    width: 86,
    height: 114,
    top: 72,
    position: "absolute",
  },
  title: {
    fontFamily: FontFamily.subtitle02Bold,
    fontWeight: "700",
    fontSize: FontSize.subtitle02Bold_size,
    flex: 1,
  },
  meBeforeYou: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  meBeforeYouWrapper: {
    borderColor: Color.colorGainsboro_300,
    width: 199,
    height: 30,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    marginLeft: 12,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  titleParent: {
    top: 222,
    width: 280,
    alignItems: "center",
    left: 40,
    position: "absolute",
  },
  cover: {
    width: 69,
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
    position: "absolute",
  },
  genre: {
    top: 314,
    left: 40,
    fontSize: FontSize.subtitle02Bold_size,
    fontFamily: FontFamily.subtitle02Bold,
    fontWeight: "700",
    position: "absolute",
  },
  visibility: {
    top: 436,
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
    borderRadius: Border.br_21xl,
    borderColor: Color.labelColorLightPrimary,
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
  editIcon: {
    top: 170,
    left: 190,
    width: 32,
    height: 32,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  edit2Item: {
    top: 468,
    left: 41,
    position: "absolute",
  },
  edit2Inner: {
    top: 495,
    left: 41,
    position: "absolute",
  },
  ellipseIcon: {
    top: 522,
    left: 41,
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
  frameContainer14Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer14Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  sejun: {
    textAlign: "left",
  },
  materialSymbolscancelOutlinIcon: {
    width: 12,
    height: 12,
    marginLeft: 4,
    overflow: "hidden",
  },
  sejunParent: {
    backgroundColor: Color.colorGainsboro_300,
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_9xs,
    paddingBottom: Padding.p_9xs,
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  addUsers: {
    marginLeft: 4,
    textAlign: "left",
  },
  frameGroup: {
    top: 572,
    left: 57,
    padding: Padding.p_5xs,
    borderColor: Color.labelColorLightPrimary,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  hideFromSome: {
    marginLeft: 8,
    textAlign: "left",
  },
  personCancelIcon: {
    marginLeft: 8,
  },
  groupParent: {
    top: 549,
    alignItems: "center",
    flexDirection: "row",
  },
  edit2: {
    width: "100%",
    height: 640,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
});

export default Edit1;
