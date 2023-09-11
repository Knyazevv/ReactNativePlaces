import { FlatList, StyleSheet, Text, View, Image, ActivityIndicator, RefreshControl, TouchableOpacity } from "react-native";
import PlaceItem from "./PlaceItem";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Loading from '../Loading';


function PlacesList() {
  const navigation = useNavigation();
  
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


const fetchPlace = async () => {
  setIsLoading(true);
  axios
  .get('https://64fd9d2a596493f7af7e5e54.mockapi.io/Place')
  .then((response) => {
    setItems(response.data);
  })
  .catch((error) => {
    console.log(error);
    Alert.alert("Error", error.message);
  }).finally(() => {
    setIsLoading(false);
  })
}

useEffect(() => {
  fetchPlace();
}, []);


  if (!items || items.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No place found.</Text>
      </View>
    );
  }

  if(isLoading) {
    return (      
        <Loading />       
    )
    
  };
  

  return (
    <View>  
    <FlatList
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPlace} />}
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PlaceDatails', { id: item.id, title: item.title, imageUrl: item.imageUrl, address: item.address, loaction: item.loaction })
        }
      >
        <View style={styles.itemContainer}>
          <Image
            style={styles.image}
            source={{ uri: item.imageUrl }}
          />
          <View>
            <Text>{item.title}</Text>
            <Text>{item.address}</Text>   
            </View> 
        </View>
          </TouchableOpacity>
      )}
      />
      </View>
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "row", 
    alignItems: "center",
    padding: 12,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 12,
  },
  load:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
