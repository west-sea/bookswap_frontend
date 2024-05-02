import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Border, Padding, FontFamily } from "../GlobalStyles";

const Search = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.search}>
      <Pressable
        style={[styles.arrowBackIos, styles.closeIconLayout]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios.png")}
        />
      </Pressable>
      <View style={styles.closeWrapper}>
        <Image
          style={styles.closeIconLayout}
          resizeMode="cover"
          source={require("../assets/close.png")}
        />
      </View>
      <Pressable
        style={[styles.alphabetickeyboard, styles.homeindicatorPosition]}
        onPress={() => navigation.navigate("Search1")}
      >
        <View style={[styles.keys, styles.keysPosition]}>
          <View style={[styles.topRow, styles.keyPosition2]}>
            <View style={[styles.key, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>q</Text>
            </View>
            <View style={[styles.key1, styles.keyPosition1]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>w</Text>
            </View>
            <View style={[styles.key2, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>e</Text>
            </View>
            <View style={[styles.key3, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>r</Text>
            </View>
            <View style={[styles.key4, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>t</Text>
            </View>
            <View style={[styles.key5, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>y</Text>
            </View>
            <View style={[styles.key6, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>u</Text>
            </View>
            <View style={[styles.key7, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>i</Text>
            </View>
            <View style={[styles.key8, styles.keyPosition]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>o</Text>
            </View>
            <View style={[styles.key9, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>p</Text>
            </View>
          </View>
          <View style={styles.middleRow}>
            <View style={[styles.key10, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>a</Text>
            </View>
            <View style={[styles.key11, styles.keyPosition1]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter11, styles.letterPosition]}>s</Text>
            </View>
            <View style={[styles.key12, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>d</Text>
            </View>
            <View style={[styles.key13, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>f</Text>
            </View>
            <View style={[styles.key14, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>g</Text>
            </View>
            <View style={[styles.key15, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>h</Text>
            </View>
            <View style={[styles.key16, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>j</Text>
            </View>
            <View style={[styles.key17, styles.keyPosition]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter11, styles.letterPosition]}>k</Text>
            </View>
            <View style={[styles.key18, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>l</Text>
            </View>
          </View>
          <View style={styles.bottomRow}>
            <View style={[styles.keys1, styles.keyPosition2]}>
              <View style={[styles.key19, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter11, styles.letterPosition]}>z</Text>
              </View>
              <View style={[styles.key20, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter20, styles.letterPosition]}>x</Text>
              </View>
              <View style={[styles.key21, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter11, styles.letterPosition]}>c</Text>
              </View>
              <View style={[styles.key22, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter, styles.letterPosition]}>v</Text>
              </View>
              <View style={[styles.key23, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter20, styles.letterPosition]}>b</Text>
              </View>
              <View style={[styles.key24, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter11, styles.letterPosition]}>n</Text>
              </View>
              <View style={[styles.key25, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter11, styles.letterPosition]}>m</Text>
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
            <Text style={[styles.letter26, styles.letterTypo]}>123</Text>
          </View>
          <View style={[styles.key27, styles.keySpaceBlock]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter27, styles.letter27Position]}>
              space
            </Text>
          </View>
          <View style={[styles.key28, styles.keySpaceBlock]}>
            <View style={styles.keycontainerShadowBox} />
            <Text style={[styles.letter26, styles.letterTypo]}>return</Text>
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
        <View style={[styles.homeindicator, styles.homeindicatorPosition]}>
          <View style={[styles.homeIndicator, styles.letter27Position]} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  closeIconLayout: {
    height: 24,
    width: 24,
  },
  homeindicatorPosition: {
    bottom: 0,
    position: "absolute",
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
  letterPosition: {
    justifyContent: "center",
    display: "flex",
    left: 0,
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
  letterTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_base,
    marginTop: -10,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    letterSpacing: 0,
    top: "50%",
  },
  keySpaceBlock: {
    marginLeft: 6,
    height: 42,
  },
  letter27Position: {
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
    position: "absolute",
  },
  closeWrapper: {
    top: 21,
    left: 66,
    borderRadius: Border.br_mini,
    borderStyle: "solid",
    borderColor: Color.labelColorLightPrimary,
    borderWidth: 1,
    width: 274,
    height: 30,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    alignItems: "center",
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
    alignItems: "flex-end",
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 34,
    letterSpacing: 0,
    fontSize: FontSize.size_7xl,
    top: "50%",
    marginTop: -20,
    justifyContent: "center",
    display: "flex",
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
    alignItems: "flex-end",
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 34,
    letterSpacing: 0,
    fontSize: FontSize.size_7xl,
    top: "50%",
    marginTop: -20,
    justifyContent: "center",
    display: "flex",
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
    alignItems: "flex-end",
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 34,
    letterSpacing: 0,
    fontSize: FontSize.size_7xl,
    top: "50%",
    marginTop: -20,
    justifyContent: "center",
    display: "flex",
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
    fontFamily: FontFamily.interRegular,
    width: 91,
    justifyContent: "center",
    display: "flex",
    left: 0,
    position: "absolute",
    lineHeight: 21,
    fontSize: FontSize.size_base,
    marginTop: -10,
    alignItems: "center",
  },
  key26: {
    width: 91,
    height: 42,
  },
  letter27: {
    marginLeft: -22,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    marginTop: -10,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    letterSpacing: 0,
    top: "50%",
  },
  key27: {
    flex: 1,
    marginLeft: 6,
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
    left: 1,
    height: 34,
    right: 0,
  },
  alphabetickeyboard: {
    backgroundColor: Color.colorLightgray,
    width: 360,
    height: 290,
    left: 0,
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

export default Search;
