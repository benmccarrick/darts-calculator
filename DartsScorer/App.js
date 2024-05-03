import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './Components/HomePage';
import SinglePlayer from './Components/SinglePlayer';
import MultiPlayer from './Components/MultiPlayer';
import MultiPlayer2 from './Components/Multiplayer2';


export default function App() {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown: 'false'}}
        />
        <Stack.Screen
        name="Single Player Game"
        component={SinglePlayer}
        options={{headerShown: 'false'}}
        />
        <Stack.Screen
        name="Multiplayer Game Player 1"
        component={MultiPlayer}
        options={{headerShown: 'false'}}
        />
        <Stack.Screen
        name="Multiplayer Game Player 2"
        component={MultiPlayer2}
        options={{headerShown: 'false'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

