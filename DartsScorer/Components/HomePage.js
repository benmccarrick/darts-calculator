import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomePage = () => {

    const navigation = useNavigation();


    return (
        <View style={styles.container}>
          <View style= {styles.singlePlayer}>
      <Text style={styles.textStyle}>For a single player game:  </Text>
      <Pressable
              onPress={() => {navigation.navigate("Single Player Game")}}>
              <Text style={styles.buttonStyle}>PLAY DARTS!</Text>
            </Pressable>
      <StatusBar style="auto" />
          </View>
      <View style= {styles.multiPlayer}>
        <Text style={styles.textStyle}>For a  multiplayer game:</Text>
        <Pressable
              onPress={() => {navigation.navigate("Multiplayer Game")}}>
              <Text style={styles.buttonStyle2}>LET'S PLAY DARTS!</Text>
            </Pressable>
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
  },
});

export default HomePage;