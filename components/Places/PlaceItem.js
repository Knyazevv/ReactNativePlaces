import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from 'react';





function PlaceItem({ place, onSelect }) {
  return (
    <Pressable>
      <Image source={{ uri: place.imageUrl }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>        
      </View>
    </Pressable>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    width: 100,
    height: 250,
    mardinButtom: 20,
  },
});