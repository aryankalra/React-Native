import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";

import AppPicker from "../components/AppPicker";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import DataManager from "../config/DataManager";
import * as ImagePicker from "expo-image-picker";
import AppColors from "../config/AppColors";
import AppIcon from "../components/AppIcon";

// list of charity organisations
const categories = [
  { label: "Education", value: 1 },
  { label: "Healthcare", value: 2 },
  { label: "Environment", value: 3 },
  { label: "Animal Welfare", value: 4 },
  { label: "Poverty Alleviation", value: 5 },
  { label: "Children's Rights", value: 6 },
  { label: "Disaster Relief", value: 7 },
  { label: "Elderly Care", value: 8 },
  { label: "Community Development", value: 9 },
  { label: "Art & Culture", value: 10 },
];

function NewBookScreen({ navigation }) {
  // State variables for capturing user input
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  // State variables for displaying error messages
  const [titleError, setTitleError] = useState("");
  const [subTitleError, setSubTitleError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [imageError, setImageError] = useState("");

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    setImage({ path: pickerResult.uri });
    console.log(pickerResult);
  };
  // Function to perform error checking
  const doErrorCheck = () => {
    setTitleError(title.length > 0 ? "" : "Please set a valid Book Title");
    setSubTitleError(subTitle.length > 0 ? "" : "Please set a valid subtitle");
    setCategoryError(category ? "" : "Please pick a category from the list");
    setImageError(image ? "" : "Please pick an image");
    return title.length > 0 && subTitle.length > 0 && category && image;
  };

  // Function to add a new collection
  const addBook = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();

    const books = commonData.getBooks(user);
    const bookID = books.length + 1;
    const newBook = {
      title: title,
      subtitle: subTitle,
      category: category.label,
      bookid: bookID,
      userid: user,
      image: image.path,
    };

    console.log(newBook);
    commonData.addBook(newBook);
  };

  return (
    <AppScreen style={styles.container}>
      <AppTextInput
        icon="domain"
        placeholder="Charity Name"
        value={title}
        onChangeText={(inputText) => setTitle(inputText)}
      />
      {titleError.length > 0 && (
        <AppText style={styles.errorText}>{titleError}</AppText>
      )}

      <AppTextInput
        icon="currency-usd"
        placeholder="Donation Amount"
        value={subTitle}
        onChangeText={(inputText) => setSubTitle(inputText)}
      />
      {subTitleError.length > 0 && (
        <AppText style={styles.errorText}>{subTitleError}</AppText>
      )}
      <SafeAreaView style={styles.pickerContainer}>
        <AppPicker
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
          data={categories}
          icon="apps"
          placeholder="Categories"
          numColumns={1}
        />
      </SafeAreaView>
      {categoryError.length > 0 && (
        <AppText style={styles.errorText}>{categoryError}</AppText>
      )}

      <TouchableOpacity
        style={styles.imageButton}
        onPress={openImagePickerAsync}
      >
        <AppIcon
          name="camera"
          size={80}
          iconColor={AppColors.otherColor}
          backgroundColor={AppColors.primaryColor}
        />
        {image && <Image source={{ uri: image.path }} style={styles.image} />}
      </TouchableOpacity>
      {imageError.length > 0 && (
        <AppText style={styles.errorText}>{imageError}</AppText>
      )}

      <AppButton
        style={styles.addButton}
        title="Add Collection"
        onPress={() => {
          if (doErrorCheck()) {
            addBook();
            navigation.navigate("MyBooks");
          }
        }}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.otherColor,
    paddingHorizontal: 20,
  },
  errorText: {
    marginVertical: 5,
    color: "red",
    fontSize: 16,
  },

  categoryItemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginRight: -1000,
  },

  pickerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  imageButton: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 30,
  },
  image: {
    height: 80,
    width: 80,
    marginLeft: 20,
  },
  addButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 1120,
  },
});

export default NewBookScreen;
