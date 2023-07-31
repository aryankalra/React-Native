import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";

import AppCard from "../components/AppCard";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppColors from "../config/AppColors";
import DataManager from "../config/DataManager";

const getBooks = () => {
  let commonData = DataManager.getInstance();
  let user = commonData.getUserID();
  return commonData.getBooks(user);
};

function MyBooksScreen(props) {
  const bookList = getBooks();
  console.log(bookList);

  const handleEdit = (book) => {
    // Handle edit logic here
    console.log("Edit:", book);
  };

  const handleDelete = (book) => {
    // Show confirmation dialog before deleting
    Alert.alert(
      "Delete Collection",
      "Are you sure you want to delete this collection?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => confirmDelete(book),
        },
      ]
    );
  };

  const confirmDelete = (book) => {
    // Handle delete logic here
    console.log("Delete:", book);
    // Delete the book from the data source
    let commonData = DataManager.getInstance();
    commonData.deleteBook(book);
  };

  return (
    <AppScreen style={styles.container}>
      <FlatList
        data={bookList}
        keyExtractor={(book) => book.bookid.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            category={item.category}
            renderRightActions={() => (
              <View style={styles.actionsContainer}>
                <TouchableOpacity onPress={() => handleEdit(item)}>
                  <AppText style={styles.actionText}>Edit</AppText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(item)}>
                  <AppText style={styles.actionText}>Delete</AppText>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.otherColor,
    flex: 1,
    marginTop: 0,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  actionText: {
    paddingHorizontal: 10,
    color: AppColors.primaryColor,
  },
});

export default MyBooksScreen;
