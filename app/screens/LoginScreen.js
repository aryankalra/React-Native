import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import DataManager from "../config/DataManager";

// Validation schema using Yup
const schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(2).max(16).label("Password"),
});

// User data
const users = [
  {
    id: "user1",
    name: "Admin",
    email: "a@a.a",
    password: "1234",
    image: require("../assets/user1.jpeg"),
  },
  {
    id: "user2",
    name: "Jon Snow",
    email: "js@gmail.com",
    password: "2345",
    image: require("../assets/user2.jpeg"),
  },
];

// Function to validate user credentials
const validateUser = ({ email, password }) => {
  return (
    users.filter((user) => user.email === email && user.password === password)
      .length > 0
  );
};

// Function to get user data by email
const getUser = ({ email }) => {
  return users.find((user) => user.email === email);
};

// Function to set the current user ID in DataManager
const createUser = ({ email }) => {
  let commonData = DataManager.getInstance();
  let userID = getUser({ email }).id;
  commonData.setUserID(userID);
};

// Function to add a new user to the users array
const pushUser = (userEmail, userPassword, userName) => {
  console.log(userEmail, userPassword, userName);
  const values = {
    id: "user3",
    name: userName,
    email: userEmail,
    password: userPassword,
  };
  users.push(values);
};

function LoginScreen({ navigation, route }) {
  // Pushing the new user to the users array
  pushUser(route.params?.userEmail, route.params?.pass, route.params?.user);

  return (
    <ImageBackground
      source={require("../assets/giphy-1.gif")}
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
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { resetForm }) => {
            if (validateUser(values)) {
              resetForm();
              createUser(values);
              navigation.navigate("Home", {
                screen: "Home",
                params: {
                  screen: "Home",
                  params: {
                    paramEmail: values.email,
                    paramName: getUser(values).name,
                    paramImage: getUser(values).image,
                  },
                },
              });
            } else {
              resetForm();
              alert("Invalid Login Details");
            }
          }}
          validationSchema={schema}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <View style={styles.textInputContainer}>
                <AppTextInput
                  name="emailField"
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="email"
                  placeholder="Email Address"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  value={values.email}
                  onBlur={() => setFieldTouched("email")}
                  onChangeText={handleChange("email")}
                />
                {touched.email && (
                  <AppText style={{ color: "red", fontSize: 16 }}>
                    {errors.email}
                  </AppText>
                )}
                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="lock"
                  placeholder="Password"
                  secureTextEntry
                  textContentType="password"
                  value={values.password}
                  onBlur={() => setFieldTouched("password")}
                  onChangeText={handleChange("password")}
                />
                {touched.password && (
                  <AppText style={{ color: "red", fontSize: 16 }}>
                    {errors.password}
                  </AppText>
                )}
              </View>
              <AppButton title="Login" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </AppScreen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 20,
    backgroundColor: AppColors.otherColor,
    marginTop: 0,
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  textInputContainer: {
    marginVertical: 50,
  },
});

export default LoginScreen;
