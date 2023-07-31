import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";

import AppScreen from "../components/AppScreen";
import AppColors from "../config/AppColors";
import AppListItem from "../components/AppListItem";
import AppIcon from "../components/AppIcon";

// List of Organisations
const initialAuthorList = [
  {
    id: 1,
    name: "Tour de Cure",
    image: {
      uri: "https://images.squarespace-cdn.com/content/v1/60b9714a1e4a7c20b43f3db2/1623906230545-6O3STTWUDAV3SE0HGS8B/Copy+of+tdc_logo_transparent+%282%29.png",
    },
  },
  {
    id: 2,
    name: "The McGrath Foundation",
    image: {
      uri: "https://3mp.com.au/site/assets/files/59251/mcgrath_foundation.png",
    },
  },
  {
    id: 3,
    name: "Australian Red Cross",
    image: {
      uri: "https://volunteeringgc.org.au/wp-content/uploads/2022/01/Australian-Redcross-logo.png",
    },
  },
  {
    id: 4,
    name: "Salvation Army Australia",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/The_Salvation_Army.svg/1200px-The_Salvation_Army.svg.png",
    },
  },
  {
    id: 5,
    name: "World Vision Australia",
    image: {
      uri: "https://yt3.googleusercontent.com/ytc/AGIKgqNVImau96HIa0y12_F8ZybJGYAZU9Xp0s7ntOPpvQ=s900-c-k-c0x00ffffff-no-rj",
    },
  },
  {
    id: 6,
    name: "Beyond Blue",
    image: {
      uri: "https://i.vimeocdn.com/video/772838295-8d6da6d8152cd160d505c5d39af49f14cee44d335dac7148a40cedcab21a6a76-d_640",
    },
  },
  {
    id: 7,
    name: "Cancer Council Australia",
    image: {
      uri: "https://emrearal.com/wp-content/uploads/2018/04/cancercouncil-logo-old.gif",
    },
  },
  {
    id: 8,
    name: "Smith Family",
    image: {
      uri: "https://www.includeacharity.com.au/wp-content/uploads/2018/03/the_smith_family_logo-1.jpg",
    },
  },
  {
    id: 9,
    name: "RSPCA Australia",
    image: {
      uri: "https://pbs.twimg.com/profile_images/1480298141333086209/F1FPHQY2_400x400.png",
    },
  },
  {
    id: 10,
    name: "St. Vincent de Paul Society",
    image: {
      uri: "https://qnada.org.au/wp-content/uploads/2018/01/pho_20171219_vinnies-logo.jpg",
    },
  },
];

function MyAuthorsScreen(props) {
  const [refreshing, setRefreshing] = useState(false);
  const [authors, setAuthors] = useState(initialAuthorList);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  // alert handles deletion of collection
  const handleDelete = () => {
    if (selectedAuthor) {
      Alert.alert(
        "Delete Collection",
        "Are you sure you want to delete this charity collection?",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Delete", style: "destructive", onPress: confirmDelete },
        ]
      );
    }
  };

  const confirmDelete = () => {
    const updatedAuthors = authors.filter(
      (item) => item.id !== selectedAuthor.id
    );
    setAuthors(updatedAuthors);
    setSelectedAuthor(null);
  };

  const handlePress = (author) => {
    setSelectedAuthor(author);
    // You can perform any desired action here when a collection is selected
  };

  return (
    <AppScreen style={styles.container}>
      {selectedAuthor && (
        <View style={styles.buttonContainer}>
          <Button
            title="Delete"
            onPress={handleDelete}
            color={AppColors.primaryColor}
          />
        </View>
      )}
      <FlatList
        data={authors}
        keyExtractor={(author) => author.id.toString()}
        refreshing={refreshing}
        onRefresh={() => setAuthors(initialAuthorList)}
        renderItem={({ item }) => (
          <AppListItem
            title={item.name}
            image={item.image}
            onPress={() => handlePress(item)}
            selected={selectedAuthor && selectedAuthor.id === item.id}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.otherColor,
    flex: 1,
  },
  separator: {
    width: "100%",
    height: 2,
    backgroundColor: AppColors.secondaryColor,
  },
  buttonContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
});

export default MyAuthorsScreen;
