import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {


    const [nameTextPlayer1, setNameTextPlayer1] = useState("Player 1");
    const [nameTextPlayer2, setNameTextPlayer2] = useState("Player 2");
    const navigation = useNavigation();
    


    return (
        <View style={styles.container}>
      <View style= {styles.multiPlayer}>
        <Text style={styles.textStyle}>For a multiplayer game:</Text>
        <TextInput
          style={styles.textStyle}
          placeholder='Player 1'
          onChangeText={(newNameTextPlayer1) => setNameTextPlayer1(newNameTextPlayer1)}
          defaultValue='Player 1'
        />
        <TextInput
          style={styles.textStyle}
          placeholder='Player 2'
          onChangeText={(newNameTextPlayer2) => setNameTextPlayer2(newNameTextPlayer2)}
          defaultValue='Player 2'
        />
        <Pressable
              onPress={() => {navigation.navigate("Multiplayer Game", {
                player1Name: nameTextPlayer1,
                player2Name: nameTextPlayer2,
              })}}>
              <Text style={styles.buttonStyle2}>LET'S PLAY DARTS!</Text>
            </Pressable>
      </View>
          <View style= {styles.singlePlayer}>
      <Text style={styles.textStyle}>For a single player game:  </Text>
      <Pressable
              onPress={() => {navigation.navigate("Single Player Game")}}>
              <Text style={styles.buttonStyle}>PLAY DARTS!</Text>
            </Pressable>
      <StatusBar style="auto" />
          </View>
        </View>

);
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'top',
  },
  textStyle: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  buttonStyle: {
    color: 'red',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',

  },
  buttonStyle2: {
    color: 'green',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',

  },
  singlePlayer: {
    marginTop: 190,
    marginBottom: 190,
  },
  multiPlayer: {
    marginTop: 40,
    marginBottom: 220
  },
});

export default HomePage;