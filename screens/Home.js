import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={styles.frameParent}>
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-1.png")}
          />
          <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
        </View>
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-1.png")}
          />
          <Text style={[styles.home1, styles.home1Typo]}>Message</Text>
        </View>
        <Pressable
          style={styles.groupParent}
          onPress={() => navigation.navigate("Bookshelf")}
        >
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-1.png")}
          />
          <Text style={[styles.home1, styles.home1Typo]}>Bookshelf</Text>
        </Pressable>
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-1.png")}
          />
          <Text style={[styles.home1, styles.home1Typo]}>Profile</Text>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.framePosition]}>
        <View style={styles.wrapperBorder}>
          <Text style={[styles.major, styles.home1Typo]}>Major</Text>
        </View>
        <View style={[styles.novelWrapper, styles.wrapperBorder]}>
          <Text style={[styles.major, styles.home1Typo]}>Novel</Text>
        </View>
        <View style={[styles.novelWrapper, styles.wrapperBorder]}>
          <Text style={[styles.major, styles.home1Typo]}>Essay</Text>
        </View>
        <View style={[styles.novelWrapper, styles.wrapperBorder]}>
          <Text style={[styles.major, styles.home1Typo]}>Poetry</Text>
        </View>
        <View style={[styles.novelWrapper, styles.wrapperBorder]}>
          <Text style={[styles.major, styles.home1Typo]}>Economy</Text>
        </View>
      </View>
      <Text style={[styles.home2, styles.home2Typo]}>Home</Text>
      <View style={[styles.frameContainer, styles.framePosition]}>
        <View style={styles.rectangleLayout}>
          <View style={styles.rectangleView} />
          <View style={styles.frameParent1}>
            <View>
              <Text style={[styles.theGiver, styles.home2Typo]}>The Giver</Text>
              <Text style={[styles.loisLowry, styles.textTypo]}>
                Lois Lowry
              </Text>
              <Text style={[styles.text, styles.textTypo]}>사랑관 · 03/29</Text>
            </View>
            <View style={[styles.requestWrapper, styles.wrapperSpaceBlock]}>
              <Text style={styles.request}>Request</Text>
            </View>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={styles.rectangleView} />
          <View style={styles.frameParent1}>
            <View>
              <Text style={[styles.theGiver, styles.home2Typo]}>
                Happy Potter
              </Text>
              <Text style={[styles.loisLowry, styles.textTypo]}>
                Grand Swift
              </Text>
              <Text style={[styles.text, styles.textTypo]}>KAIST · 03/27</Text>
            </View>
            <View style={[styles.requestedParent, styles.wrapperSpaceBlock]}>
              <Text style={styles.request}>Requested</Text>
              <Image
                style={styles.checkIcon}
                resizeMode="cover"
                source={require("../assets/check.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={styles.rectangleView} />
          <View style={styles.frameParent1}>
            <View>
              <Text style={[styles.theGiver, styles.home2Typo]}>
                It’s Your Bread
              </Text>
              <Text style={[styles.loisLowry, styles.textTypo]}>
                Colma Baba
              </Text>
              <Text style={[styles.text, styles.textTypo]}>KAIST · 03/26</Text>
            </View>
            <View style={[styles.reservatedWrapper, styles.wrapperSpaceBlock]}>
              <Text style={styles.request}>Reservated</Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.search, styles.searchLayout]}
        onPress={() => navigation.navigate("Search")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/search.png")}
        />
      </Pressable>
      <Image
        style={[styles.notificationsUnreadIcon, styles.searchLayout]}
        resizeMode="cover"
        source={require("../assets/notifications-unread.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  home1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    color: Color.labelColorLightPrimary,
  },
  framePosition: {
    left: 20,
    position: "absolute",
  },
  wrapperBorder: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_21xl,
    alignItems: "center",
    flexDirection: "row",
  },
  home2Typo: {
    textAlign: "left",
    fontFamily: FontFamily.subtitle02Bold,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
  },
  textTypo: {
    marginTop: 7,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  wrapperSpaceBlock: {
    marginTop: 24,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  rectangleLayout: {
    width: 320,
    flexDirection: "row",
  },
  searchLayout: {
    height: 24,
    width: 24,
    top: 24,
    position: "absolute",
  },
  frameChild: {
    width: 32,
    height: 32,
  },
  home1: {
    marginTop: 8,
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
    flexDirection: "row",
    position: "absolute",
  },
  major: {
    fontSize: FontSize.subtitle02Bold_size,
  },
  novelWrapper: {
    marginLeft: 8,
  },
  frameGroup: {
    top: 81,
    flexDirection: "row",
  },
  home2: {
    top: 26,
    left: 26,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rectangleView: {
    borderWidth: 2,
    width: 86,
    height: 114,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
  },
  theGiver: {
    fontSize: FontSize.size_base,
  },
  loisLowry: {
    color: Color.labelColorLightPrimary,
    marginTop: 7,
  },
  text: {
    color: Color.colorGray_200,
  },
  request: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  requestWrapper: {
    borderRadius: Border.br_21xl,
    marginTop: 24,
    paddingHorizontal: Padding.p_xs,
  },
  frameParent1: {
    marginLeft: 13,
  },
  checkIcon: {
    width: 16,
    height: 16,
    marginLeft: 4,
  },
  requestedParent: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_21xl,
    marginTop: 24,
    paddingHorizontal: Padding.p_xs,
  },
  rectangleGroup: {
    marginTop: 20,
  },
  reservatedWrapper: {
    borderRadius: Border.br_11xs,
  },
  frameContainer: {
    top: 141,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  search: {
    left: 278,
  },
  notificationsUnreadIcon: {
    left: 312,
  },
  home: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default Home;
