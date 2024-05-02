import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const Search2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.search}>
      <View style={styles.frameParent}>
        <View style={[styles.image2Parent, styles.parentLayout]}>
          <Image
            style={styles.image2Icon}
            resizeMode="cover"
            source={require("../assets/image-2.png")}
          />
          <View style={styles.frameGroup}>
            <View>
              <Text style={[styles.justice, styles.justiceTypo]}>JUSTICE</Text>
              <Text style={[styles.michaelJSandel, styles.e30228Typo]}>
                Michael J. Sandel
              </Text>
              <Text style={[styles.e30228, styles.e30228Typo]}>E3 · 02/28</Text>
            </View>
            <Pressable
              style={[styles.requestedParent, styles.requestWrapperBorder]}
              onPress={() => navigation.navigate("Search1")}
            >
              <Text style={styles.requested}>Requested</Text>
              <Image
                style={styles.checkIcon}
                resizeMode="cover"
                source={require("../assets/check.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={[styles.image3Parent, styles.parentLayout]}>
          <Image
            style={styles.image3Icon}
            resizeMode="cover"
            source={require("../assets/image-3.png")}
          />
          <View style={styles.frameGroup}>
            <View>
              <Text style={[styles.justice, styles.justiceTypo]}>
                JUSTICE 범죄학
              </Text>
              <Text style={[styles.michaelJSandel, styles.e30228Typo]}>
                박상민
              </Text>
              <Text style={[styles.e30228, styles.e30228Typo]}>
                사랑관 · 03/03
              </Text>
            </View>
            <View style={styles.requestWrapperBorder}>
              <Text style={styles.requested}>Request</Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.arrowBackIos, styles.closeIconLayout]}
        onPress={() => navigation.navigate("Home1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios.png")}
        />
      </Pressable>
      <View style={styles.justiceContainer}>
        <Text style={[styles.justice2, styles.justice2Typo]}>justice</Text>
        <Image
          style={[styles.closeIcon, styles.closeIconLayout]}
          resizeMode="cover"
          source={require("../assets/close.png")}
        />
      </View>
      <View style={styles.alphabetickeyboard}>
        <View style={[styles.keys, styles.keysPosition]}>
          <View style={[styles.topRow, styles.keyPosition2]}>
            <View style={[styles.key, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>q</Text>
            </View>
            <View style={[styles.key1, styles.keyPosition1]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>w</Text>
            </View>
            <View style={[styles.key2, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>e</Text>
            </View>
            <View style={[styles.key3, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>r</Text>
            </View>
            <View style={[styles.key4, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>t</Text>
            </View>
            <View style={[styles.key5, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>y</Text>
            </View>
            <View style={[styles.key6, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>u</Text>
            </View>
            <View style={[styles.key7, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>i</Text>
            </View>
            <View style={[styles.key8, styles.keyPosition]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>o</Text>
            </View>
            <View style={[styles.key9, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>p</Text>
            </View>
          </View>
          <View style={styles.middleRow}>
            <View style={[styles.key10, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>a</Text>
            </View>
            <View style={[styles.key11, styles.keyPosition1]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter11, styles.letterTypo]}>s</Text>
            </View>
            <View style={[styles.key12, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>d</Text>
            </View>
            <View style={[styles.key13, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>f</Text>
            </View>
            <View style={[styles.key14, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>g</Text>
            </View>
            <View style={[styles.key15, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>h</Text>
            </View>
            <View style={[styles.key16, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>j</Text>
            </View>
            <View style={[styles.key17, styles.keyPosition]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter11, styles.letterTypo]}>k</Text>
            </View>
            <View style={[styles.key18, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>l</Text>
            </View>
          </View>
          <View style={styles.bottomRow}>
            <View style={[styles.keys1, styles.keyPosition2]}>
              <View style={[styles.key19, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter11, styles.letterTypo]}>z</Text>
              </View>
              <View style={[styles.key20, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter20, styles.letterTypo]}>x</Text>
              </View>
              <View style={[styles.key21, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter11, styles.letterTypo]}>c</Text>
              </View>
              <View style={[styles.key22, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter, styles.letterTypo]}>v</Text>
              </View>
              <View style={[styles.key23, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter20, styles.letterTypo]}>b</Text>
              </View>
              <View style={[styles.key24, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter11, styles.letterTypo]}>n</Text>
              </View>
              <View style={[styles.key25, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter11, styles.letterTypo]}>m</Text>
              </View>
            </View>
            <Image
              style={[styles.keyIcon, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/-key.png")}
            />
            <Image
              style={[styles.keyIcon1, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/-key1.png")}
            />
          </View>
        </View>
        <View style={[styles.bottomRow1, styles.keysPosition]}>
          <View style={styles.key26}>
            <View style={styles.keycontainerShadowBox} />
            <Text style={[styles.letter26, styles.letterPosition]}>123</Text>
          </View>
          <View style={[styles.key27, styles.keySpaceBlock]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter27, styles.letter27Position]}>
              space
            </Text>
          </View>
          <View style={[styles.key28, styles.keySpaceBlock]}>
            <View style={styles.keycontainerShadowBox} />
            <Text style={[styles.letter26, styles.letterPosition]}>return</Text>
          </View>
        </View>
        <View style={styles.emojiDictation}>
          <Image
            style={styles.iconEmoji}
            resizeMode="cover"
            source={require("../assets/icon--emoji.png")}
          />
          <Image
            style={styles.iconDictation}
            resizeMode="cover"
            source={require("../assets/icon--dictation.png")}
          />
        </View>
        <View style={styles.homeindicator}>
          <View style={[styles.homeIndicator, styles.letter27Position]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    width: 320,
    flexDirection: "row",
  },
  justiceTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.labelColorLightPrimary,
  },
  e30228Typo: {
    marginTop: 7,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  requestWrapperBorder: {
    marginTop: 24,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    borderRadius: Border.br_21xl,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    flexDirection: "row",
  },
  closeIconLayout: {
    height: 24,
    width: 24,
  },
  justice2Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  keysPosition: {
    left: 3,
    right: 3,
    position: "absolute",
  },
  keyPosition2: {
    top: 0,
    height: 42,
    position: "absolute",
  },
  letterTypo: {
    alignItems: "flex-end",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 34,
    letterSpacing: 0,
    fontSize: FontSize.size_7xl,
    top: "50%",
    marginTop: -20,
    display: "flex",
    left: 0,
    textAlign: "center",
    justifyContent: "center",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  keyPosition1: {
    left: 36,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition: {
    right: 36,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyIconLayout: {
    width: 42,
    height: 42,
    top: 0,
    position: "absolute",
  },
  letterPosition: {
    lineHeight: 21,
    marginTop: -10,
    letterSpacing: 0,
    top: "50%",
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_base,
  },
  keySpaceBlock: {
    marginLeft: 6,
    height: 42,
  },
  letter27Position: {
    left: "50%",
    position: "absolute",
  },
  image2Icon: {
    height: 128,
    width: 86,
  },
  justice: {
    fontWeight: "700",
    fontFamily: FontFamily.subtitle02Bold,
  },
  michaelJSandel: {
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  e30228: {
    color: Color.colorGray_200,
  },
  requested: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    color: Color.labelColorLightPrimary,
  },
  checkIcon: {
    width: 16,
    height: 16,
    marginLeft: 4,
  },
  requestedParent: {
    backgroundColor: "#ededed",
  },
  frameGroup: {
    marginLeft: 13,
  },
  image2Parent: {
    flexDirection: "row",
  },
  image3Icon: {
    height: 116,
    width: 86,
  },
  image3Parent: {
    marginTop: 20,
    flexDirection: "row",
  },
  frameParent: {
    top: 82,
    left: 20,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowBackIos: {
    left: 25,
    top: 24,
    position: "absolute",
  },
  justice2: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.labelColorLightPrimary,
    flex: 1,
  },
  closeIcon: {
    marginLeft: 10,
  },
  justiceContainer: {
    top: 21,
    left: 66,
    borderRadius: Border.br_mini,
    width: 274,
    height: 30,
    justifyContent: "flex-end",
    paddingLeft: Padding.p_base,
    paddingRight: Padding.p_5xs,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  keycontainerShadowBox1: {
    borderRadius: Border.br_8xs_6,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  letter: {
    width: 30,
  },
  key: {
    right: 324,
    height: 42,
    left: 0,
  },
  key1: {
    right: 288,
  },
  key2: {
    right: 252,
    left: 72,
    height: 42,
  },
  key3: {
    right: 216,
    left: 108,
    height: 42,
  },
  key4: {
    right: 180,
    left: 144,
    height: 42,
  },
  key5: {
    right: 144,
    left: 180,
    height: 42,
  },
  key6: {
    right: 108,
    left: 216,
    height: 42,
  },
  key7: {
    right: 72,
    left: 252,
    height: 42,
  },
  key8: {
    left: 288,
  },
  key9: {
    left: 324,
    height: 42,
    right: 0,
  },
  topRow: {
    height: 42,
    right: 0,
    left: 0,
  },
  key10: {
    right: 286,
    height: 42,
    left: 0,
  },
  letter11: {
    width: 29,
  },
  key11: {
    right: 251,
  },
  key12: {
    right: 215,
    left: 71,
    height: 42,
  },
  key13: {
    right: 179,
    left: 107,
    height: 42,
  },
  key14: {
    right: 143,
    left: 143,
    height: 42,
  },
  key15: {
    right: 107,
    left: 179,
    height: 42,
  },
  key16: {
    right: 71,
    left: 215,
    height: 42,
  },
  key17: {
    left: 251,
  },
  key18: {
    left: 286,
    height: 42,
    right: 0,
  },
  middleRow: {
    top: 54,
    right: 19,
    left: 19,
    height: 42,
    position: "absolute",
  },
  key19: {
    right: 209,
    height: 42,
    left: 0,
  },
  letter20: {
    width: 28,
  },
  key20: {
    right: 175,
    left: 35,
    height: 42,
  },
  key21: {
    right: 140,
    left: 69,
    height: 42,
  },
  key22: {
    right: 104,
    left: 104,
    height: 42,
  },
  key23: {
    right: 70,
    left: 140,
    height: 42,
  },
  key24: {
    right: 35,
    left: 174,
    height: 42,
  },
  key25: {
    left: 209,
    height: 42,
    right: 0,
  },
  keys1: {
    right: 58,
    left: 58,
    height: 42,
  },
  keyIcon: {
    left: 0,
  },
  keyIcon1: {
    right: 0,
  },
  bottomRow: {
    top: 108,
    height: 42,
    right: 0,
    left: 0,
    position: "absolute",
  },
  keys: {
    top: 8,
    height: 150,
  },
  keycontainerShadowBox: {
    backgroundColor: Color.colorDarkgray_100,
    borderRadius: Border.br_8xs_6,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  letter26: {
    width: 91,
    display: "flex",
    lineHeight: 21,
    marginTop: -10,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  key26: {
    width: 91,
    height: 42,
  },
  letter27: {
    marginLeft: -22,
    lineHeight: 21,
    marginTop: -10,
    letterSpacing: 0,
    top: "50%",
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  key27: {
    flex: 1,
  },
  key28: {
    width: 91,
  },
  bottomRow1: {
    top: 170,
    flexDirection: "row",
  },
  iconEmoji: {
    width: 27,
    height: 27,
  },
  iconDictation: {
    width: 19,
    height: 28,
  },
  emojiDictation: {
    top: 235,
    right: 31,
    left: 31,
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
  },
  homeindicator: {
    bottom: 0,
    left: 1,
    height: 34,
    right: 0,
    position: "absolute",
  },
  alphabetickeyboard: {
    bottom: -290,
    backgroundColor: Color.colorLightgray,
    width: 360,
    height: 290,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  search: {
    height: 640,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.systemBackgroundLightPrimary,
    flex: 1,
  },
});

export default Search2;
