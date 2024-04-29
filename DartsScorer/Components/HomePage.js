import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomePage = () => {

    const navigation = useNavigation();


    return (
        <View style={styles.container}>
      <Text>For a single player game, enter your name and click start!</Text>
      <Button
      title='start'
      onPress={() => {navigation.navigate("Single Player Game")}}/>
      <StatusBar style="auto" />
      <Text>For a  multiplayer game, enter your names and click start game!</Text>
      <Button
      title='start game'
      onPress={() => {navigation.navigate("Multiplayer Game")}}/>
    </View>

);
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage;