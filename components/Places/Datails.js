import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions  } from 'react-native';
import { useRoute } from '@react-navigation/native'; 

const { width: screenWidth } = Dimensions.get('window');


function PlaceDatail() {
  const route = useRoute(); 
  const { id, title, imageUrl, loaction, address } = route.params;

  return (
    <View View style={styles.container}>
      <Image style={styles.images} source={{ uri: imageUrl }}/>
      <Text>Adress: {address}</Text> 
      <Text>Title: {title}</Text>
      <Text>Location: {loaction}</Text>     
    </View>
  );
}

export default PlaceDatail;

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    alignItems: 'center',
  },
  images: {
    marginTop: 10,
    borderRadius: 10,
    width: screenWidth * 0.8,
    height: 250,
    marginBottom: 20,
  },
});