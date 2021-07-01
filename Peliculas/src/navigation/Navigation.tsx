import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreens } from '../screens/HomeScreens';
import { DetailsScreens } from '../screens/DetailsScreen';
import { Movie } from '../interfaces/movieInterfaces';

export type RootStackParams = {
  HomeScreens: undefined;
  DetailsScreens: Movie;
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
    >
      <Stack.Screen name="HomeScreens" component={HomeScreens} />
      <Stack.Screen name="DetailsScreens" options={{ cardStyle: { backgroundColor: '#e4e4e4' } }} component={DetailsScreens} />
    </Stack.Navigator>
  );
}