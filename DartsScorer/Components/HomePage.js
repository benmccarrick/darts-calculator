import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Row from "./Row";

const HomePage = () => {
  const [nameTextPlayer1, setNameTextPlayer1] = useState("");
  const [nameTextPlayer2, setNameTextPlayer2] = useState("");
  const [nameTextPlayer3, setNameTextPlayer3] = useState("");
  const [nameTextPlayer4, setNameTextPlayer4] = useState("");
  const [nameTextPlayer5, setNameTextPlayer5] = useState("");
  const [nameTextPlayer6, setNameTextPlayer6] = useState("");
  const [startingScorePlayer1, setStartingScorePlayer1] = useState(501);
  const [startingScorePlayer2, setStartingScorePlayer2] = useState(501);
  const [startingScorePlayer3, setStartingScorePlayer3] = useState(501);
  const [startingScorePlayer4, setStartingScorePlayer4] = useState(501);
  const [startingScorePlayer5, setStartingScorePlayer5] = useState(501);
  const [startingScorePlayer6, setStartingScorePlayer6] = useState(501);
  const [backgroundColor1, setBackgroundColor1] = useState("black");
  const [backgroundColor2, setBackgroundColor2] = useState("black");
  const [backgroundColor3, setBackgroundColor3] = useState("black");
  const [backgroundColor4, setBackgroundColor4] = useState("black");
  const [backgroundColor5, setBackgroundColor5] = useState("black");
  const [backgroundColor6, setBackgroundColor6] = useState("black");
  const [backgroundColor7, setBackgroundColor7] = useState("black");
  const [backgroundColor8, setBackgroundColor8] = useState("black");
  const [backgroundColor9, setBackgroundColor9] = useState("black");
  const [backgroundColor10, setBackgroundColor10] = useState("black");
  const [backgroundColor11, setBackgroundColor11] = useState("black");
  const [backgroundColor12, setBackgroundColor12] = useState("black");
  const [backgroundColor13, setBackgroundColor13] = useState("black");
  const [backgroundColor14, setBackgroundColor14] = useState("black");
  const [backgroundColor15, setBackgroundColor15] = useState("black");
  const [backgroundColor16, setBackgroundColor16] = useState("black");
  const [backgroundColor17, setBackgroundColor17] = useState("black");
  const [backgroundColor18, setBackgroundColor18] = useState("black");
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);
  const navigation = useNavigation();


  handlePlayer1Score = (num) => {
    setStartingScorePlayer1(num)
    if(num === 501){
      setBackgroundColor8("grey")
      setBackgroundColor7("black")
    }
    if(num === 301){
      setBackgroundColor7("grey")
      setBackgroundColor8("black")
    }
  }
  handlePlayer2Score = (num) => {
    setStartingScorePlayer2(num)
    if(num === 501){
      setBackgroundColor10("grey")
      setBackgroundColor9("black")
    }
    if(num === 301){
      setBackgroundColor9("grey")
      setBackgroundColor10("black")
    }
  }
  handlePlayer3Score = (num) => {
    setStartingScorePlayer3(num)
    if(num === 501){
      setBackgroundColor12("grey")
      setBackgroundColor11("black")
    }
    if(num === 301){
      setBackgroundColor11("grey")
      setBackgroundColor12("black")
    }
  }
  handlePlayer4Score = (num) => {
    setStartingScorePlayer4(num)
    if(num === 501){
      setBackgroundColor14("grey")
      setBackgroundColor13("black")
    }
    if(num === 301){
      setBackgroundColor13("grey")
      setBackgroundColor14("black")
    }
  }
  handlePlayer5Score = (num) => {
    setStartingScorePlayer5(num)
    if(num === 501){
      setBackgroundColor16("grey")
      setBackgroundColor15("black")
    }
    if(num === 301){
      setBackgroundColor15("grey")
      setBackgroundColor16("black")
    }
  }
  handlePlayer6Score = (num) => {
    setStartingScorePlayer6(num)
    if(num === 501){
      setBackgroundColor18("grey")
      setBackgroundColor17("black")
    }
    if(num === 301){
      setBackgroundColor17("grey")
      setBackgroundColor18("black")
    }
  }
  handleNumOfPlayers = (num) => {
    setNumberOfPlayers(num)
    if(num === 1){
      setBackgroundColor1("grey")
      setBackgroundColor2("black")
      setBackgroundColor3("black")
      setBackgroundColor4("black")
      setBackgroundColor5("black")
      setBackgroundColor6("black")
    }
    if(num === 2){
      setBackgroundColor2("grey")
      setBackgroundColor1("black")
      setBackgroundColor3("black")
      setBackgroundColor4("black")
      setBackgroundColor5("black")
      setBackgroundColor6("black")
    }
    if(num === 3){
      setBackgroundColor3("grey")
      setBackgroundColor2("black")
      setBackgroundColor1("black")
      setBackgroundColor4("black")
      setBackgroundColor5("black")
      setBackgroundColor6("black")
    }
    if(num === 4){
      setBackgroundColor4("grey")
      setBackgroundColor2("black")
      setBackgroundColor3("black")
      setBackgroundColor1("black")
      setBackgroundColor5("black")
      setBackgroundColor6("black")
    }
    if(num === 5){
      setBackgroundColor5("grey")
      setBackgroundColor2("black")
      setBackgroundColor3("black")
      setBackgroundColor4("black")
      setBackgroundColor1("black")
      setBackgroundColor6("black")
    }
    if(num === 6){
      setBackgroundColor6("grey")
      setBackgroundColor2("black")
      setBackgroundColor3("black")
      setBackgroundColor4("black")
      setBackgroundColor5("black")
      setBackgroundColor1("black")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.multiPlayer}>
        <Text style={styles.textStyle}>Pick number of players + enter names:</Text>
        <Row>
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
          onPress={() => handleNumOfPlayers(1)}>
            <Text style={styles.buttonStyle3}>1</Text>
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
          onPress={() => handleNumOfPlayers(2)}>
            <Text style={styles.buttonStyle3}>2</Text>
          </Pressable>
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
          onPress={() => handleNumOfPlayers(3)}>
            <Text style={styles.buttonStyle3}>3</Text>
          </Pressable>
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
          onPress={() => handleNumOfPlayers(4)}>
            <Text style={styles.buttonStyle3}>4</Text>
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
          onPress={() => handleNumOfPlayers(5)}>
            <Text style={styles.buttonStyle3}>5</Text>
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
          onPress={() => handleNumOfPlayers(6)}>
            <Text style={styles.buttonStyle3}>6</Text>
          </Pressable>
        </Row>
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
              backgroundColor: backgroundColor7,
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
          onPress={() => handlePlayer1Score(301)}>
            <Text style={styles.buttonStyle3}>301</Text>
          </Pressable>
          <Pressable 
          style={() => [
            {
              backgroundColor: backgroundColor8,
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
          onPress={() => handlePlayer1Score(501)}>
            <Text style={styles.buttonStyle3}>501</Text>
          </Pressable>
        </Row>
        {numberOfPlayers > 1 &&
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
              backgroundColor: backgroundColor9,
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
          onPress={() => handlePlayer2Score(301)}>
            <Text style={styles.buttonStyle3}>301</Text>
          </Pressable>
          <Pressable 
          style={() => [
            {
              backgroundColor: backgroundColor10,
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
          onPress={() => handlePlayer2Score(501)}>
            <Text style={styles.buttonStyle3}>501</Text>
          </Pressable>
        </Row>
        }
{numberOfPlayers > 2 &&
        <Row>
          <TextInput
            style={styles.textStyle}
            placeholder="Enter Player 3 name"
            placeholderTextColor="blue"
            onChangeText={(newNameTextPlayer3) =>
              setNameTextPlayer3(newNameTextPlayer3)
            }
          />
          <Pressable 
          style={() => [
            {
              backgroundColor: backgroundColor11,
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
          onPress={() => handlePlayer3Score(301)}>
            <Text style={styles.buttonStyle3}>301</Text>
          </Pressable>
          <Pressable 
          style={() => [
            {
              backgroundColor: backgroundColor12,
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
          onPress={() => handlePlayer3Score(501)}>
            <Text style={styles.buttonStyle3}>501</Text>
          </Pressable>
        </Row>
        }
        {numberOfPlayers > 3 &&
        <Row>
          <TextInput
            style={styles.textStyle}
            placeholder="Enter Player 4 name"
            placeholderTextColor="blue"
            onChangeText={(newNameTextPlayer4) =>
              setNameTextPlayer4(newNameTextPlayer4)
            }
          />
          <Pressable 
          style={() => [
            {
              backgroundColor: backgroundColor13,
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
          onPress={() => handlePlayer4Score(301)}>
            <Text style={styles.buttonStyle3}>301</Text>
          </Pressable>
          <Pressable 
          style={() => [
            {
              backgroundColor: backgroundColor14,
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
          onPress={() => handlePlayer4Score(501)}>
            <Text style={styles.buttonStyle3}>501</Text>
          </Pressable>
        </Row>
        }
        {numberOfPlayers > 4 &&
        <Row>
          <TextInput
            style={styles.textStyle}
            placeholder="Enter Player 5 name"
            placeholderTextColor="blue"
            onChangeText={(newNameTextPlayer5) =>
              setNameTextPlayer5(newNameTextPlayer5)
            }
          />
          <Pressable 
          style={() => [
            {
              backgroundColor: backgroundColor15,
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
          onPress={() => handlePlayer5Score(301)}>
            <Text style={styles.buttonStyle3}>301</Text>
          </Pressable>
          <Pressable 
          style={() => [
            {
              backgroundColor: backgroundColor16,
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
          onPress={() => handlePlayer5Score(501)}>
            <Text style={styles.buttonStyle3}>501</Text>
          </Pressable>
        </Row>
        }
        {numberOfPlayers > 5 &&
        <Row>
          <TextInput
            style={styles.textStyle}
            placeholder="Enter Player 6 name"
            placeholderTextColor="blue"
            onChangeText={(newNameTextPlayer6) =>
              setNameTextPlayer6(newNameTextPlayer6)
            }
          />
          <Pressable 
          style={() => [
            {
              backgroundColor: backgroundColor17,
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
          onPress={() => handlePlayer6Score(301)}>
            <Text style={styles.buttonStyle3}>301</Text>
          </Pressable>
          <Pressable 
          style={() => [
            {
              backgroundColor: backgroundColor18,
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
          onPress={() => handlePlayer6Score(501)}>
            <Text style={styles.buttonStyle3}>501</Text>
          </Pressable>
        </Row>
        }
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
            
            if(numberOfPlayers === 1){
              navigation.navigate("Single Player Game", {
                player1StartingScore: startingScorePlayer1
              });
            }
            
            if(numberOfPlayers === 2){

            navigation.navigate("Two Player Game", {
              player1Name: nameTextPlayer1,
              player2Name: nameTextPlayer2,
              player1StartingScore: startingScorePlayer1,
              player2StartingScore: startingScorePlayer2,
            });
          }

          if(numberOfPlayers > 2){
            navigation.navigate("Multiplayer Game", {
              player1Name: nameTextPlayer1,
              player2Name: nameTextPlayer2,
              player3Name: nameTextPlayer3,
              player4Name: nameTextPlayer4,
              player5Name: nameTextPlayer5,
              player6Name: nameTextPlayer6,
              player1StartingScore: startingScorePlayer1,
              player2StartingScore: startingScorePlayer2,
              player3StartingScore: startingScorePlayer3,
              player4StartingScore: startingScorePlayer4,
              player5StartingScore: startingScorePlayer5,
              player6StartingScore: startingScorePlayer6,
              numOfPlayers: numberOfPlayers,
            });
          }

          }}
        >
          <Text style={styles.buttonStyle2}>LET'S PLAY DARTS!</Text>
        </Pressable>
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
