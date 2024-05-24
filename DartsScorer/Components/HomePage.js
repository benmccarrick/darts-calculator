import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {


    const [nameTextPlayer1, setNameTextPlayer1] = useState("");
    const [nameTextPlayer2, setNameTextPlayer2] = useState("");
    const navigation = useNavigation();
    


    return (
        <View style={styles.container}>
      <View style= {styles.multiPlayer}>
        <Text style={styles.textStyle}>For a multiplayer game:</Text>
        <TextInput
          style={styles.textStyle}
          placeholder='Enter Player 1 name'
          placeholderTextColor='blue'
          onChangeText={(newNameTextPlayer1) => setNameTextPlayer1(newNameTextPlayer1)}
        />
        <TextInput
          style={styles.textStyle}
          placeholder='Enter Player 2 name'
          placeholderTextColor='blue'
          onChangeText={(newNameTextPlayer2) => setNameTextPlayer2(newNameTextPlayer2)}
        />
        <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? "rgb(210, 230, 255)"
              : "black",
            borderRadius: 20,
            padding: 9,
            elevation: 0,
            marginBottom: 10,
          },
        ]}
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
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? "rgb(210, 230, 255)"
            : "black",
          borderRadius: 20,
          padding: 5,
          elevation: 5,
          marginBottom: 15,
        },
      ]}
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
    borderStartWidth : 2,
    borderEndWidth : 2,
    borderTopWidth : 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth : 2,
    borderColor: 'white',
    padding: 10,
    marginBottom: 10,
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
    marginTop: 150,
    marginBottom: 170,
  },
  multiPlayer: {
    marginTop: 40,
    marginBottom: 160
  },
});

export default HomePage;