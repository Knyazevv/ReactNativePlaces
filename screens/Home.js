import React from 'react';
import { View, Text } from 'react-native';
import PlacesList from '../components/Places/PlacesList';


function HomeScreen() { 
  return (
    <View>    
      <PlacesList /> 
    </View>
  );
}

export default HomeScreen;