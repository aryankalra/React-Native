import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Platform,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppColors from "../config/AppColors";
import AppButton from "../components/AppButton";
import reactDom from "react-dom";

const blurRadiusValue = Platform.OS === "android" ? 0.7 : 5.5;

function WelcomeScreen({ navigation }) {
  return (
    <AppScreen>
      <ImageBackground
        source={require("../assets/giphy-1.gif")}
        style={styles.background}
      >
        <Image style={styles.logo} source={require("../assets/logo.gif")} />
        <View style={styles.welcomeContainer}>
          <MaterialCommunityIcons
            //   name="library"
            size={200}
            color={AppColors.primaryColor}
          />

          <AppText style={styles.welcomeText}>Charitable</AppText>
        </View>

        <View style={styles.buttonsContainer}>
          <AppButton
            title="Login"
            onPress={() => navigation.navigate("Login")}
          />
          <AppButton
            title="Register"
            color="secondaryColor"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </ImageBackground>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: 900,
  },

  welcomeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 20,
    marginRight: 20,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },

  logo: {
    width: 200,
    height: 200,
    position: "absolute",
    top: "35%",
    left: "40%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },

  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
  buttonsContainer: {
    marginTop: 260,
    marginEnd: 105,
    flexDirection: "column",
    justifyContent: "space-between",
    height: 150,
    alignSelf: "flex-end",
    width: "50%",
  },
});
export default WelcomeScreen;
