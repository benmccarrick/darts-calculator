import React, { Component } from "react";
import { Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./Button"
import Row from "./Row";
import { initialState, possibleOuts } from "./dartCalculator";

export default class MultiPlayer extends Component {
  state = initialState;

  HandleTap = (type, value) => {
    if(this.state.player1Throw){
      this.state.currentValue = this.state.currentValue - value
      this.setState({firstDart: value});
      this.setState({previousValue: this.state.currentValue});
  
      this.state.all3Darts.push(value)
  
      if(this.state.all3Darts.length === 3){
        setTimeout(
          function() {
              this.setState({timePassed: true});
              this.setState({player1Throw: false});
              this.setState({player2Throw: true});
              this.setState({all3Darts: []});
          }
          .bind(this),
          1500
        );
      }
  
      if(this.state.currentValue === 1){
        this.setState({all3Darts: []});
        this.state.dartsAverage.pop();
        this.state.dartsAverage.push(0);
      }
      if(this.state.currentValue < 0){
        this.state.currentValue = this.state.previousValue
        this.setState({all3Darts: []});
        this.state.dartsAverage.pop();
        this.state.dartsAverage.push(0);
        this.setState({previousValue: this.state.currentValue})
      }
  
      if (this.state.modalVisible20){
        this.setState({modalVisible20: false});
      }
      if (this.state.modalVisible19){
        this.setState({modalVisible19: false});
      }
      if (this.state.modalVisible18){
        this.setState({modalVisible18: false});
      }
      if (this.state.modalVisible17){
        this.setState({modalVisible17: false});
      }
      if (this.state.modalVisible16){
        this.setState({modalVisible16: false});
      }
      if (this.state.modalVisible15){
        this.setState({modalVisible15: false});
      }
      if (this.state.modalVisible14){
        this.setState({modalVisible14: false});
      }
      if (this.state.modalVisible13){
        this.setState({modalVisible13: false});
      }
      if (this.state.modalVisible12){
        this.setState({modalVisible12: false});
      }
      if (this.state.modalVisible11){
        this.setState({modalVisible11: false});
      }
      if (this.state.modalVisible10){
        this.setState({modalVisible10: false});
      }
      if (this.state.modalVisible9){
        this.setState({modalVisible9: false});
      }
      if (this.state.modalVisible8){
        this.setState({modalVisible8: false});
      }
      if (this.state.modalVisible7){
        this.setState({modalVisible7: false});
      }
      if (this.state.modalVisible6){
        this.setState({modalVisible6: false});
      }
      if (this.state.modalVisible5){
        this.setState({modalVisible5: false});
      }
      if (this.state.modalVisible4){
        this.setState({modalVisible4: false});
      }
      if (this.state.modalVisible3){
        this.setState({modalVisible3: false});
      }
      if (this.state.modalVisible2){
        this.setState({modalVisible2: false});
      }
      if (this.state.modalVisible1){
        this.setState({modalVisible1: false});
      }
      
      this.state.dartsAverage.push(value)
      
      if(this.state.currentValue <= 40){
        this.setState({possibleOutShot: null})
        this.setState({showOuts: false})
      }
      if(this.state.currentValue === 0){
        if(this.state.all3Darts.length === 3){
          this.state.checkouts.push(this.state.all3Darts[0] + this.state.all3Darts[1] + this.state.all3Darts[2])
        }
        if(this.state.all3Darts.length === 2){
          this.state.checkouts.push(this.state.all3Darts[0] + this.state.all3Darts[1])
        }
        if(this.state.all3Darts.length === 1){
          this.state.checkouts.push(this.state.all3Darts[0])
        }
          this.setState({currentValue: 501});
          this.setState({currentValue2: 501});
          this.setState({legsWon: parseFloat(this.state.legsWon) + 1});
          this.setState({showOuts: false});
          this.setState({all3Darts: []})
          if(this.state.startingLeg % 2 === 0){
            this.setState({player1Throw: false})
            this.setState({player2Throw: true})
          }
          else{
            this.setState({player1Throw: true})
            this.setState({player2Throw: false})
          }
          this.state.startingLeg++;
  
      }
  
      if(this.state.checkouts.length){
        let highestCheckout = this.state.checkouts[0]
        for (let i = 0; i < this.state.checkouts.length; i++) {
          if (this.state.checkouts[i] > highestCheckout ) {
            highestCheckout = this.state.checkouts[i];
          }
        }
        this.setState({highestOut: highestCheckout})
      }
  
      if(this.state.all3Darts.length === 3 && this.state.all3Darts[0] + this.state.all3Darts[1] + this.state.all3Darts[2] === 180){
        this.setState({total180s: parseFloat(this.state.total180s) + 1})
  
      }
  
      const outs = Object.keys(possibleOuts)
  
      for(let i = 0; i < outs.length; i++){
        if (parseFloat(outs[i]) === this.state.currentValue){
          this.setState({possibleOutShot: possibleOuts[outs[i]]})
          this.state.showOuts = true
        }
      }
    };
    if(this.state.player2Throw){
      this.state.currentValue2 = this.state.currentValue2 - value
      this.setState({firstDart: value});
      this.setState({previousValue2: this.state.currentValue2});
  
      this.state.all3Darts2.push(value)
  
      if(this.state.all3Darts2.length === 3){
        setTimeout(
          function() {
              this.setState({timePassed: true});
              this.setState({player2Throw: false});
              this.setState({player1Throw: true});
              this.setState({all3Darts2: []});
          }
          .bind(this),
          1500
        );
      }
  
      if(this.state.currentValue2 === 1){
        this.setState({all3Darts2: []});
        this.state.dartsAverage2.pop();
        this.state.dartsAverage2.push(0);
      }
      if(this.state.currentValue2 < 0){
        this.state.currentValue2 = this.state.previousValue2
        this.setState({all3Darts2: []});
        this.state.dartsAverage2.pop();
        this.state.dartsAverage2.push(0);
        this.setState({previousValue2: this.state.currentValue2})
      }
  
      if (this.state.modalVisible20){
        this.setState({modalVisible20: false});
      }
      if (this.state.modalVisible19){
        this.setState({modalVisible19: false});
      }
      if (this.state.modalVisible18){
        this.setState({modalVisible18: false});
      }
      if (this.state.modalVisible17){
        this.setState({modalVisible17: false});
      }
      if (this.state.modalVisible16){
        this.setState({modalVisible16: false});
      }
      if (this.state.modalVisible15){
        this.setState({modalVisible15: false});
      }
      if (this.state.modalVisible14){
        this.setState({modalVisible14: false});
      }
      if (this.state.modalVisible13){
        this.setState({modalVisible13: false});
      }
      if (this.state.modalVisible12){
        this.setState({modalVisible12: false});
      }
      if (this.state.modalVisible11){
        this.setState({modalVisible11: false});
      }
      if (this.state.modalVisible10){
        this.setState({modalVisible10: false});
      }
      if (this.state.modalVisible9){
        this.setState({modalVisible9: false});
      }
      if (this.state.modalVisible8){
        this.setState({modalVisible8: false});
      }
      if (this.state.modalVisible7){
        this.setState({modalVisible7: false});
      }
      if (this.state.modalVisible6){
        this.setState({modalVisible6: false});
      }
      if (this.state.modalVisible5){
        this.setState({modalVisible5: false});
      }
      if (this.state.modalVisible4){
        this.setState({modalVisible4: false});
      }
      if (this.state.modalVisible3){
        this.setState({modalVisible3: false});
      }
      if (this.state.modalVisible2){
        this.setState({modalVisible2: false});
      }
      if (this.state.modalVisible1){
        this.setState({modalVisible1: false});
      }
      
      this.state.dartsAverage2.push(value)
      
      if(this.state.currentValue2 <= 40){
        this.setState({possibleOutShot2: null})
        this.setState({showOuts2: false})
      }
      if(this.state.currentValue2 === 0){
        if(this.state.all3Darts2.length === 3){
          this.state.checkouts2.push(this.state.all3Darts2[0] + this.state.all3Darts2[1] + this.state.all3Darts2[2])
        }
        if(this.state.all3Darts2.length === 2){
          this.state.checkouts2.push(this.state.all3Darts2[0] + this.state.all3Darts2[1])
        }
        if(this.state.all3Darts2.length === 1){
          this.state.checkouts2.push(this.state.all3Darts2[0])
        }
          this.setState({currentValue2: 501});
          this.setState({currentValue: 501});
          this.setState({legsWon2: parseFloat(this.state.legsWon2) + 1});
          this.setState({showOuts: false});
          this.setState({all3Darts2: []});

          if(this.state.startingLeg % 2 === 0){
            this.setState({player1Throw: false})
            this.setState({player2Throw: true})
          }
          else {
            this.setState({player1Throw: true})
            this.setState({player2Throw: false})
          }
          this.state.startingLeg++;
      }
  
      if(this.state.checkouts2.length){
        let highestCheckout = this.state.checkouts2[0]
        for (let i = 0; i < this.state.checkouts2.length; i++) {
          if (this.state.checkouts2[i] > highestCheckout ) {
            highestCheckout = this.state.checkouts2[i];
          }
        }
        this.setState({highestOut2: highestCheckout})
      }
  
      if(this.state.all3Darts2.length === 3 && this.state.all3Darts2[0] + this.state.all3Darts2[1] + this.state.all3Darts2[2] === 180){
        this.setState({total180s2: parseFloat(this.state.total180s2) + 1})
  
      }
  
      const outs = Object.keys(possibleOuts)
  
      for(let i = 0; i < outs.length; i++){
        if (parseFloat(outs[i]) === this.state.currentValue2){
          this.setState({possibleOutShot2: possibleOuts[outs[i]]})
          this.state.showOuts2 = true
        }
      }
    }
    }

  threeDartAverage = () => {
      let allDartsAverage = this.state.dartsAverage
      const averages = []
      let sum = 0;
      
      for (let i = 0; i < allDartsAverage.length; i++){
        sum = sum + allDartsAverage[i];
        if ((i + 1) % 3 == 0) {
          averages.push(sum);
          sum = 0;
        }
      }
      
      const allAverages = averages.reduce((a, b) => a + b, 0) / averages.length;
  
      if (averages.length > 0){
          return allAverages;
  
      }
      return 0;
  }
  threeDartAverage2 = () => {
      let allDartsAverage = this.state.dartsAverage2
      const averages = []
      let sum = 0;
      
      for (let i = 0; i < allDartsAverage.length; i++){
        sum = sum + allDartsAverage[i];
        if ((i + 1) % 3 == 0) {
          averages.push(sum);
          sum = 0;
        }
      }
      
      const allAverages = averages.reduce((a, b) => a + b, 0) / averages.length;
  
      if (averages.length > 0){
          return allAverages;
  
      }
      return 0;
  }


  ResetGame = () => {
    this.setState(initialState)
    this.setState({currentValue: "501"})
    this.setState({currentValue2: "501"})
    this.setState({dartsAverage: []})
    this.setState({dartsAverage2: []})
    this.setState({all3Darts: []})
    this.setState({all3Darts2: []})
    this.setState({showOuts: false})
    this.setState({startingLeg: 0})
    this.setState({highestOut: "0"})
    this.setState({highestOut2: "0"})
  }

  UndoLastDart = () => {
    if(this.state.player1Throw){
      if(this.state.currentValue <= 501){
      this.setState({currentValue: (this.state.currentValue + this.state.dartsAverage.pop())});
      this.state.all3Darts.pop();
      }
      if (this.state.currentValue + this.state.dartsAverage.slice(-1) > 170
       || this.state.currentValue + this.state.dartsAverage.slice(-1) === 159
       || this.state.currentValue + this.state.dartsAverage.slice(-1) === 162
       || this.state.currentValue + this.state.dartsAverage.slice(-1) === 163
       || this.state.currentValue + this.state.dartsAverage.slice(-1) === 165
       || this.state.currentValue + this.state.dartsAverage.slice(-1) === 166
       || this.state.currentValue + this.state.dartsAverage.slice(-1) === 168
       || this.state.currentValue + this.state.dartsAverage.slice(-1) === 169
      ){
        this.state.showOuts = false;
      }
    }
    if(this.state.player2Throw){
      if(this.state.currentValue2 <= 501){
        this.setState({currentValue2: (this.state.currentValue2 + this.state.dartsAverage2.pop())});
        this.state.all3Darts2.pop();
        }
        if (this.state.currentValue2 + this.state.dartsAverage2.slice(-1) > 170
         || this.state.currentValue2 + this.state.dartsAverage2.slice(-1) === 159
         || this.state.currentValue2 + this.state.dartsAverage2.slice(-1) === 162
         || this.state.currentValue2 + this.state.dartsAverage2.slice(-1) === 163
         || this.state.currentValue2 + this.state.dartsAverage2.slice(-1) === 165
         || this.state.currentValue2 + this.state.dartsAverage2.slice(-1) === 166
         || this.state.currentValue2 + this.state.dartsAverage2.slice(-1) === 168
         || this.state.currentValue2 + this.state.dartsAverage2.slice(-1) === 169
        ){
          this.state.showOuts = false;
        }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.value}>
            Player 1 Score: {parseFloat(this.state.currentValue).toLocaleString()}{" "}Player 2 Score: {parseFloat(this.state.currentValue2).toLocaleString()}
          </Text>
          <Text style={styles.legValue}>
            Match Score: Player 1:{parseFloat(this.state.legsWon).toLocaleString()}{" "}Player 2:{parseFloat(this.state.legsWon2).toLocaleString()}
            </Text>
          <Text style={styles.threeDartValue}>3 Dart Average: Player 1 - {this.threeDartAverage().toFixed(2)}{" "}Player 2 - {this.threeDartAverage2().toFixed(2)}</Text>
            <Text style={styles.legValue}>
            Total 180s: Player 1 - {parseFloat(this.state.total180s).toLocaleString()}{" "}Player 2 - {parseFloat(this.state.total180s2).toLocaleString()}
            </Text>
            <Text style={styles.legValue}>
            Highest Checkout: Player 1 - {parseFloat(this.state.highestOut).toLocaleString()}{" "}Player 2 - {parseFloat(this.state.highestOut2).toLocaleString()}
            </Text>
            { this.state.showOuts && 
            <Text style={styles.textStyle}>Possible Out: Player 1 - {this.state.possibleOutShot}</Text>
            }
             { this.state.showOuts2 && 
            <Text style={styles.textStyle}>Possible Out: Player 2 - {this.state.possibleOutShot2}</Text>
            }
            <Text style={styles.threeDarts}>{this.state.all3Darts[0]}{" "}{" "}{this.state.all3Darts[1]}{" "}{" "}{this.state.all3Darts[2]}
            </Text>
            <Text style={styles.threeDarts}>{this.state.all3Darts2[0]}{" "}{" "}{this.state.all3Darts2[1]}{" "}{" "}{this.state.all3Darts2[2]}
            </Text>
          <Row>
          <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible20}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible20: false});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 20)}>
              <Text style={styles.textStyle}>Single 20</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 40)}>
              <Text style={styles.textStyle}>Double 20</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 60)}>
              <Text style={styles.textStyle}>Treble 20</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =>  this.setState({modalVisible20: true})}>
        <Text style={styles.textStyle}>20/D20/T20</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible19}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible19: false});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 19)}>
              <Text style={styles.textStyle}>Single 19</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 38)}>
              <Text style={styles.textStyle}>Double 19</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 57)}>
              <Text style={styles.textStyle}>Treble 19</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =>  this.setState({modalVisible19: true})}>
        <Text style={styles.textStyle}>19/D19/T19</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible18}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible18: false});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 18)}>
              <Text style={styles.textStyle}>Single 18</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 36)}>
              <Text style={styles.textStyle}>Double 18</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 54)}>
              <Text style={styles.textStyle}>Treble 18</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =>  this.setState({modalVisible18: true})}>
        <Text style={styles.textStyle}>18/D18/T18</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible17}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible17: false});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 17)}>
              <Text style={styles.textStyle}>Single 17</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 34)}>
              <Text style={styles.textStyle}>Double 17</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 51)}>
              <Text style={styles.textStyle}>Treble 17</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =>  this.setState({modalVisible17: true})}>
        <Text style={styles.textStyle}>17/D17/T17</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible16}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible16: false});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 16)}>
              <Text style={styles.textStyle}>Single 16</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 32)}>
              <Text style={styles.textStyle}>Double 16</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 48)}>
              <Text style={styles.textStyle}>Treble 16</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =>  this.setState({modalVisible16: true})}>
        <Text style={styles.textStyle}>16/D16/T16</Text>
      </Pressable>
    </View>
          </Row>
          <Row>
          <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible15}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible15: false});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 15)}>
              <Text style={styles.textStyle}>Single 15</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 30)}>
              <Text style={styles.textStyle}>Double 15</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 45)}>
              <Text style={styles.textStyle}>Treble 15</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =>  this.setState({modalVisible15: true})}>
        <Text style={styles.textStyle}>15/D15/T15</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible14}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible14: false});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 14)}>
              <Text style={styles.textStyle}>Single 14</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 28)}>
              <Text style={styles.textStyle}>Double 14</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 42)}>
              <Text style={styles.textStyle}>Treble 14</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =>  this.setState({modalVisible14: true})}>
        <Text style={styles.textStyle}>14/D14/T14</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible13}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible13: false});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 13)}>
              <Text style={styles.textStyle}>Single 13</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 26)}>
              <Text style={styles.textStyle}>Double 13</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 39)}>
              <Text style={styles.textStyle}>Treble 13</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =>  this.setState({modalVisible13: true})}>
        <Text style={styles.textStyle}>13/D13/T13</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible12}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible12: false});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 12)}>
              <Text style={styles.textStyle}>Single 12</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 24)}>
              <Text style={styles.textStyle}>Double 12</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 36)}>
              <Text style={styles.textStyle}>Treble 12</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =>  this.setState({modalVisible12: true})}>
        <Text style={styles.textStyle}>12/D12/T12</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible11}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible11: false});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 11)}>
              <Text style={styles.textStyle}>Single 11</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 22)}>
              <Text style={styles.textStyle}>Double 11</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 33)}>
              <Text style={styles.textStyle}>Treble 11</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =>  this.setState({modalVisible11: true})}>
        <Text style={styles.textStyle}>11/D11/T11</Text>
      </Pressable>
    </View>
          </Row>
          <Row>
          <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible10}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible10: false});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 10)}>
              <Text style={styles.textStyle}>Single 10</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 20)}>
              <Text style={styles.textStyle}>Double 10</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 30)}>
              <Text style={styles.textStyle}>Treble 10</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =>  this.setState({modalVisible10: true})}>
        <Text style={styles.textStyle}>10/D10/T10</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible9}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible9: false});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 9)}>
              <Text style={styles.textStyle}>Single 9</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 18)}>
              <Text style={styles.textStyle}>Double 9</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 27)}>
              <Text style={styles.textStyle}>Treble 9</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =>  this.setState({modalVisible9: true})}>
        <Text style={styles.textStyle}>9/D9/T9</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible8}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible8: false});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 8)}>
              <Text style={styles.textStyle}>Single 8</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 16)}>
              <Text style={styles.textStyle}>Double 8</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 24)}>
              <Text style={styles.textStyle}>Treble 8</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =>  this.setState({modalVisible8: true})}>
        <Text style={styles.textStyle}>8/D8/T8</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible7}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible7: false});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 7)}>
              <Text style={styles.textStyle}>Single 7</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 14)}>
              <Text style={styles.textStyle}>Double 7</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 21)}>
              <Text style={styles.textStyle}>Treble 7</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =>  this.setState({modalVisible7: true})}>
        <Text style={styles.textStyle}>7/D7/T7</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible6}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible6: false});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 6)}>
              <Text style={styles.textStyle}>Single 6</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 12)}>
              <Text style={styles.textStyle}>Double 6</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 18)}>
              <Text style={styles.textStyle}>Treble 6</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =>  this.setState({modalVisible6: true})}>
        <Text style={styles.textStyle}>6/D6/T6</Text>
      </Pressable>
    </View>
          </Row>
          <Row>
          <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible5}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible5: false});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 5)}>
              <Text style={styles.textStyle}>Single 5</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 10)}>
              <Text style={styles.textStyle}>Double 5</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 15)}>
              <Text style={styles.textStyle}>Treble 5</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =>  this.setState({modalVisible5: true})}>
        <Text style={styles.textStyle}>5/D5/T5</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible4}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible4: false});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 4)}>
              <Text style={styles.textStyle}>Single 4</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 8)}>
              <Text style={styles.textStyle}>Double 4</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 12)}>
              <Text style={styles.textStyle}>Treble 4</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =>  this.setState({modalVisible4: true})}>
        <Text style={styles.textStyle}>4/D4/T4</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible3}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible3: false});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 3)}>
              <Text style={styles.textStyle}>Single 3</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 6)}>
              <Text style={styles.textStyle}>Double 3</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 9)}>
              <Text style={styles.textStyle}>Treble 3</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =>  this.setState({modalVisible3: true})}>
        <Text style={styles.textStyle}>3/D3/T3</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible2}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible2: false});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 2)}>
              <Text style={styles.textStyle}>Single 2</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 4)}>
              <Text style={styles.textStyle}>Double 2</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 6)}>
              <Text style={styles.textStyle}>Treble 2</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =>  this.setState({modalVisible2: true})}>
        <Text style={styles.textStyle}>2/D2/T2</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible1}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible1: false});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 1)}>
              <Text style={styles.textStyle}>Single 1</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 2)}>
              <Text style={styles.textStyle}>Double 1</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.HandleTap("number", 3)}>
              <Text style={styles.textStyle}>Treble 1</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =>  this.setState({modalVisible1: true})}>
        <Text style={styles.textStyle}>1/D1/T1</Text>
      </Pressable>
    </View>
          </Row>
          <Row>
            <Button text="25" onPress={() => this.HandleTap("number", 25)} />
            <Button text="BULL" onPress={() => this.HandleTap("number", 50)} />
            <Button text="Miss" onPress={() => this.HandleTap("number", 0)} />
            <Button text="Undo" onPress={() => this.UndoLastDart()} />
            <Button text="Reset" onPress={() => this.ResetGame()} />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  threeDartValue: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  legValue: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
  },
  threeDarts: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 32,
  }
});