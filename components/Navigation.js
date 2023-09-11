import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import PlaceDatail from '../screens/PlaceDatails';
import AddPlace from '../screens/AddPlace';
import IconButton from '../components/UI/IconButton';


const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({
            title: 'Home',
            headerRight: () => (
              <IconButton icon="add" size={24} color="blue" onPress={() => navigation.navigate("AddPlace")} />
            ),
          })}
        />   

         <Stack.Screen name="PlaceDatails" component={PlaceDatail} options={({ navigation }) => ({
            title: 'PlaceDatails',
            headerRight: () => (
              <IconButton icon="add" size={24} color="blue" onPress={() => navigation.navigate("AddPlace")} />
            ),
          })}
        /> 




        <Stack.Screen name="AddPlace" component={AddPlace} options={{ title: 'AddPlace' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
