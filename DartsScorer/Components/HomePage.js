import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Row from "./Row";

const HomePage = () => {
  const [nameTextPlayer1, setNameTextPlayer1] = useState("");
  const [nameTextPlayer2, setNameTextPlayer2] = useState("");
  const [startingScorePlayer1, setStartingScorePlayer1] = useState(501);
  const [startingScorePlayer2, setStartingScorePlayer2] = useState(501);
  const [backgroundColor1, setBackgroundColor1] = useState("black");
  const [backgroundColor2, setBackgroundColor2] = useState("black");
  const [backgroundColor3, setBackgroundColor3] = useState("black");
  const [backgroundColor4, setBackgroundColor4] = useState("black");
  const [backgroundColor5, setBackgroundColor5] = useState("black");
  const [backgroundColor6, setBackgroundColor6] = useState("black");
  const navigation = useNavigation();


  handle501Press1 = () => {
    setStartingScorePlayer1(501)
    setBackgroundColor1("grey")
    setBackgroundColor3("black")
  }
  handle501Press2 = () => {
    setStartingScorePlayer2(501)
    setBackgroundColor2("grey")
    setBackgroundColor4("black")
  }
  handle301Press1 = () => {
    setStartingScorePlayer1(301)
    setBackgroundColor3("grey")
    setBackgroundColor1("black")
  }
  handle301Press2 = () => {
    setStartingScorePlayer2(301)
    setBackgroundColor4("grey")
    setBackgroundColor2("black")
  }
  handle301PressSingle = () => {
    setStartingScorePlayer1(301)
    setBackgroundColor5("grey")
    setBackgroundColor6("black")
  }
  handle501PressSingle = () => {
    setStartingScorePlayer1(301)
    setBackgroundColor6("grey")
    setBackgroundColor5("black")
  }

  return (
    <View style={styles.container}>
      <View style={styles.multiPlayer}>
        <Text style={styles.textStyle}>For a 2 player game:</Text>
        <Row>
          <TextInput
            style={styles.textStyle}
            placeholder="Enter Player 1 name"
            placeholderTextColor="blue"
            onChangeText={(newNameTextPlayer1) =>
              setNameTextPlayer1(newNameTextPlayer1)
            }
          />
          <Pressable 
          style={() => [
            {
              backgroundColor: backgroundColor3,
              borderRadius: 20,
              padding: 2,
              elevation: 0,
              marginBottom: 10,
              borderStartWidth: 2,
              borderEndWidth: 2,
              borderTopWidth: 2,
              borderLeftWidth: 2,
              borderRightWidth: 2,
              borderBottomWidth: 2,
              borderColor: "white",
            },
          ]}
          onPress={() => handle301Press1()}>
            <Text style={styles.buttonStyle3}>301</Text>
          </Pressable>
          <Pressable 
          style={() => [
            {
              backgroundColor: backgroundColor1,
              borderRadius: 20,
              padding: 2,
              elevation: 0,
              marginBottom: 10,
              borderStartWidth: 2,
              borderEndWidth: 2,
              borderTopWidth: 2,
              borderLeftWidth: 2,
              borderRightWidth: 2,
              borderBottomWidth: 2,
              borderColor: "white",
            },
          ]}
          onPress={() => handle501Press1()}>
            <Text style={styles.buttonStyle3}>501</Text>
          </Pressable>
        </Row>
        <Row>
          <TextInput
            style={styles.textStyle}
            placeholder="Enter Player 2 name"
            placeholderTextColor="blue"
            onChangeText={(newNameTextPlayer2) =>
              setNameTextPlayer2(newNameTextPlayer2)
            }
          />
          <Pressable 
          style={() => [
            {
              backgroundColor: backgroundColor4,
              borderRadius: 20,
              padding: 2,
              elevation: 0,
              marginBottom: 10,
              borderStartWidth: 2,
              borderEndWidth: 2,
              borderTopWidth: 2,
              borderLeftWidth: 2,
              borderRightWidth: 2,
              borderBottomWidth: 2,
              borderColor: "white",
            },
          ]}
          onPress={() => handle301Press2()}>
            <Text style={styles.buttonStyle3}>301</Text>
          </Pressable>
          <Pressable 
          style={() => [
            {
              backgroundColor: backgroundColor2,
              borderRadius: 20,
              padding: 2,
              elevation: 0,
              marginBottom: 10,
              borderStartWidth: 2,
              borderEndWidth: 2,
              borderTopWidth: 2,
              borderLeftWidth: 2,
              borderRightWidth: 2,
              borderBottomWidth: 2,
              borderColor: "white",
            },
          ]}
          onPress={() => handle501Press2()}>
            <Text style={styles.buttonStyle3}>501</Text>
          </Pressable>
        </Row>

        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "black",
              borderRadius: 20,
              padding: 9,
              elevation: 0,
              marginBottom: 10,
              borderStartWidth: 2,
              borderEndWidth: 2,
              borderTopWidth: 2,
              borderLeftWidth: 2,
              borderRightWidth: 2,
              borderBottomWidth: 2,
              borderColor: "green",
            },
          ]}
          onPress={() => {
            navigation.navigate("Multiplayer Game", {
              player1Name: nameTextPlayer1,
              player2Name: nameTextPlayer2,
              player1StartingScore: startingScorePlayer1,
              player2StartingScore: startingScorePlayer2,
            });
          }}
        >
          <Text style={styles.buttonStyle2}>LET'S PLAY DARTS!</Text>
        </Pressable>
      </View>
      <View style={styles.singlePlayer}>
        <Text style={styles.textStyle}>For a single player game: </Text>
        <Row>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "black",
              borderRadius: 20,
              padding: 5,
              elevation: 5,
              marginBottom: 15,
              borderStartWidth: 2,
              borderEndWidth: 2,
              borderTopWidth: 2,
              borderLeftWidth: 2,
              borderRightWidth: 2,
              borderBottomWidth: 2,
              borderColor: "red",
            },
          ]}
          onPress={() => {
            navigation.navigate("Single Player Game", {
              player1StartingScore: startingScorePlayer1
            });
          }}
        >
          <Text style={styles.buttonStyle}>PLAY DARTS!</Text>
        </Pressable>
        <Pressable 
          style={() => [
            {
              backgroundColor: backgroundColor5,
              borderRadius: 20,
              padding: 2,
              elevation: 0,
              marginBottom: 10,
              borderStartWidth: 2,
              borderEndWidth: 2,
              borderTopWidth: 2,
              borderLeftWidth: 2,
              borderRightWidth: 2,
              borderBottomWidth: 2,
              borderColor: "white",
            },
          ]}
          onPress={() => handle301PressSingle()}>
            <Text style={styles.buttonStyle3}>301</Text>
          </Pressable>
          <Pressable 
          style={() => [
            {
              backgroundColor: backgroundColor6,
              borderRadius: 20,
              padding: 2,
              elevation: 0,
              marginBottom: 10,
              borderStartWidth: 2,
              borderEndWidth: 2,
              borderTopWidth: 2,
              borderLeftWidth: 2,
              borderRightWidth: 2,
              borderBottomWidth: 2,
              borderColor: "white",
            },
          ]}
          onPress={() => handle501PressSingle()}>
            <Text style={styles.buttonStyle3}>501</Text>
          </Pressable>
        </Row>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "top",
  },
  textStyle: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    justifyContent: "center",
    borderStartWidth: 2,
    borderEndWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: "white",
    padding: 10,
    marginBottom: 10,
  },
  buttonStyle: {
    color: "red",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  buttonStyle2: {
    color: "green",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  buttonStyle3: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    textAlign: "center",
  },
  singlePlayer: {
    marginTop: 80,
    marginBottom: 170,
  },
  multiPlayer: {
    marginTop: 40,
    marginBottom: 160,
  },
});

export default HomePage;
