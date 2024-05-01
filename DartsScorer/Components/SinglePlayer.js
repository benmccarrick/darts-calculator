import React, { Component } from "react";
import { Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./Button"
import Row from "./Row";
import { initialState, dartNumbersArr1 } from "./dartCalculator";

export default class SinglePlayer extends Component {
  state = initialState;

  HandleTap = (type, value) => {
    this.setState({currentValue: this.state.currentValue - value});
    this.setState({thirdPreviousValue: this.state.secondPreviousValue});
    this.setState({secondPreviousValue: this.state.previousValue});
    this.setState({previousValue: value});
    this.setState({modalVisible: false});
    
    this.state.dartsAverage.push(value)
    

    if(this.state.currentValue <= 0){
        this.setState({currentValue: 501});
        this.setState({legsCompleted: parseFloat(this.state.legsCompleted) + 1});
    }

    if(value + this.state.previousValue + this.state.secondPreviousValue === 180){
        this.setState({total180s: parseFloat(this.state.total180s) + 1})
        this.setState({thirdPreviousValue: null});
        this.setState({secondPreviousValue: null});
        this.setState({previousValue: null});
    }

    if(this.state.secondPreviousValue){
      this.setState({thirdPreviousValue: null});
      this.setState({secondPreviousValue: null});
      this.setState({previousValue: null});
    }
  };

  threeDartAverage = () => {
    let allDartsAverage = this.state.dartsAverage
    const averages = []
    let sum = 0;
  

    for (let i = 0; i < allDartsAverage.length; i++){
        sum = sum + allDartsAverage[i];
        if ((i + 1) % 3 == 0) {
          averages.push(sum / 3);
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
    this.state.dartsAverage.length = 0
  }

  UndoLastDart = () => {
    if(this.state.currentValue < 501){
    this.setState({currentValue: this.state.currentValue + this.state.previousValue});

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>
          <Text style={styles.threeDartValue}>3 Dart Average: {this.threeDartAverage().toFixed(2)}</Text>
          <Text style={styles.legValue}>
            Legs Completed: {parseFloat(this.state.legsCompleted).toLocaleString()}
            </Text>
            <Text style={styles.legValue}>
            Total 180s: {parseFloat(this.state.total180s).toLocaleString()}
            </Text>
            <Text style={styles.legValue}>
            {this.state.previousValue}{" "}{this.state.secondPreviousValue}{" "}{this.state.thirdPreviousValue}
            </Text>
          <Row>
          <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible: false});
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
        onPress={() =>  this.setState({modalVisible: true})}>
        <Text style={styles.textStyle}>20/D20/T20</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible: false});
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
        onPress={() =>  this.setState({modalVisible: true})}>
        <Text style={styles.textStyle}>19/D19/T19</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible: false});
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
        onPress={() =>  this.setState({modalVisible: true})}>
        <Text style={styles.textStyle}>18/D18/T18</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible: false});
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
        onPress={() =>  this.setState({modalVisible: true})}>
        <Text style={styles.textStyle}>17/D17/T17</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible: false});
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
        onPress={() =>  this.setState({modalVisible: true})}>
        <Text style={styles.textStyle}>16/D16/T16</Text>
      </Pressable>
    </View>
          </Row>
          <Row>
          <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible: false});
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
        onPress={() =>  this.setState({modalVisible: true})}>
        <Text style={styles.textStyle}>15/D15/T15</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible: false});
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
        onPress={() =>  this.setState({modalVisible: true})}>
        <Text style={styles.textStyle}>14/D14/T14</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible: false});
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
        onPress={() =>  this.setState({modalVisible: true})}>
        <Text style={styles.textStyle}>13/D13/T13</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible: false});
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
        onPress={() =>  this.setState({modalVisible: true})}>
        <Text style={styles.textStyle}>12/D12/T12</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible: false});
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
        onPress={() =>  this.setState({modalVisible: true})}>
        <Text style={styles.textStyle}>11/D11/T11</Text>
      </Pressable>
    </View>
          </Row>
          <Row>
          <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible: false});
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
        onPress={() =>  this.setState({modalVisible: true})}>
        <Text style={styles.textStyle}>10/D10/T10</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible: false});
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
        onPress={() =>  this.setState({modalVisible: true})}>
        <Text style={styles.textStyle}>9/D9/T9</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible: false});
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
        onPress={() =>  this.setState({modalVisible: true})}>
        <Text style={styles.textStyle}>8/D8/T8</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible: false});
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
        onPress={() =>  this.setState({modalVisible: true})}>
        <Text style={styles.textStyle}>7/D7/T7</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible: false});
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
        onPress={() =>  this.setState({modalVisible: true})}>
        <Text style={styles.textStyle}>6/D6/T6</Text>
      </Pressable>
    </View>
          </Row>
          <Row>
          <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible: false});
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
        onPress={() =>  this.setState({modalVisible: true})}>
        <Text style={styles.textStyle}>5/D5/T5</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible: false});
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
        onPress={() =>  this.setState({modalVisible: true})}>
        <Text style={styles.textStyle}>4/D4/T4</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible: false});
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
        onPress={() =>  this.setState({modalVisible: true})}>
        <Text style={styles.textStyle}>3/D3/T3</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible: false});
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
        onPress={() =>  this.setState({modalVisible: true})}>
        <Text style={styles.textStyle}>2/D2/T2</Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          this.setState({modalVisible: false});
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
        onPress={() =>  this.setState({modalVisible: true})}>
        <Text style={styles.textStyle}>1/D1/T1</Text>
      </Pressable>
    </View>
          </Row>
          <Row>
            <Button text="25" onPress={() => this.HandleTap("number", 25)} />
            <Button text="50" onPress={() => this.HandleTap("number", 50)} />
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
    fontSize: 42,
    textAlign: "center",
    marginBottom: 10,
  },
  threeDartValue: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 10,
  },
  legValue: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 40,
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
    marginBottom: 15,
    textAlign: 'center',
  },
});

  