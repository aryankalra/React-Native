import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";

const backgroundImage = require("../assets/giphy-1.gif");

function RegisterScreen({ navigation }) {
  // State variables for capturing user input
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Function to handle the registration process
  const handleRegister = () => {
    console.log(userName, email, password);
    navigation.navigate("Login", {
      user: userName,
      pass: password,
      userEmail: email,
    });
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      <AppScreen style={styles.container}>
        <View style={styles.welcomeContainer}>
          <MaterialCommunityIcons
            name="account"
            size={60}
            color={AppColors.primaryColor}
          />
        </View>
        <View style={styles.textInputContainer}>
          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="account"
            placeholder="Name"
            textContentType="emailAddress"
            onChangeText={setUserName}
            style={styles.input}
          />
          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            onChangeText={setEmail}
            style={styles.input}
          />
          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
            onChangeText={setPassword}
            style={styles.input}
          />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Register"
            onPress={handleRegister}
            style={styles.registerButton}
          />
        </View>
      </AppScreen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginLeft: 0,
  },
  welcomeContainer: {
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  textInputContainer: {
    marginBottom: 50,
    marginTop: 50,
    width: "100%",
  },
  input: {
    width: "80%",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 120,
  },
  registerButton: {
    width: 150,
    height: 40,
  },
});

export default RegisterScreen;
