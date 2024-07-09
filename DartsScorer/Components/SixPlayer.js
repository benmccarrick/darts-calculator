import React, { Component } from "react";
import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Button from "./Button";
import Row from "./Row";
import { initialState, possibleOuts } from "./dartCalculator";

export default class SixPlayer extends Component {
  state = initialState;

  HandleTap = (type, value) => {
    if (this.state.player1Throw) {
      this.state.currentValue = this.state.currentValue - value;
      this.setState({ previousValue: this.state.currentValue });

      this.state.all3Darts.push(value);
      this.state.dartsAverage.push(value);

       if (this.state.all3Darts.length === 3 && this.state.currentValue !== 0) {
        setTimeout(
          function () {
            this.setState({ timePassed: true });
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: true });
          }.bind(this),
          1500
        );9
      }

      if (this.state.all3Darts.length === 1 && this.props.route.params.numOfPlayers === 3) {
        this.setState({ all3Darts3: [] });
      }
      if (this.state.all3Darts.length === 1 && this.props.route.params.numOfPlayers === 4) {
        this.setState({ all3Darts4: [] });
      }
      if (this.state.all3Darts.length === 1 && this.props.route.params.numOfPlayers === 5) {
        this.setState({ all3Darts5: [] });
      }
      if (this.state.all3Darts.length === 1 && this.props.route.params.numOfPlayers === 6) {
        this.setState({ all3Darts6: [] });
      }

      if (this.state.currentValue < 0 || this.state.currentValue === 1 || (type !== "double" && this.state.currentValue <= 0)) {
        if (this.state.all3Darts.length === 3) {
          this.state.currentValue = this.state.currentValue + (this.state.all3Darts[0] + this.state.all3Darts[1] + this.state.all3Darts[2])
          this.state.dartsAverage.pop();
          this.state.dartsAverage.pop();
          this.state.dartsAverage.pop();
          this.state.dartsAverage.push(0, 0, 0);
        }
        if (this.state.all3Darts.length === 2) {
          this.state.currentValue = this.state.currentValue + (this.state.all3Darts[0] + this.state.all3Darts[1])
          this.state.dartsAverage.pop();
          this.state.dartsAverage.pop();
          this.state.dartsAverage.push(0, 0, 0);
        }
        if (this.state.all3Darts.length === 1) {
          this.state.currentValue = this.state.currentValue + this.state.all3Darts[0]
          this.state.dartsAverage.pop();
          this.state.dartsAverage.push(0, 0, 0);
        }
        this.setState({ all3Darts: [] });
        this.setState({ previousValue: this.state.currentValue });
        this.setState({ player1Throw: false });
        this.setState({ player2Throw: true });
      }

      if (this.state.modalVisible20) {
        this.setState({ modalVisible20: false });
      }
      if (this.state.modalVisible19) {
        this.setState({ modalVisible19: false });
      }
      if (this.state.modalVisible18) {
        this.setState({ modalVisible18: false });
      }
      if (this.state.modalVisible17) {
        this.setState({ modalVisible17: false });
      }
      if (this.state.modalVisible16) {
        this.setState({ modalVisible16: false });
      }
      if (this.state.modalVisible15) {
        this.setState({ modalVisible15: false });
      }
      if (this.state.modalVisible14) {
        this.setState({ modalVisible14: false });
      }
      if (this.state.modalVisible13) {
        this.setState({ modalVisible13: false });
      }
      if (this.state.modalVisible12) {
        this.setState({ modalVisible12: false });
      }
      if (this.state.modalVisible11) {
        this.setState({ modalVisible11: false });
      }
      if (this.state.modalVisible10) {
        this.setState({ modalVisible10: false });
      }
      if (this.state.modalVisible9) {
        this.setState({ modalVisible9: false });
      }
      if (this.state.modalVisible8) {
        this.setState({ modalVisible8: false });
      }
      if (this.state.modalVisible7) {
        this.setState({ modalVisible7: false });
      }
      if (this.state.modalVisible6) {
        this.setState({ modalVisible6: false });
      }
      if (this.state.modalVisible5) {
        this.setState({ modalVisible5: false });
      }
      if (this.state.modalVisible4) {
        this.setState({ modalVisible4: false });
      }
      if (this.state.modalVisible3) {
        this.setState({ modalVisible3: false });
      }
      if (this.state.modalVisible2) {
        this.setState({ modalVisible2: false });
      }
      if (this.state.modalVisible1) {
        this.setState({ modalVisible1: false });
      }

      if (this.state.currentValue <= 40) {
        this.setState({ possibleOutShot: null });
        this.setState({ showOuts: false });
      }
      if (type === "double" && this.state.currentValue === 0) {
        this.setState({modalVisibleWinner1: true})
        setTimeout(
          function () {
            this.setState({ timePassed: true });
            this.setState({ modalVisibleWinner1: false})
          }.bind(this),
          3000
        );
        if(this.props.route.params.player1StartingScore === 301){
          this.setState({ currentValue: 301 });
        }
        else {
          this.setState({ currentValue: 501 });
        }
        if(this.props.route.params.player2StartingScore === 301){
          this.setState({ currentValue2: 301 });
        }
        else {
          this.setState({ currentValue2: 501 });
        }
        if(this.props.route.params.player3StartingScore === 301){
          this.setState({ currentValue3: 301 });
        }
        else {
          this.setState({ currentValue3: 501 }); 
        }
        if(this.props.route.params.player4StartingScore === 301){
            this.setState({ currentValue4: 301 });
          }
          else {
            this.setState({ currentValue4: 501 }); 
          }
          if(this.props.route.params.player5StartingScore === 301){
            this.setState({ currentValue5: 301 });
          }
          else {
            this.setState({ currentValue5: 501 }); 
          }
          if(this.props.route.params.player6StartingScore === 301){
            this.setState({ currentValue6: 301 });
          }
          else {
            this.setState({ currentValue6: 501 }); 
          }
        this.setState({ legsWon: parseFloat(this.state.legsWon) + 1 });
        this.setState({ showOuts2: false, showOuts3: false, showOuts4: false, showOuts5: false, showOuts6: false});
        this.setState({ possibleOutShot2: null, possibleOutShot3: null, possibleOutShot4: null, possibleOutShot5: null, possibleOutShot6: null});
        this.setState({ all3Darts: [] });
        this.state.startingLeg++;

        if (this.state.startingLeg === this.props.route.params.numOfPlayers){
            this.state.startingLeg = 0;
          }

          if (this.state.startingLeg === 0) {
            this.setState({ player1Throw: true });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 1) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: true });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 2) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: true });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 3) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: true });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 4) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: true });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 5) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: true });
          }
      }

      if (
        this.state.all3Darts.length === 3 &&
        this.state.all3Darts[0] +
          this.state.all3Darts[1] +
          this.state.all3Darts[2] ===
          180
      ) {
        this.setState({ modalVisible180: true})
        setTimeout(
          function () {
            this.setState({ timePassed: true });
            this.setState({ modalVisible180: false})
          }.bind(this),
          3000
        );
      }

      const outs = Object.keys(possibleOuts);

      for (let i = 0; i < outs.length; i++) {
        if (parseFloat(outs[i]) === this.state.currentValue) {
          this.setState({ possibleOutShot: possibleOuts[outs[i]] });
          this.state.showOuts = true;
        }
      }
    }
    if (this.state.player2Throw) {
      this.state.currentValue2 = this.state.currentValue2 - value;
      this.setState({ previousValue2: this.state.currentValue2 });

      this.state.all3Darts2.push(value);
      this.state.dartsAverage2.push(value);

      if (this.state.all3Darts2.length === 3 && this.state.currentValue2 !== 0) {
        setTimeout(
          function () {
            this.setState({ timePassed: true });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: true });
          }.bind(this),
          1500
        );
      }

      if (this.state.all3Darts2.length === 1) {
        this.setState({ all3Darts: [] });
      }

      if (this.state.currentValue2 < 0 || this.state.currentValue2 === 1 || (type !== "double" && this.state.currentValue2 <= 0)) {
        if (this.state.all3Darts2.length === 3) {
          this.state.currentValue2 = this.state.currentValue2 + (this.state.all3Darts2[0] + this.state.all3Darts2[1] + this.state.all3Darts2[2])
          this.state.dartsAverage2.pop();
          this.state.dartsAverage2.pop();
          this.state.dartsAverage2.pop();
          this.state.dartsAverage2.push(0, 0, 0);
        }
        if (this.state.all3Darts2.length === 2) {
          this.state.currentValue2 = this.state.currentValue2 + (this.state.all3Darts2[0] + this.state.all3Darts2[1])
          this.state.dartsAverage2.pop();
          this.state.dartsAverage2.pop();
          this.state.dartsAverage2.push(0, 0, 0);
        }
        if (this.state.all3Darts2.length === 1) {
          this.state.currentValue2 = this.state.currentValue2 + this.state.all3Darts2[0]
          this.state.dartsAverage2.pop();
          this.state.dartsAverage2.push(0, 0, 0);
        }
        this.setState({ all3Darts2: [] });
        this.setState({ previousValue2: this.state.currentValue2 });
        this.setState({ player2Throw: false });
        this.setState({ player3Throw: true });
      }

      if (this.state.modalVisible20) {
        this.setState({ modalVisible20: false });
      }
      if (this.state.modalVisible19) {
        this.setState({ modalVisible19: false });
      }
      if (this.state.modalVisible18) {
        this.setState({ modalVisible18: false });
      }
      if (this.state.modalVisible17) {
        this.setState({ modalVisible17: false });
      }
      if (this.state.modalVisible16) {
        this.setState({ modalVisible16: false });
      }
      if (this.state.modalVisible15) {
        this.setState({ modalVisible15: false });
      }
      if (this.state.modalVisible14) {
        this.setState({ modalVisible14: false });
      }
      if (this.state.modalVisible13) {
        this.setState({ modalVisible13: false });
      }
      if (this.state.modalVisible12) {
        this.setState({ modalVisible12: false });
      }
      if (this.state.modalVisible11) {
        this.setState({ modalVisible11: false });
      }
      if (this.state.modalVisible10) {
        this.setState({ modalVisible10: false });
      }
      if (this.state.modalVisible9) {
        this.setState({ modalVisible9: false });
      }
      if (this.state.modalVisible8) {
        this.setState({ modalVisible8: false });
      }
      if (this.state.modalVisible7) {
        this.setState({ modalVisible7: false });
      }
      if (this.state.modalVisible6) {
        this.setState({ modalVisible6: false });
      }
      if (this.state.modalVisible5) {
        this.setState({ modalVisible5: false });
      }
      if (this.state.modalVisible4) {
        this.setState({ modalVisible4: false });
      }
      if (this.state.modalVisible3) {
        this.setState({ modalVisible3: false });
      }
      if (this.state.modalVisible2) {
        this.setState({ modalVisible2: false });
      }
      if (this.state.modalVisible1) {
        this.setState({ modalVisible1: false });
      }

      if (this.state.currentValue2 <= 40) {
        this.setState({ possibleOutShot2: null });
        this.setState({ showOuts2: false });
      }
      if (type === "double" && this.state.currentValue2 === 0) {
        this.setState({modalVisibleWinner2: true})
        setTimeout(
          function () {
            this.setState({ timePassed: true });
            this.setState({ modalVisibleWinner2: false})
          }.bind(this),
          3000
        );
        if(this.props.route.params.player1StartingScore === 301){
            this.setState({ currentValue: 301 });
          }
          else {
            this.setState({ currentValue: 501 });
          }
          if(this.props.route.params.player2StartingScore === 301){
            this.setState({ currentValue2: 301 });
          }
          else {
            this.setState({ currentValue2: 501 });
          }
          if(this.props.route.params.player3StartingScore === 301){
            this.setState({ currentValue3: 301 });
          }
          else {
            this.setState({ currentValue3: 501 }); 
          }
          if(this.props.route.params.player4StartingScore === 301){
              this.setState({ currentValue4: 301 });
            }
            else {
              this.setState({ currentValue4: 501 }); 
            }
            if(this.props.route.params.player5StartingScore === 301){
              this.setState({ currentValue5: 301 });
            }
            else {
              this.setState({ currentValue5: 501 }); 
            }
            if(this.props.route.params.player6StartingScore === 301){
              this.setState({ currentValue6: 301 });
            }
            else {
              this.setState({ currentValue6: 501 }); 
            }
        this.setState({ legsWon2: parseFloat(this.state.legsWon2) + 1 });
        this.setState({ showOuts: false, showOuts3: false, showOuts4: false, showOuts5: false, showOuts6: false});
        this.setState({ possibleOutShot1: null, possibleOutShot3: null, possibleOutShot4: null, possibleOutShot5: null, possibleOutShot6: null});
        this.setState({ all3Darts2: [] });
        this.state.startingLeg++;

        if (this.state.startingLeg === this.props.route.params.numOfPlayers){
            this.state.startingLeg = 0;
          }

          if (this.state.startingLeg === 0) {
            this.setState({ player1Throw: true });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 1) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: true });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 2) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: true });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 3) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: true });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 4) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: true });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 5) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: true });
          }
      }

      if (
        this.state.all3Darts2.length === 3 &&
        this.state.all3Darts2[0] +
          this.state.all3Darts2[1] +
          this.state.all3Darts2[2] ===
          180
      ) {
        this.setState({ modalVisible180: true})
        setTimeout(
          function () {
            this.setState({ timePassed: true });
            this.setState({ modalVisible180: false})
          }.bind(this),
          3000
        );
      }

      const outs = Object.keys(possibleOuts);

      for (let i = 0; i < outs.length; i++) {
        if (parseFloat(outs[i]) === this.state.currentValue2) {
          this.setState({ possibleOutShot2: possibleOuts[outs[i]] });
          this.state.showOuts2 = true;
        }
      }
    }
    if (this.state.player3Throw) {
        this.state.currentValue3 = this.state.currentValue3 - value;
        this.setState({ previousValue3: this.state.currentValue3 });
  
        this.state.all3Darts3.push(value);
        this.state.dartsAverage3.push(value);
  
        if (this.state.all3Darts3.length === 3 && this.state.currentValue3 !== 0) {
          setTimeout(
            function () {
              this.setState({ timePassed: true });
              this.setState({ player3Throw: false });
              if(this.props.route.params.numOfPlayers > 3){
                  this.setState({ player4Throw: true });
              }
              else {
                this.setState({ player1Throw: true });
              }
            }.bind(this),
            1500
          );
        }
  
        if (this.state.all3Darts3.length === 1) {
          this.setState({ all3Darts2: [] });
        }
  
        if (this.state.currentValue3 < 0 || this.state.currentValue3 === 1 || (type !== "double" && this.state.currentValue3 <= 0)) {
          if (this.state.all3Darts3.length === 3) {
            this.state.currentValue3 = this.state.currentValue3 + (this.state.all3Darts3[0] + this.state.all3Darts3[1] + this.state.all3Darts3[2])
            this.state.dartsAverage3.pop();
            this.state.dartsAverage3.pop();
            this.state.dartsAverage3.pop();
            this.state.dartsAverage3.push(0, 0, 0);
          }
          if (this.state.all3Darts3.length === 2) {
            this.state.currentValue3 = this.state.currentValue3 + (this.state.all3Darts3[0] + this.state.all3Darts3[1])
            this.state.dartsAverage3.pop();
            this.state.dartsAverage3.pop();
            this.state.dartsAverage3.push(0, 0, 0);
          }
          if (this.state.all3Darts3.length === 1) {
            this.state.currentValue3 = this.state.currentValue3 + this.state.all3Darts3[0]
            this.state.dartsAverage3.pop();
            this.state.dartsAverage3.push(0, 0, 0);
          }
          this.setState({ all3Darts3: [] });
          this.setState({ previousValue3: this.state.currentValue3 });
          this.setState({ player3Throw: false });
          if(this.props.route.params.numOfPlayers > 3){
            this.setState({ player4Throw: true });
        }
        else {
          this.setState({ player1Throw: true });
        }
        }
  
        if (this.state.modalVisible20) {
          this.setState({ modalVisible20: false });
        }
        if (this.state.modalVisible19) {
          this.setState({ modalVisible19: false });
        }
        if (this.state.modalVisible18) {
          this.setState({ modalVisible18: false });
        }
        if (this.state.modalVisible17) {
          this.setState({ modalVisible17: false });
        }
        if (this.state.modalVisible16) {
          this.setState({ modalVisible16: false });
        }
        if (this.state.modalVisible15) {
          this.setState({ modalVisible15: false });
        }
        if (this.state.modalVisible14) {
          this.setState({ modalVisible14: false });
        }
        if (this.state.modalVisible13) {
          this.setState({ modalVisible13: false });
        }
        if (this.state.modalVisible12) {
          this.setState({ modalVisible12: false });
        }
        if (this.state.modalVisible11) {
          this.setState({ modalVisible11: false });
        }
        if (this.state.modalVisible10) {
          this.setState({ modalVisible10: false });
        }
        if (this.state.modalVisible9) {
          this.setState({ modalVisible9: false });
        }
        if (this.state.modalVisible8) {
          this.setState({ modalVisible8: false });
        }
        if (this.state.modalVisible7) {
          this.setState({ modalVisible7: false });
        }
        if (this.state.modalVisible6) {
          this.setState({ modalVisible6: false });
        }
        if (this.state.modalVisible5) {
          this.setState({ modalVisible5: false });
        }
        if (this.state.modalVisible4) {
          this.setState({ modalVisible4: false });
        }
        if (this.state.modalVisible3) {
          this.setState({ modalVisible3: false });
        }
        if (this.state.modalVisible2) {
          this.setState({ modalVisible2: false });
        }
        if (this.state.modalVisible1) {
          this.setState({ modalVisible1: false });
        }
  
        if (this.state.currentValue3 <= 40) {
          this.setState({ possibleOutShot3: null });
          this.setState({ showOuts3: false });
        }
        if (type === "double" && this.state.currentValue3 === 0) {
          this.setState({modalVisibleWinner3: true})
          setTimeout(
            function () {
              this.setState({ timePassed: true });
              this.setState({ modalVisibleWinner3: false})
            }.bind(this),
            3000
          );
          if(this.props.route.params.player1StartingScore === 301){
            this.setState({ currentValue: 301 });
          }
          else {
            this.setState({ currentValue: 501 });
          }
          if(this.props.route.params.player2StartingScore === 301){
            this.setState({ currentValue2: 301 });
          }
          else {
            this.setState({ currentValue2: 501 });
          }
          if(this.props.route.params.player3StartingScore === 301){
            this.setState({ currentValue3: 301 });
          }
          else {
            this.setState({ currentValue3: 501 }); 
          }
          if(this.props.route.params.player4StartingScore === 301){
              this.setState({ currentValue4: 301 });
            }
            else {
              this.setState({ currentValue4: 501 }); 
            }
            if(this.props.route.params.player5StartingScore === 301){
              this.setState({ currentValue5: 301 });
            }
            else {
              this.setState({ currentValue5: 501 }); 
            }
            if(this.props.route.params.player6StartingScore === 301){
              this.setState({ currentValue6: 301 });
            }
            else {
              this.setState({ currentValue6: 501 }); 
            }
          this.setState({ legsWon3: parseFloat(this.state.legsWon3) + 1 });
          this.setState({ showOuts: false, showOuts2: false, showOuts4: false, showOuts5: false, showOuts6: false});
          this.setState({ possibleOutShot1: null, possibleOutShot2: null, possibleOutShot4: null, possibleOutShot5: null, possibleOutShot6: null});
          this.setState({ all3Darts3: [] });
          this.state.startingLeg++;
  
          if (this.state.startingLeg === this.props.route.params.numOfPlayers){
            this.state.startingLeg = 0;
          }

          if (this.state.startingLeg === 0) {
            this.setState({ player1Throw: true });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 1) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: true });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 2) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: true });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 3) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: true });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 4) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: true });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 5) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: true });
          }
        }
  
        if (
          this.state.all3Darts3.length === 3 &&
          this.state.all3Darts3[0] +
            this.state.all3Darts3[1] +
            this.state.all3Darts3[2] ===
            180
        ) {
          this.setState({ modalVisible180: true})
          setTimeout(
            function () {
              this.setState({ timePassed: true });
              this.setState({ modalVisible180: false})
            }.bind(this),
            3000
          );
        }
  
        const outs = Object.keys(possibleOuts);
  
        for (let i = 0; i < outs.length; i++) {
          if (parseFloat(outs[i]) === this.state.currentValue3) {
            this.setState({ possibleOutShot3: possibleOuts[outs[i]] });
            this.state.showOuts3 = true;
          }
        }
      }
      if (this.state.player4Throw) {
        this.state.currentValue4 = this.state.currentValue4 - value;
        this.setState({ previousValue4: this.state.currentValue4 });
  
        this.state.all3Darts4.push(value);
        this.state.dartsAverage4.push(value);
  
        if (this.state.all3Darts4.length === 3 && this.state.currentValue4 !== 0) {
          setTimeout(
            function () {
              this.setState({ timePassed: true });
              this.setState({ player4Throw: false });
              if(this.props.route.params.numOfPlayers > 4){
                this.setState({ player5Throw: true });
            }
            else {
              this.setState({ player1Throw: true });
            }
            }.bind(this),
            1500
          );
        }
  
        if (this.state.all3Darts4.length === 1) {
          this.setState({ all3Darts3: [] });
        }
  
        if (this.state.currentValue4 < 0 || this.state.currentValue4 === 1 || (type !== "double" && this.state.currentValue4 <= 0)) {
          if (this.state.all3Darts4.length === 3) {
            this.state.currentValue4 = this.state.currentValue4 + (this.state.all3Darts4[0] + this.state.all3Darts4[1] + this.state.all3Darts4[2])
            this.state.dartsAverage4.pop();
            this.state.dartsAverage4.pop();
            this.state.dartsAverage4.pop();
            this.state.dartsAverage4.push(0, 0, 0);
          }
          if (this.state.all3Darts4.length === 2) {
            this.state.currentValue4 = this.state.currentValue4 + (this.state.all3Darts4[0] + this.state.all3Darts4[1])
            this.state.dartsAverage4.pop();
            this.state.dartsAverage4.pop();
            this.state.dartsAverage4.push(0, 0, 0);
          }
          if (this.state.all3Darts4.length === 1) {
            this.state.currentValue4 = this.state.currentValue4 + this.state.all3Darts4[0]
            this.state.dartsAverage4.pop();
            this.state.dartsAverage4.push(0, 0, 0);
          }
          this.setState({ all3Darts4: [] });
          this.setState({ previousValue4: this.state.currentValue4 });
          this.setState({ player4Throw: false });
          if(this.props.route.params.numOfPlayers > 4){
            this.setState({ player5Throw: true });
        }
        else {
          this.setState({ player1Throw: true });
        }
        }
  
        if (this.state.modalVisible20) {
          this.setState({ modalVisible20: false });
        }
        if (this.state.modalVisible19) {
          this.setState({ modalVisible19: false });
        }
        if (this.state.modalVisible18) {
          this.setState({ modalVisible18: false });
        }
        if (this.state.modalVisible17) {
          this.setState({ modalVisible17: false });
        }
        if (this.state.modalVisible16) {
          this.setState({ modalVisible16: false });
        }
        if (this.state.modalVisible15) {
          this.setState({ modalVisible15: false });
        }
        if (this.state.modalVisible14) {
          this.setState({ modalVisible14: false });
        }
        if (this.state.modalVisible13) {
          this.setState({ modalVisible13: false });
        }
        if (this.state.modalVisible12) {
          this.setState({ modalVisible12: false });
        }
        if (this.state.modalVisible11) {
          this.setState({ modalVisible11: false });
        }
        if (this.state.modalVisible10) {
          this.setState({ modalVisible10: false });
        }
        if (this.state.modalVisible9) {
          this.setState({ modalVisible9: false });
        }
        if (this.state.modalVisible8) {
          this.setState({ modalVisible8: false });
        }
        if (this.state.modalVisible7) {
          this.setState({ modalVisible7: false });
        }
        if (this.state.modalVisible6) {
          this.setState({ modalVisible6: false });
        }
        if (this.state.modalVisible5) {
          this.setState({ modalVisible5: false });
        }
        if (this.state.modalVisible4) {
          this.setState({ modalVisible4: false });
        }
        if (this.state.modalVisible3) {
          this.setState({ modalVisible3: false });
        }
        if (this.state.modalVisible2) {
          this.setState({ modalVisible2: false });
        }
        if (this.state.modalVisible1) {
          this.setState({ modalVisible1: false });
        }
  
        if (this.state.currentValue4 <= 40) {
          this.setState({ possibleOutShot4: null });
          this.setState({ showOuts4: false });
        }
        if (type === "double" && this.state.currentValue4 === 0) {
          this.setState({modalVisibleWinner4: true})
          setTimeout(
            function () {
              this.setState({ timePassed: true });
              this.setState({ modalVisibleWinner4: false})
            }.bind(this),
            3000
          );
          if(this.props.route.params.player1StartingScore === 301){
            this.setState({ currentValue: 301 });
          }
          else {
            this.setState({ currentValue: 501 });
          }
          if(this.props.route.params.player2StartingScore === 301){
            this.setState({ currentValue2: 301 });
          }
          else {
            this.setState({ currentValue2: 501 });
          }
          if(this.props.route.params.player3StartingScore === 301){
            this.setState({ currentValue3: 301 });
          }
          else {
            this.setState({ currentValue3: 501 }); 
          }
          if(this.props.route.params.player4StartingScore === 301){
              this.setState({ currentValue4: 301 });
            }
            else {
              this.setState({ currentValue4: 501 }); 
            }
            if(this.props.route.params.player5StartingScore === 301){
              this.setState({ currentValue5: 301 });
            }
            else {
              this.setState({ currentValue5: 501 }); 
            }
            if(this.props.route.params.player6StartingScore === 301){
              this.setState({ currentValue6: 301 });
            }
            else {
              this.setState({ currentValue6: 501 }); 
            }
          this.setState({ legsWon4: parseFloat(this.state.legsWon4) + 1 });
          this.setState({ showOuts: false, showOuts2: false, showOuts3: false, showOuts5: false, showOuts6: false});
          this.setState({ possibleOutShot1: null, possibleOutShot2: null, possibleOutShot3: null, possibleOutShot5: null, possibleOutShot6: null});
          this.setState({ all3Darts4: [] });
          this.state.startingLeg++;
  
          if (this.state.startingLeg === this.props.route.params.numOfPlayers){
            this.state.startingLeg = 0;
          }

          if (this.state.startingLeg === 0) {
            this.setState({ player1Throw: true });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 1) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: true });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 2) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: true });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 3) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: true });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 4) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: true });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 5) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: true });
          }
        }
  
        if (
          this.state.all3Darts4.length === 3 &&
          this.state.all3Darts4[0] +
            this.state.all3Darts4[1] +
            this.state.all3Darts4[2] ===
            180
        ) {
          this.setState({ modalVisible180: true})
          setTimeout(
            function () {
              this.setState({ timePassed: true });
              this.setState({ modalVisible180: false})
            }.bind(this),
            3000
          );
        }
  
        const outs = Object.keys(possibleOuts);
  
        for (let i = 0; i < outs.length; i++) {
          if (parseFloat(outs[i]) === this.state.currentValue4) {
            this.setState({ possibleOutShot4: possibleOuts[outs[i]] });
            this.state.showOuts4 = true;
          }
        }
      }
      if (this.state.player5Throw) {
        this.state.currentValue5 = this.state.currentValue5 - value;
        this.setState({ previousValue5: this.state.currentValue5 });
  
        this.state.all3Darts5.push(value);
        this.state.dartsAverage5.push(value);
  
        if (this.state.all3Darts5.length === 3 && this.state.currentValue5 !== 0) {
          setTimeout(
            function () {
              this.setState({ timePassed: true });
              this.setState({ player5Throw: false });
              if(this.props.route.params.numOfPlayers > 5){
                this.setState({ player6Throw: true });
            }
            else {
              this.setState({ player1Throw: true });
            }
            }.bind(this),
            1500
          );
        }
  
        if (this.state.all3Darts5.length === 1) {
          this.setState({ all3Darts4: [] });
        }
  
        if (this.state.currentValue5 < 0 || this.state.currentValue5 === 1 || (type !== "double" && this.state.currentValue5 <= 0)) {
          if (this.state.all3Darts5.length === 3) {
            this.state.currentValue5 = this.state.currentValue5 + (this.state.all3Darts5[0] + this.state.all3Darts5[1] + this.state.all3Darts5[2])
            this.state.dartsAverage5.pop();
            this.state.dartsAverage5.pop();
            this.state.dartsAverage5.pop();
            this.state.dartsAverage5.push(0, 0, 0);
          }
          if (this.state.all3Darts5.length === 2) {
            this.state.currentValue5 = this.state.currentValue5 + (this.state.all3Darts5[0] + this.state.all3Darts5[1])
            this.state.dartsAverage5.pop();
            this.state.dartsAverage5.pop();
            this.state.dartsAverage5.push(0, 0, 0);
          }
          if (this.state.all3Darts5.length === 1) {
            this.state.currentValue5 = this.state.currentValue5 + this.state.all3Darts5[0]
            this.state.dartsAverage5.pop();
            this.state.dartsAverage5.push(0, 0, 0);
          }
          this.setState({ all3Darts5: [] });
          this.setState({ previousValue5: this.state.currentValue5 });
          this.setState({ player5Throw: false });
          if(this.props.route.params.numOfPlayers > 5){
            this.setState({ player6Throw: true });
        }
        else {
          this.setState({ player1Throw: true });
        }
        }
  
        if (this.state.modalVisible20) {
          this.setState({ modalVisible20: false });
        }
        if (this.state.modalVisible19) {
          this.setState({ modalVisible19: false });
        }
        if (this.state.modalVisible18) {
          this.setState({ modalVisible18: false });
        }
        if (this.state.modalVisible17) {
          this.setState({ modalVisible17: false });
        }
        if (this.state.modalVisible16) {
          this.setState({ modalVisible16: false });
        }
        if (this.state.modalVisible15) {
          this.setState({ modalVisible15: false });
        }
        if (this.state.modalVisible14) {
          this.setState({ modalVisible14: false });
        }
        if (this.state.modalVisible13) {
          this.setState({ modalVisible13: false });
        }
        if (this.state.modalVisible12) {
          this.setState({ modalVisible12: false });
        }
        if (this.state.modalVisible11) {
          this.setState({ modalVisible11: false });
        }
        if (this.state.modalVisible10) {
          this.setState({ modalVisible10: false });
        }
        if (this.state.modalVisible9) {
          this.setState({ modalVisible9: false });
        }
        if (this.state.modalVisible8) {
          this.setState({ modalVisible8: false });
        }
        if (this.state.modalVisible7) {
          this.setState({ modalVisible7: false });
        }
        if (this.state.modalVisible6) {
          this.setState({ modalVisible6: false });
        }
        if (this.state.modalVisible5) {
          this.setState({ modalVisible5: false });
        }
        if (this.state.modalVisible4) {
          this.setState({ modalVisible4: false });
        }
        if (this.state.modalVisible3) {
          this.setState({ modalVisible3: false });
        }
        if (this.state.modalVisible2) {
          this.setState({ modalVisible2: false });
        }
        if (this.state.modalVisible1) {
          this.setState({ modalVisible1: false });
        }
  
        if (this.state.currentValue5 <= 40) {
          this.setState({ possibleOutShot5: null });
          this.setState({ showOuts5: false });
        }
        if (type === "double" && this.state.currentValue5 === 0) {
          this.setState({modalVisibleWinner5: true})
          setTimeout(
            function () {
              this.setState({ timePassed: true });
              this.setState({ modalVisibleWinner5: false})
            }.bind(this),
            3000
          );
          if(this.props.route.params.player1StartingScore === 301){
            this.setState({ currentValue: 301 });
          }
          else {
            this.setState({ currentValue: 501 });
          }
          if(this.props.route.params.player2StartingScore === 301){
            this.setState({ currentValue2: 301 });
          }
          else {
            this.setState({ currentValue2: 501 });
          }
          if(this.props.route.params.player3StartingScore === 301){
            this.setState({ currentValue3: 301 });
          }
          else {
            this.setState({ currentValue3: 501 }); 
          }
          if(this.props.route.params.player4StartingScore === 301){
              this.setState({ currentValue4: 301 });
            }
            else {
              this.setState({ currentValue4: 501 }); 
            }
            if(this.props.route.params.player5StartingScore === 301){
              this.setState({ currentValue5: 301 });
            }
            else {
              this.setState({ currentValue5: 501 }); 
            }
            if(this.props.route.params.player6StartingScore === 301){
              this.setState({ currentValue6: 301 });
            }
            else {
              this.setState({ currentValue6: 501 }); 
            }
          this.setState({ legsWon5: parseFloat(this.state.legsWon5) + 1 });
          this.setState({ showOuts: false, showOuts2: false, showOuts3: false, showOuts4: false, showOuts6: false});
          this.setState({ possibleOutShot1: null, possibleOutShot2: null, possibleOutShot3: null, possibleOutShot4: null, possibleOutShot6: null});
          this.setState({ all3Darts2: [] });
          this.state.startingLeg++;
  
          if (this.state.startingLeg === this.props.route.params.numOfPlayers){
            this.state.startingLeg = 0;
          }

          if (this.state.startingLeg === 0) {
            this.setState({ player1Throw: true });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 1) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: true });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 2) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: true });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 3) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: true });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 4) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: true });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 5) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: true });
          }
        }
  
        if (
          this.state.all3Darts5.length === 3 &&
          this.state.all3Darts5[0] +
            this.state.all3Darts5[1] +
            this.state.all3Darts5[2] ===
            180
        ) {
          this.setState({ modalVisible180: true})
          setTimeout(
            function () {
              this.setState({ timePassed: true });
              this.setState({ modalVisible180: false})
            }.bind(this),
            3000
          );
        }
  
        const outs = Object.keys(possibleOuts);
  
        for (let i = 0; i < outs.length; i++) {
          if (parseFloat(outs[i]) === this.state.currentValue5) {
            this.setState({ possibleOutShot5: possibleOuts[outs[i]] });
            this.state.showOuts5 = true;
          }
        }
      }
      if (this.state.player6Throw) {
        this.state.currentValue6 = this.state.currentValue6 - value;
        this.setState({ previousValue6: this.state.currentValue6 });
  
        this.state.all3Darts6.push(value);
        this.state.dartsAverage6.push(value);
  
        if (this.state.all3Darts6.length === 3 && this.state.currentValue6 !== 0) {
          setTimeout(
            function () {
              this.setState({ timePassed: true });
              this.setState({ player6Throw: false });
              this.setState({ player1Throw: true });
            }.bind(this),
            1500
          );
        }
  
        if (this.state.all3Darts6.length === 1) {
          this.setState({ all3Darts5: [] });
        }
  
        if (this.state.currentValue6 < 0 || this.state.currentValue6 === 1 || (type !== "double" && this.state.currentValue6 <= 0)) {
          if (this.state.all3Darts6.length === 3) {
            this.state.currentValue6 = this.state.currentValue6 + (this.state.all3Darts6[0] + this.state.all3Darts6[1] + this.state.all3Darts6[2])
            this.state.dartsAverage6.pop();
            this.state.dartsAverage6.pop();
            this.state.dartsAverage6.pop();
            this.state.dartsAverage6.push(0, 0, 0);
          }
          if (this.state.all3Darts6.length === 2) {
            this.state.currentValue6 = this.state.currentValue6 + (this.state.all3Darts6[0] + this.state.all3Darts6[1])
            this.state.dartsAverage6.pop();
            this.state.dartsAverage6.pop();
            this.state.dartsAverage6.push(0, 0, 0);
          }
          if (this.state.all3Darts6.length === 1) {
            this.state.currentValue6 = this.state.currentValue6 + this.state.all3Darts6[0]
            this.state.dartsAverage6.pop();
            this.state.dartsAverage6.push(0, 0, 0);
          }
          this.setState({ all3Darts6: [] });
          this.setState({ previousValue6: this.state.currentValue6 });
          this.setState({ player6Throw: false });
          this.setState({ player1Throw: true });
        }
  
        if (this.state.modalVisible20) {
          this.setState({ modalVisible20: false });
        }
        if (this.state.modalVisible19) {
          this.setState({ modalVisible19: false });
        }
        if (this.state.modalVisible18) {
          this.setState({ modalVisible18: false });
        }
        if (this.state.modalVisible17) {
          this.setState({ modalVisible17: false });
        }
        if (this.state.modalVisible16) {
          this.setState({ modalVisible16: false });
        }
        if (this.state.modalVisible15) {
          this.setState({ modalVisible15: false });
        }
        if (this.state.modalVisible14) {
          this.setState({ modalVisible14: false });
        }
        if (this.state.modalVisible13) {
          this.setState({ modalVisible13: false });
        }
        if (this.state.modalVisible12) {
          this.setState({ modalVisible12: false });
        }
        if (this.state.modalVisible11) {
          this.setState({ modalVisible11: false });
        }
        if (this.state.modalVisible10) {
          this.setState({ modalVisible10: false });
        }
        if (this.state.modalVisible9) {
          this.setState({ modalVisible9: false });
        }
        if (this.state.modalVisible8) {
          this.setState({ modalVisible8: false });
        }
        if (this.state.modalVisible7) {
          this.setState({ modalVisible7: false });
        }
        if (this.state.modalVisible6) {
          this.setState({ modalVisible6: false });
        }
        if (this.state.modalVisible5) {
          this.setState({ modalVisible5: false });
        }
        if (this.state.modalVisible4) {
          this.setState({ modalVisible4: false });
        }
        if (this.state.modalVisible3) {
          this.setState({ modalVisible3: false });
        }
        if (this.state.modalVisible2) {
          this.setState({ modalVisible2: false });
        }
        if (this.state.modalVisible1) {
          this.setState({ modalVisible1: false });
        }
  
        if (this.state.currentValue6 <= 40) {
          this.setState({ possibleOutShot6: null });
          this.setState({ showOuts6: false });
        }
        if (type === "double" && this.state.currentValue6 === 0) {
          this.setState({modalVisibleWinner6: true})
          setTimeout(
            function () {
              this.setState({ timePassed: true });
              this.setState({ modalVisibleWinner6: false})
            }.bind(this),
            3000
          );
          if(this.props.route.params.player1StartingScore === 301){
            this.setState({ currentValue: 301 });
          }
          else {
            this.setState({ currentValue: 501 });
          }
          if(this.props.route.params.player2StartingScore === 301){
            this.setState({ currentValue2: 301 });
          }
          else {
            this.setState({ currentValue2: 501 });
          }
          if(this.props.route.params.player3StartingScore === 301){
            this.setState({ currentValue3: 301 });
          }
          else {
            this.setState({ currentValue3: 501 }); 
          }
          if(this.props.route.params.player4StartingScore === 301){
              this.setState({ currentValue4: 301 });
            }
            else {
              this.setState({ currentValue4: 501 }); 
            }
            if(this.props.route.params.player5StartingScore === 301){
              this.setState({ currentValue5: 301 });
            }
            else {
              this.setState({ currentValue5: 501 }); 
            }
            if(this.props.route.params.player6StartingScore === 301){
              this.setState({ currentValue6: 301 });
            }
            else {
              this.setState({ currentValue6: 501 }); 
            }
          this.setState({ legsWon6: parseFloat(this.state.legsWon6) + 1 });
          this.setState({ showOuts: false, showOuts2: false, showOuts3: false, showOuts4: false, showOuts5: false});
          this.setState({ possibleOutShot1: null, possibleOutShot2: null, possibleOutShot3: null, possibleOutShot4: null, possibleOutShot5: null});
          this.setState({ all3Darts6: [] });
          this.state.startingLeg++;

          if (this.state.startingLeg === this.props.route.params.numOfPlayers){
            this.state.startingLeg = 0;
          }

          if (this.state.startingLeg === 0) {
            this.setState({ player1Throw: true });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 1) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: true });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 2) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: true });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 3) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: true });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 4) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: true });
            this.setState({ player6Throw: false });
          }
          if (this.state.startingLeg === 5) {
            this.setState({ player1Throw: false });
            this.setState({ player2Throw: false });
            this.setState({ player3Throw: false });
            this.setState({ player4Throw: false });
            this.setState({ player5Throw: false });
            this.setState({ player6Throw: true });
          }
        }
  
        if (
          this.state.all3Darts6.length === 3 &&
          this.state.all3Darts6[0] +
            this.state.all3Darts6[1] +
            this.state.all3Darts6[2] ===
            180
        ) {
          this.setState({ modalVisible180: true})
          setTimeout(
            function () {
              this.setState({ timePassed: true });
              this.setState({ modalVisible180: false})
            }.bind(this),
            3000
          );
        }
  
        const outs = Object.keys(possibleOuts);
  
        for (let i = 0; i < outs.length; i++) {
          if (parseFloat(outs[i]) === this.state.currentValue6) {
            this.setState({ possibleOutShot6: possibleOuts[outs[i]] });
            this.state.showOuts6 = true;
          }
        }
      }
  };

  // threeDartAverage = () => {
  //   let allDartsAverage = this.state.dartsAverage;
  //   const averages = [];
  //   let sum = 0;

  //   for (let i = 0; i < allDartsAverage.length; i++) {
  //     sum = sum + allDartsAverage[i];
  //     if ((i + 1) % 3 == 0) {
  //       averages.push(sum);
  //       sum = 0;
  //     }
  //   }

  //   const allAverages = averages.reduce((a, b) => a + b, 0) / averages.length;

  //   if (averages.length > 0) {
  //     return allAverages;
  //   }
  //   return 0;
  // };
  // threeDartAverage2 = () => {
  //   let allDartsAverage = this.state.dartsAverage2;
  //   const averages = [];
  //   let sum = 0;

  //   for (let i = 0; i < allDartsAverage.length; i++) {
  //     sum = sum + allDartsAverage[i];
  //     if ((i + 1) % 3 == 0) {
  //       averages.push(sum);
  //       sum = 0;
  //     }
  //   }

  //   const allAverages = averages.reduce((a, b) => a + b, 0) / averages.length;

  //   if (averages.length > 0) {
  //     return allAverages;
  //   }
  //   return 0;
  // };

  ResetGame = () => {
    this.setState(initialState);
    this.setState({ currentValue: "501", currentValue2: "501", currentValue3: "501", currentValue4: "501", currentValue5: "501", 
      currentValue6: "501", dartsAverage: [], dartsAverage2: [], dartsAverage3: [], dartsAverage4: [], dartsAverage5: [], 
      dartsAverage6: [], all3Darts: [], all3Darts2: [], all3Darts3: [], all3Darts4: [], all3Darts5: [], all3Darts6: [], 
      showOuts: false, showOuts2: false, showOuts3: false, showOuts4: false, showOuts5: false, showOuts6: false, startingLeg: 0});
  };

  UndoLastDart = () => {
    if (this.state.player1Throw && !this.state.all3Darts.length && this.props.route.params.numOfPlayers === 6) {
      if (this.state.currentValue6 <= this.props.route.params.player6StartingScore) {
        this.setState({
          currentValue6:
            this.state.currentValue6 +
            parseFloat(this.state.dartsAverage6.slice(-1)),
        });
        this.state.currentValue6 =
          this.state.currentValue6 + this.state.dartsAverage6.pop();
        this.state.all3Darts6.pop();
      }
      if (
        this.state.currentValue6 +
          parseFloat(this.state.dartsAverage6.slice(-1)) >
          170 ||
        this.state.currentValue6 +
          parseFloat(this.state.dartsAverage6.slice(-1)) ===
          159 ||
        this.state.currentValue6 +
          parseFloat(this.state.dartsAverage6.slice(-1)) ===
          162 ||
        this.state.currentValue6 +
          parseFloat(this.state.dartsAverage6.slice(-1)) ===
          163 ||
        this.state.currentValue6 +
          parseFloat(this.state.dartsAverage6.slice(-1)) ===
          165 ||
        this.state.currentValue6 +
          parseFloat(this.state.dartsAverage6.slice(-1)) ===
          166 ||
        this.state.currentValue6 +
          parseFloat(this.state.dartsAverage6.slice(-1)) ===
          168 ||
        this.state.currentValue6 +
          parseFloat(this.state.dartsAverage6.slice(-1)) ===
          169
      ) {
        this.state.showOuts6 = false;
      }
      this.setState({ player1Throw: false });
      this.setState({ player6Throw: true });

      const outs = Object.keys(possibleOuts);

      for (let i = 0; i < outs.length; i++) {
        if (parseFloat(outs[i]) === this.state.currentValue6) {
          this.setState({ possibleOutShot6: possibleOuts[outs[i]] });
          this.state.showOuts6 = true;
        }
      }
    }
    if (this.state.player1Throw && !this.state.all3Darts.length && this.props.route.params.numOfPlayers === 5) {
      if (this.state.currentValue5 <= this.props.route.params.player5StartingScore) {
        this.setState({
          currentValue5:
            this.state.currentValue5 +
            parseFloat(this.state.dartsAverage5.slice(-1)),
        });
        this.state.currentValue5 =
          this.state.currentValue5 + this.state.dartsAverage5.pop();
        this.state.all3Darts5.pop();
      }
      if (
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) >
          170 ||
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) ===
          159 ||
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) ===
          162 ||
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) ===
          163 ||
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) ===
          165 ||
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) ===
          166 ||
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) ===
          168 ||
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) ===
          169
      ) {
        this.state.showOuts5 = false;
      }
      this.setState({ player1Throw: false });
      this.setState({ player5Throw: true });

      const outs = Object.keys(possibleOuts);

      for (let i = 0; i < outs.length; i++) {
        if (parseFloat(outs[i]) === this.state.currentValue5) {
          this.setState({ possibleOutShot5: possibleOuts[outs[i]] });
          this.state.showOuts5 = true;
        }
      }
    }
    if (this.state.player1Throw && !this.state.all3Darts.length && this.props.route.params.numOfPlayers === 4) {
      if (this.state.currentValue4 <= this.props.route.params.player4StartingScore) {
        this.setState({
          currentValue4:
            this.state.currentValue4 +
            parseFloat(this.state.dartsAverage4.slice(-1)),
        });
        this.state.currentValue4 =
          this.state.currentValue4 + this.state.dartsAverage4.pop();
        this.state.all3Darts4.pop();
      }
      if (
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) >
          170 ||
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) ===
          159 ||
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) ===
          162 ||
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) ===
          163 ||
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) ===
          165 ||
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) ===
          166 ||
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) ===
          168 ||
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) ===
          169
      ) {
        this.state.showOuts4 = false;
      }
      this.setState({ player1Throw: false });
      this.setState({ player4Throw: true });

      const outs = Object.keys(possibleOuts);

      for (let i = 0; i < outs.length; i++) {
        if (parseFloat(outs[i]) === this.state.currentValue4) {
          this.setState({ possibleOutShot4: possibleOuts[outs[i]] });
          this.state.showOuts4 = true;
        }
      }
    }
    if (this.state.player1Throw && !this.state.all3Darts.length && this.props.route.params.numOfPlayers === 3) {
      if (this.state.currentValue3 <= this.props.route.params.player3StartingScore) {
        this.setState({
          currentValue3:
            this.state.currentValue3 +
            parseFloat(this.state.dartsAverage3.slice(-1)),
        });
        this.state.currentValue3 =
          this.state.currentValue3 + this.state.dartsAverage3.pop();
        this.state.all3Darts3.pop();
      }
      if (
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) >
          170 ||
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) ===
          159 ||
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) ===
          162 ||
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) ===
          163 ||
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) ===
          165 ||
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) ===
          166 ||
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) ===
          168 ||
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) ===
          169
      ) {
        this.state.showOuts3 = false;
      }
      this.setState({ player1Throw: false });
      this.setState({ player3Throw: true });

      const outs = Object.keys(possibleOuts);

      for (let i = 0; i < outs.length; i++) {
        if (parseFloat(outs[i]) === this.state.currentValue3) {
          this.setState({ possibleOutShot3: possibleOuts[outs[i]] });
          this.state.showOuts3 = true;
        }
      }
    }
    if (this.state.player2Throw && !this.state.all3Darts2.length) {
      if (this.state.currentValue <= this.props.route.params.player1StartingScore) {
        this.setState({
          currentValue:
            this.state.currentValue +
            parseFloat(this.state.dartsAverage.slice(-1)),
        });
        this.state.currentValue =
          this.state.currentValue + this.state.dartsAverage.pop();
        this.state.all3Darts.pop();
      }
      if (
        this.state.currentValue +
          parseFloat(this.state.dartsAverage.slice(-1)) >
          170 ||
        this.state.currentValue +
          parseFloat(this.state.dartsAverage.slice(-1)) ===
          159 ||
        this.state.currentValue +
          parseFloat(this.state.dartsAverage.slice(-1)) ===
          162 ||
        this.state.currentValue +
          parseFloat(this.state.dartsAverage.slice(-1)) ===
          163 ||
        this.state.currentValue +
          parseFloat(this.state.dartsAverage.slice(-1)) ===
          165 ||
        this.state.currentValue +
          parseFloat(this.state.dartsAverage.slice(-1)) ===
          166 ||
        this.state.currentValue +
          parseFloat(this.state.dartsAverage.slice(-1)) ===
          168 ||
        this.state.currentValue +
          parseFloat(this.state.dartsAverage.slice(-1)) ===
          169
      ) {
        this.state.showOuts = false;
      }
      this.setState({ player2Throw: false });
      this.setState({ player1Throw: true });

      const outs = Object.keys(possibleOuts);

      for (let i = 0; i < outs.length; i++) {
        if (parseFloat(outs[i]) === this.state.currentValue) {
          this.setState({ possibleOutShot: possibleOuts[outs[i]] });
          this.state.showOuts = true;
        }
      }
    }
    if (this.state.player3Throw && !this.state.all3Darts3.length) {
      if (this.state.currentValue2 <= this.props.route.params.player2StartingScore) {
        this.setState({
          currentValue2:
            this.state.currentValue2 +
            parseFloat(this.state.dartsAverage2.slice(-1)),
        });
        this.state.currentValue2 =
          this.state.currentValue2 + this.state.dartsAverage2.pop();
        this.state.all3Darts2.pop();
      }
      if (
        this.state.currentValue2 +
          parseFloat(this.state.dartsAverage2.slice(-1)) >
          170 ||
        this.state.currentValue2 +
          parseFloat(this.state.dartsAverage2.slice(-1)) ===
          159 ||
        this.state.currentValue2 +
          parseFloat(this.state.dartsAverage2.slice(-1)) ===
          162 ||
        this.state.currentValue2 +
          parseFloat(this.state.dartsAverage2.slice(-1)) ===
          163 ||
        this.state.currentValue2 +
          parseFloat(this.state.dartsAverage2.slice(-1)) ===
          165 ||
        this.state.currentValue2 +
          parseFloat(this.state.dartsAverage2.slice(-1)) ===
          166 ||
        this.state.currentValue2 +
          parseFloat(this.state.dartsAverage2.slice(-1)) ===
          168 ||
        this.state.currentValue2 +
          parseFloat(this.state.dartsAverage2.slice(-1)) ===
          169
      ) {
        this.state.showOuts2 = false;
      }
      this.setState({ player3Throw: false });
      this.setState({ player2Throw: true });
      

      const outs = Object.keys(possibleOuts);

      for (let i = 0; i < outs.length; i++) {
        if (parseFloat(outs[i]) === this.state.currentValue2) {
          this.setState({ possibleOutShot2: possibleOuts[outs[i]] });
          this.state.showOuts2 = true;
        }
      }
    }
    if (this.state.player4Throw && !this.state.all3Darts4.length) {
      if (this.state.currentValue3 <= this.props.route.params.player3StartingScore) {
        this.setState({
          currentValue3:
            this.state.currentValue3 +
            parseFloat(this.state.dartsAverage3.slice(-1)),
        });
        this.state.currentValue3 =
          this.state.currentValue3 + this.state.dartsAverage3.pop();
        this.state.all3Darts3.pop();
      }
      if (
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) >
          170 ||
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) ===
          159 ||
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) ===
          162 ||
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) ===
          163 ||
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) ===
          165 ||
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) ===
          166 ||
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) ===
          168 ||
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) ===
          169
      ) {
        this.state.showOuts3 = false;
      }
      this.setState({ player4Throw: false });
      this.setState({ player3Throw: true });

      const outs = Object.keys(possibleOuts);

      for (let i = 0; i < outs.length; i++) {
        if (parseFloat(outs[i]) === this.state.currentValue3) {
          this.setState({ possibleOutShot3: possibleOuts[outs[i]] });
          this.state.showOuts3 = true;
        }
      }
    }
    if (this.state.player5Throw && !this.state.all3Darts5.length) {
      if (this.state.currentValue4 <= this.props.route.params.player4StartingScore) {
        this.setState({
          currentValue4:
            this.state.currentValue4 +
            parseFloat(this.state.dartsAverage4.slice(-1)),
        });
        this.state.currentValue4 =
          this.state.currentValue4 + this.state.dartsAverage4.pop();
        this.state.all3Darts4.pop();
      }
      if (
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) >
          170 ||
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) ===
          159 ||
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) ===
          162 ||
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) ===
          163 ||
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) ===
          165 ||
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) ===
          166 ||
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) ===
          168 ||
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) ===
          169
      ) {
        this.state.showOuts4 = false;
      }
      this.setState({ player5Throw: false });
      this.setState({ player4Throw: true });

      const outs = Object.keys(possibleOuts);

      for (let i = 0; i < outs.length; i++) {
        if (parseFloat(outs[i]) === this.state.currentValue4) {
          this.setState({ possibleOutShot4: possibleOuts[outs[i]] });
          this.state.showOuts4 = true;
        }
      }
    }
    if (this.state.player6Throw && !this.state.all3Darts6.length) {
      if (this.state.currentValue5 <= this.props.route.params.player5StartingScore) {
        this.setState({
          currentValue5:
            this.state.currentValue5 +
            parseFloat(this.state.dartsAverage5.slice(-1)),
        });
        this.state.currentValue5 =
          this.state.currentValue5 + this.state.dartsAverage5.pop();
        this.state.all3Darts5.pop();
      }
      if (
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) >
          170 ||
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) ===
          159 ||
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) ===
          162 ||
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) ===
          163 ||
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) ===
          165 ||
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) ===
          166 ||
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) ===
          168 ||
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) ===
          169
      ) {
        this.state.showOuts5 = false;
      }
      this.setState({ player6Throw: false });
      this.setState({ player5Throw: true });

      const outs = Object.keys(possibleOuts);

      for (let i = 0; i < outs.length; i++) {
        if (parseFloat(outs[i]) === this.state.currentValue5) {
          this.setState({ possibleOutShot5: possibleOuts[outs[i]] });
          this.state.showOuts5 = true;
        }
      }
    }
    if (this.state.player1Throw && this.state.all3Darts.length) {
      if (this.state.currentValue <= this.props.route.params.player1StartingScore) {
        this.setState({
          currentValue:
            this.state.currentValue +
            parseFloat(this.state.dartsAverage.slice(-1)),
        });
        this.state.currentValue =
          this.state.currentValue + this.state.dartsAverage.pop();
        this.state.all3Darts.pop();
      }
      if (
        this.state.currentValue +
          parseFloat(this.state.dartsAverage.slice(-1)) >
          170 ||
        this.state.currentValue +
          parseFloat(this.state.dartsAverage.slice(-1)) ===
          159 ||
        this.state.currentValue +
          parseFloat(this.state.dartsAverage.slice(-1)) ===
          162 ||
        this.state.currentValue +
          parseFloat(this.state.dartsAverage.slice(-1)) ===
          163 ||
        this.state.currentValue +
          parseFloat(this.state.dartsAverage.slice(-1)) ===
          165 ||
        this.state.currentValue +
          parseFloat(this.state.dartsAverage.slice(-1)) ===
          166 ||
        this.state.currentValue +
          parseFloat(this.state.dartsAverage.slice(-1)) ===
          168 ||
        this.state.currentValue +
          parseFloat(this.state.dartsAverage.slice(-1)) ===
          169
      ) {
        this.state.showOuts = false;
      }
      const outs = Object.keys(possibleOuts);

      for (let i = 0; i < outs.length; i++) {
        if (parseFloat(outs[i]) === this.state.currentValue) {
          this.setState({ possibleOutShot: possibleOuts[outs[i]] });
          this.state.showOuts = true;
        }
      }
    }
    if (this.state.player2Throw && this.state.all3Darts2.length) {
      if (this.state.currentValue2 <= this.props.route.params.player2StartingScore) {
        this.setState({
          currentValue2:
            this.state.currentValue2 +
            parseFloat(this.state.dartsAverage2.slice(-1)),
        });
        this.state.currentValue2 =
          this.state.currentValue2 + this.state.dartsAverage2.pop();
        this.state.all3Darts2.pop();
      }
      if (
        this.state.currentValue2 +
          parseFloat(this.state.dartsAverage2.slice(-1)) >
          170 ||
        this.state.currentValue2 +
          parseFloat(this.state.dartsAverage2.slice(-1)) ===
          159 ||
        this.state.currentValue2 +
          parseFloat(this.state.dartsAverage2.slice(-1)) ===
          162 ||
        this.state.currentValue2 +
          parseFloat(this.state.dartsAverage2.slice(-1)) ===
          163 ||
        this.state.currentValue2 +
          parseFloat(this.state.dartsAverage2.slice(-1)) ===
          165 ||
        this.state.currentValue2 +
          parseFloat(this.state.dartsAverage2.slice(-1)) ===
          166 ||
        this.state.currentValue2 +
          parseFloat(this.state.dartsAverage2.slice(-1)) ===
          168 ||
        this.state.currentValue2 +
          parseFloat(this.state.dartsAverage2.slice(-1)) ===
          169
      ) {
        this.state.showOuts2 = false;
      }
      const outs = Object.keys(possibleOuts);

      for (let i = 0; i < outs.length; i++) {
        if (parseFloat(outs[i]) === this.state.currentValue2) {
          this.setState({ possibleOutShot2: possibleOuts[outs[i]] });
          this.state.showOuts2 = true;
        }
      }
    }
    if (this.state.player3Throw && this.state.all3Darts3.length) {
      if (this.state.currentValue3 <= this.props.route.params.player3StartingScore) {
        this.setState({
          currentValue3:
            this.state.currentValue3 +
            parseFloat(this.state.dartsAverage3.slice(-1)),
        });
        this.state.currentValue3 =
          this.state.currentValue3 + this.state.dartsAverage3.pop();
        this.state.all3Darts3.pop();
      }
      if (
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) >
          170 ||
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) ===
          159 ||
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) ===
          162 ||
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) ===
          163 ||
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) ===
          165 ||
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) ===
          166 ||
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) ===
          168 ||
        this.state.currentValue3 +
          parseFloat(this.state.dartsAverage3.slice(-1)) ===
          169
      ) {
        this.state.showOuts3 = false;
      }
      const outs = Object.keys(possibleOuts);

      for (let i = 0; i < outs.length; i++) {
        if (parseFloat(outs[i]) === this.state.currentValue3) {
          this.setState({ possibleOutShot3: possibleOuts[outs[i]] });
          this.state.showOuts3 = true;
        }
      }
    }
    if (this.state.player4Throw && this.state.all3Darts4.length) {
      if (this.state.currentValue4 <= this.props.route.params.player4StartingScore) {
        this.setState({
          currentValue4:
            this.state.currentValue4 +
            parseFloat(this.state.dartsAverage4.slice(-1)),
        });
        this.state.currentValue4 =
          this.state.currentValue4 + this.state.dartsAverage4.pop();
        this.state.all3Darts4.pop();
      }
      if (
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) >
          170 ||
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) ===
          159 ||
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) ===
          162 ||
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) ===
          163 ||
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) ===
          165 ||
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) ===
          166 ||
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) ===
          168 ||
        this.state.currentValue4 +
          parseFloat(this.state.dartsAverage4.slice(-1)) ===
          169
      ) {
        this.state.showOuts4 = false;
      }
      const outs = Object.keys(possibleOuts);

      for (let i = 0; i < outs.length; i++) {
        if (parseFloat(outs[i]) === this.state.currentValue4) {
          this.setState({ possibleOutShot4: possibleOuts[outs[i]] });
          this.state.showOuts4 = true;
        }
      }
    }
    if (this.state.player5Throw && this.state.all3Darts5.length) {
      if (this.state.currentValue5 <= this.props.route.params.player5StartingScore) {
        this.setState({
          currentValue5:
            this.state.currentValue5 +
            parseFloat(this.state.dartsAverage5.slice(-1)),
        });
        this.state.currentValue5 =
          this.state.currentValue5 + this.state.dartsAverage5.pop();
        this.state.all3Darts5.pop();
      }
      if (
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) >
          170 ||
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) ===
          159 ||
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) ===
          162 ||
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) ===
          163 ||
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) ===
          165 ||
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) ===
          166 ||
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) ===
          168 ||
        this.state.currentValue5 +
          parseFloat(this.state.dartsAverage5.slice(-1)) ===
          169
      ) {
        this.state.showOuts5 = false;
      }
      const outs = Object.keys(possibleOuts);

      for (let i = 0; i < outs.length; i++) {
        if (parseFloat(outs[i]) === this.state.currentValue5) {
          this.setState({ possibleOutShot5: possibleOuts[outs[i]] });
          this.state.showOuts5 = true;
        }
      }
    }
    if (this.state.player6Throw && this.state.all3Darts6.length) {
      if (this.state.currentValue6 <= this.props.route.params.player6StartingScore) {
        this.setState({
          currentValue6:
            this.state.currentValue6 +
            parseFloat(this.state.dartsAverage6.slice(-1)),
        });
        this.state.currentValue6 =
          this.state.currentValue6 + this.state.dartsAverage6.pop();
        this.state.all3Darts6.pop();
      }
      if (
        this.state.currentValue6 +
          parseFloat(this.state.dartsAverage6.slice(-1)) >
          170 ||
        this.state.currentValue6 +
          parseFloat(this.state.dartsAverage6.slice(-1)) ===
          159 ||
        this.state.currentValue6 +
          parseFloat(this.state.dartsAverage6.slice(-1)) ===
          162 ||
        this.state.currentValue6 +
          parseFloat(this.state.dartsAverage6.slice(-1)) ===
          163 ||
        this.state.currentValue6 +
          parseFloat(this.state.dartsAverage6.slice(-1)) ===
          165 ||
        this.state.currentValue6 +
          parseFloat(this.state.dartsAverage6.slice(-1)) ===
          166 ||
        this.state.currentValue6 +
          parseFloat(this.state.dartsAverage6.slice(-1)) ===
          168 ||
        this.state.currentValue6 +
          parseFloat(this.state.dartsAverage6.slice(-1)) ===
          169
      ) {
        this.state.showOuts6 = false;
      }
      const outs = Object.keys(possibleOuts);

      for (let i = 0; i < outs.length; i++) {
        if (parseFloat(outs[i]) === this.state.currentValue6) {
          this.setState({ possibleOutShot6: possibleOuts[outs[i]] });
          this.state.showOuts6 = true;
        }
      }
    }
  };
  player1Text = () => {
    if (this.state.player1Throw) {
      return {
        color: "#fff",
        fontSize: 16,
        fontWeight: "900",
        textAlign: "center",
        marginBottom: 10,
      };
    }
    return {
      color: "#fff",
      fontSize: 16,
      textAlign: "center",
      marginBottom: 10,
    };
  };
  player2Text = () => {
    if (this.state.player2Throw) {
      return {
        color: "#fff",
        fontSize: 16,
        fontWeight: "900",
        textAlign: "center",
        marginBottom: 10,
      };
    }
    return {
      color: "#fff",
      fontSize: 16,
      textAlign: "center",
      marginBottom: 10,
    };
  };
  player3Text = () => {
    if (this.state.player3Throw) {
      return {
        color: "#fff",
        fontSize: 16,
        fontWeight: "900",
        textAlign: "center",
        marginBottom: 10,
      };
    }
    return {
      color: "#fff",
      fontSize: 16,
      textAlign: "center",
      marginBottom: 10,
    };
  };
  player4Text = () => {
    if (this.state.player4Throw) {
      return {
        color: "#fff",
        fontSize: 16,
        fontWeight: "900",
        textAlign: "center",
        marginBottom: 10,
      };
    }
    return {
      color: "#fff",
      fontSize: 16,
      textAlign: "center",
      marginBottom: 10,
    };
  };
  player5Text = () => {
    if (this.state.player5Throw) {
      return {
        color: "#fff",
        fontSize: 16,
        fontWeight: "900",
        textAlign: "center",
        marginBottom: 10,
      };
    }
    return {
      color: "#fff",
      fontSize: 16,
      textAlign: "center",
      marginBottom: 10,
    };
  };
  player6Text = () => {
    if (this.state.player6Throw) {
      return {
        color: "#fff",
        fontSize: 16,
        fontWeight: "900",
        textAlign: "center",
        marginBottom: 10,
      };
    }
    return {
      color: "#fff",
      fontSize: 16,
      textAlign: "center",
      marginBottom: 10,
    };
  };
  
  render() {
    
    if(this.props.route.params.player1StartingScore === 301 && this.state.currentValue === "501"){
      this.state.currentValue -= 200
    }
    if(this.props.route.params.player2StartingScore === 301 && this.state.currentValue2 === "501"){
      this.state.currentValue2 -= 200
    }
    if(this.props.route.params.player3StartingScore === 301 && this.state.currentValue3 === "501"){
      this.state.currentValue3 -= 200
    }
    if(this.props.route.params.player4StartingScore === 301 && this.state.currentValue4 === "501"){
      this.state.currentValue4 -= 200
    }
    if(this.props.route.params.player5StartingScore === 301 && this.state.currentValue5 === "501"){
      this.state.currentValue5 -= 200
    }
    if(this.props.route.params.player6StartingScore === 301 && this.state.currentValue6 === "501"){
      this.state.currentValue6 -= 200
    }

    return (
      <View style={styles.container}>
        <SafeAreaView>
          {this.state.player1Throw && (
            <Text style={styles.player1Text}>{this.props.route.params.player1Name}'s Throw</Text>
          )}
          {this.state.player2Throw && (
            <Text style={styles.player2Text}>{this.props.route.params.player2Name}'s Throw</Text>
          )}
          {this.state.player3Throw && (
            <Text style={styles.player2Text}>{this.props.route.params.player3Name}'s Throw</Text>
          )}
          {this.state.player4Throw && (
            <Text style={styles.player2Text}>{this.props.route.params.player4Name}'s Throw</Text>
          )}
          {this.state.player5Throw && (
            <Text style={styles.player2Text}>{this.props.route.params.player5Name}'s Throw</Text>
          )}
          {this.state.player6Throw && (
            <Text style={styles.player2Text}>{this.props.route.params.player6Name}'s Throw</Text>
          )}
          <Row>
            <View style={styles.columns}>
              <Text style={styles.value}> </Text>
              <Text style={styles.value}>Score:</Text>
              <Text style={styles.value}>Legs Won:</Text>
              <Text style={styles.value}> </Text>
              <Text style={styles.value}>Score:</Text>
              <Text style={styles.value}>Legs Won:</Text>
            </View>
            <View style={styles.columns2}>
              <Text style={this.player1Text()}>{this.props.route.params.player1Name}</Text>
              <Text style={this.player1Text()}>
                {parseFloat(this.state.currentValue).toLocaleString()}
              </Text>
              <Text style={this.player1Text()}>
                {parseFloat(this.state.legsWon).toLocaleString()}
              </Text>
              <Text style={this.player2Text()}>{this.props.route.params.player2Name}</Text>
              <Text style={this.player2Text()}>
                {parseFloat(this.state.currentValue2).toLocaleString()}
              </Text>
              <Text style={this.player2Text()}>
                {parseFloat(this.state.legsWon2).toLocaleString()}
              </Text>
            </View>
              {this.props.route.params.numOfPlayers > 3 ?
              <View style={styles.columns3}>
                <Text style={this.player3Text()}>{this.props.route.params.player3Name}</Text>
              <Text style={this.player3Text()}>
                {parseFloat(this.state.currentValue3).toLocaleString()}
              </Text>
              <Text style={this.player3Text()}>
                {parseFloat(this.state.legsWon3).toLocaleString()}
              </Text>
              <Text style={this.player4Text()}>{this.props.route.params.player4Name}</Text>
              <Text style={this.player4Text()}>
                {parseFloat(this.state.currentValue4).toLocaleString()}
              </Text>
              <Text style={this.player4Text()}>
                {parseFloat(this.state.legsWon4).toLocaleString()}
              </Text> 
              </View>
             : <View style={styles.columns3}>
             <Text style={this.player3Text()}>{this.props.route.params.player3Name}</Text>
             <Text style={this.player3Text()}>
               {parseFloat(this.state.currentValue3).toLocaleString()}
             </Text>
             <Text style={this.player3Text()}>
               {parseFloat(this.state.legsWon3).toLocaleString()}
             </Text>
            </View>
             }
              {this.props.route.params.numOfPlayers === 5 &&
            <View style={styles.columns3}>
              <Text style={this.player5Text()}>{this.props.route.params.player5Name}</Text>
              <Text style={this.player5Text()}>
                {parseFloat(this.state.currentValue5).toLocaleString()}
              </Text>
              <Text style={this.player5Text()}>
                {parseFloat(this.state.legsWon5).toLocaleString()}
              </Text>
              </View>
              }
              {this.props.route.params.numOfPlayers > 5 && 
              <View style={styles.columns3}>
                <Text style={this.player5Text()}>{this.props.route.params.player5Name}</Text>
              <Text style={this.player5Text()}>
                {parseFloat(this.state.currentValue5).toLocaleString()}
              </Text>
              <Text style={this.player5Text()}>
                {parseFloat(this.state.legsWon5).toLocaleString()}
              </Text>
              <Text style={this.player6Text()}>{this.props.route.params.player6Name}</Text>
              <Text style={this.player6Text()}>
                {parseFloat(this.state.currentValue6).toLocaleString()}
              </Text>
              <Text style={this.player6Text()}>
                {parseFloat(this.state.legsWon6).toLocaleString()}
              </Text>
            </View>
              }
          </Row>
          {(this.state.showOuts && this.state.player1Throw) ? (
            <Text style={styles.outText}>
              {this.props.route.params.player1Name}'s Possible Out:{" "}{this.state.possibleOutShot}
            </Text>
          ) : null}
          {(this.state.showOuts2 && this.state.player2Throw) ? (
            <Text style={styles.outText}>
              {this.props.route.params.player2Name}'s Possible Out:{" "}{this.state.possibleOutShot2}
            </Text>
          ): null}
          {(this.state.showOuts3 && this.state.player3Throw) ? (
            <Text style={styles.outText}>
              {this.props.route.params.player3Name}'s Possible Out:{" "}{this.state.possibleOutShot3}
            </Text>
          ): null}
          {(this.state.showOuts4 && this.state.player4Throw) ? (
            <Text style={styles.outText}>
              {this.props.route.params.player4Name}'s Possible Out:{" "}{this.state.possibleOutShot4}
            </Text>
          ): null}
          {(this.state.showOuts5 && this.state.player5Throw) ? (
            <Text style={styles.outText}>
              {this.props.route.params.player5Name}'s Possible Out:{" "}{this.state.possibleOutShot5}
            </Text>
          ): null}
          {(this.state.showOuts6 && this.state.player6Throw) ? (
            <Text style={styles.outText}>
              {this.props.route.params.player6Name}'s Possible Out:{" "}{this.state.possibleOutShot6}
            </Text>
          ): null}
          {this.state.all3Darts.length && this.state.player1Throw ? (
            <Text style={styles.threeDarts}>
              {this.state.all3Darts[0]}{" "}{" "}{this.state.all3Darts[1]}{" "}{" "}
              {this.state.all3Darts[2]}
            </Text>
          ): null}
          {this.state.all3Darts2.length && this.state.player2Throw ? (
            <Text style={styles.threeDarts}>
              {this.state.all3Darts2[0]}{" "}{" "}{this.state.all3Darts2[1]}{" "}{" "}
              {this.state.all3Darts2[2]}
            </Text>
          ) : null}
          {this.state.all3Darts3.length && this.state.player3Throw ? (
            <Text style={styles.threeDarts}>
              {this.state.all3Darts3[0]}{" "}{" "}{this.state.all3Darts3[1]}{" "}{" "}
              {this.state.all3Darts3[2]}
            </Text>
          ) : null}
          {this.state.all3Darts4.length && this.state.player4Throw ? (
            <Text style={styles.threeDarts}>
              {this.state.all3Darts4[0]}{" "}{" "}{this.state.all3Darts4[1]}{" "}{" "}
              {this.state.all3Darts4[2]}
            </Text>
          ) : null}
          {this.state.all3Darts5.length && this.state.player5Throw ? (
            <Text style={styles.threeDarts}>
              {this.state.all3Darts5[0]}{" "}{" "}{this.state.all3Darts5[1]}{" "}{" "}
              {this.state.all3Darts5[2]}
            </Text>
          ) : null}
          {this.state.all3Darts6.length && this.state.player6Throw ? (
            <Text style={styles.threeDarts}>
              {this.state.all3Darts6[0]}{" "}{" "}{this.state.all3Darts6[1]}{" "}{" "}
              {this.state.all3Darts6[2]}
            </Text>
          ) : null}
          {this.state.modalVisible180 && 
            <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible180}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisible180: false });
                }}
              >
            <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                  <Text style={styles.modalText}>!!!180!!!</Text>
                  </View>
                  </View>

            </Modal>
            </View>
          }
          {this.state.modalVisibleWinner1 && 
            <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisibleWinner1}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisibleWinner1: false });
                }}
              >
            <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                  <Text style={styles.modalText}>{this.props.route.params.player1Name} WINS THE LEG!!</Text>
                  </View>
                  </View>

            </Modal>
            </View>
          }
          {this.state.modalVisibleWinner2 && 
            <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisibleWinner2}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisibleWinner2: false });
                }}
              >
            <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                  <Text style={styles.modalText}>{this.props.route.params.player2Name} WINS THE LEG!!</Text>
                  </View>
                  </View>
            </Modal>
            </View>
          }
           {this.state.modalVisibleWinner3 && 
            <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisibleWinner3}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisibleWinner3: false });
                }}
              >
            <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                  <Text style={styles.modalText}>{this.props.route.params.player3Name} WINS THE LEG!!</Text>
                  </View>
                  </View>
            </Modal>
            </View>
          }
           {this.state.modalVisibleWinner4 && 
            <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisibleWinner4}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisibleWinner4: false });
                }}
              >
            <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                  <Text style={styles.modalText}>{this.props.route.params.player4Name} WINS THE LEG!!</Text>
                  </View>
                  </View>
            </Modal>
            </View>
          }
           {this.state.modalVisibleWinner5 && 
            <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisibleWinner5}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisibleWinner5: false });
                }}
              >
            <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                  <Text style={styles.modalText}>{this.props.route.params.player5Name} WINS THE LEG!!</Text>
                  </View>
                  </View>
            </Modal>
            </View>
          }
           {this.state.modalVisibleWinner6 && 
            <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisibleWinner6}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisibleWinner6: false });
                }}
              >
            <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                  <Text style={styles.modalText}>{this.props.route.params.player6Name} WINS THE LEG!!</Text>
                  </View>
                  </View>
            </Modal>
            </View>
          }
          <Row>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible20}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisible20: false });
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
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
                      onPress={() => this.HandleTap("number", 20)}
                    >
                      <Text style={styles.textStyle}>Single 20</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "red",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("double", 40)}
                    >
                      <Text style={styles.textStyle}>Double 20</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "darkred",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 60)}
                    >
                      <Text style={styles.textStyle}>Treble 20</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "red",
                    borderRadius: 20,
                    padding: 9,
                    elevation: 0,
                  },
                ]}
                onPress={() => this.setState({ modalVisible20: true })}
              >
                <Text style={styles.textStyle}>20/D20/T20</Text>
              </Pressable>
            </View>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible19}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisible19: false });
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "#F0E68C",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 19)}
                    >
                      <Text style={styles.textStyle}>Single 19</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "lime",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("double", 38)}
                    >
                      <Text style={styles.textStyle}>Double 19</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "green",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 57)}
                    >
                      <Text style={styles.textStyle}>Treble 19</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "green",
                    borderRadius: 20,
                    padding: 9,
                    elevation: 0,
                  },
                ]}
                onPress={() => this.setState({ modalVisible19: true })}
              >
                <Text style={styles.textStyle}>19/D19/T19</Text>
              </Pressable>
            </View>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible18}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisible18: false });
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
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
                      onPress={() => this.HandleTap("number", 18)}
                    >
                      <Text style={styles.textStyle}>Single 18</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "red",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("double", 36)}
                    >
                      <Text style={styles.textStyle}>Double 18</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "darkred",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 54)}
                    >
                      <Text style={styles.textStyle}>Treble 18</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "red",
                    borderRadius: 20,
                    padding: 9,
                    elevation: 0,
                  },
                ]}
                onPress={() => this.setState({ modalVisible18: true })}
              >
                <Text style={styles.textStyle}>18/D18/T18</Text>
              </Pressable>
            </View>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible17}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisible17: false });
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "#F0E68C",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 17)}
                    >
                      <Text style={styles.textStyle}>Single 17</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "lime",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("double", 34)}
                    >
                      <Text style={styles.textStyle}>Double 17</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "green",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 51)}
                    >
                      <Text style={styles.textStyle}>Treble 17</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "green",
                    borderRadius: 20,
                    padding: 9,
                    elevation: 0,
                  },
                ]}
                onPress={() => this.setState({ modalVisible17: true })}
              >
                <Text style={styles.textStyle}>17/D17/T17</Text>
              </Pressable>
            </View>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible16}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisible16: false });
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "#F0E68C",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 16)}
                    >
                      <Text style={styles.textStyle}>Single 16</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "lime",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("double", 32)}
                    >
                      <Text style={styles.textStyle}>Double 16</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "green",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 48)}
                    >
                      <Text style={styles.textStyle}>Treble 16</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "green",
                    borderRadius: 20,
                    padding: 9,
                    elevation: 0,
                  },
                ]}
                onPress={() => this.setState({ modalVisible16: true })}
              >
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
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisible15: false });
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "#F0E68C",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 15)}
                    >
                      <Text style={styles.textStyle}>Single 15</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "lime",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("double", 30)}
                    >
                      <Text style={styles.textStyle}>Double 15</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "green",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 45)}
                    >
                      <Text style={styles.textStyle}>Treble 15</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "green",
                    borderRadius: 20,
                    padding: 9,
                    elevation: 0,
                  },
                ]}
                onPress={() => this.setState({ modalVisible15: true })}
              >
                <Text style={styles.textStyle}>15/D15/T15</Text>
              </Pressable>
            </View>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible14}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisible14: false });
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
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
                      onPress={() => this.HandleTap("number", 14)}
                    >
                      <Text style={styles.textStyle}>Single 14</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "red",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("double", 28)}
                    >
                      <Text style={styles.textStyle}>Double 14</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "darkred",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 42)}
                    >
                      <Text style={styles.textStyle}>Treble 14</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "red",
                    borderRadius: 20,
                    padding: 9,
                    elevation: 0,
                  },
                ]}
                onPress={() => this.setState({ modalVisible14: true })}
              >
                <Text style={styles.textStyle}>14/D14/T14</Text>
              </Pressable>
            </View>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible13}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisible13: false });
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
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
                      onPress={() => this.HandleTap("number", 13)}
                    >
                      <Text style={styles.textStyle}>Single 13</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "red",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("double", 26)}
                    >
                      <Text style={styles.textStyle}>Double 13</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "darkred",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 39)}
                    >
                      <Text style={styles.textStyle}>Treble 13</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "red",
                    borderRadius: 20,
                    padding: 9,
                    elevation: 0,
                  },
                ]}
                onPress={() => this.setState({ modalVisible13: true })}
              >
                <Text style={styles.textStyle}>13/D13/T13</Text>
              </Pressable>
            </View>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible12}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisible12: false });
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
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
                      onPress={() => this.HandleTap("number", 12)}
                    >
                      <Text style={styles.textStyle}>Single 12</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "red",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("double", 24)}
                    >
                      <Text style={styles.textStyle}>Double 12</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "darkred",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 36)}
                    >
                      <Text style={styles.textStyle}>Treble 12</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "red",
                    borderRadius: 20,
                    padding: 9,
                    elevation: 0,
                  },
                ]}
                onPress={() => this.setState({ modalVisible12: true })}
              >
                <Text style={styles.textStyle}>12/D12/T12</Text>
              </Pressable>
            </View>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible11}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisible11: false });
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "#F0E68C",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 11)}
                    >
                      <Text style={styles.textStyle}>Single 11</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "lime",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("double", 22)}
                    >
                      <Text style={styles.textStyle}>Double 11</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "green",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 33)}
                    >
                      <Text style={styles.textStyle}>Treble 11</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "green",
                    borderRadius: 20,
                    padding: 9,
                    elevation: 0,
                  },
                ]}
                onPress={() => this.setState({ modalVisible11: true })}
              >
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
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisible10: false });
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
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
                      onPress={() => this.HandleTap("number", 10)}
                    >
                      <Text style={styles.textStyle}>Single 10</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "red",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("double", 20)}
                    >
                      <Text style={styles.textStyle}>Double 10</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "darkred",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 30)}
                    >
                      <Text style={styles.textStyle}>Treble 10</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "red",
                    borderRadius: 20,
                    padding: 9,
                    elevation: 0,
                  },
                ]}
                onPress={() => this.setState({ modalVisible10: true })}
              >
                <Text style={styles.textStyle}>10/D10/T10</Text>
              </Pressable>
            </View>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible9}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisible9: false });
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "#F0E68C",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 9)}
                    >
                      <Text style={styles.textStyle}>Single 9</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "lime",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("double", 18)}
                    >
                      <Text style={styles.textStyle}>Double 9</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "green",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 27)}
                    >
                      <Text style={styles.textStyle}>Treble 9</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "green",
                    borderRadius: 20,
                    padding: 9,
                    elevation: 0,
                  },
                ]}
                onPress={() => this.setState({ modalVisible9: true })}
              >
                <Text style={styles.textStyle}>9/D9/T9</Text>
              </Pressable>
            </View>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible8}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisible8: false });
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
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
                      onPress={() => this.HandleTap("number", 8)}
                    >
                      <Text style={styles.textStyle}>Single 8</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "red",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("double", 16)}
                    >
                      <Text style={styles.textStyle}>Double 8</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "darkred",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 24)}
                    >
                      <Text style={styles.textStyle}>Treble 8</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "red",
                    borderRadius: 20,
                    padding: 9,
                    elevation: 0,
                  },
                ]}
                onPress={() => this.setState({ modalVisible8: true })}
              >
                <Text style={styles.textStyle}>8/D8/T8</Text>
              </Pressable>
            </View>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible7}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisible7: false });
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
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
                      onPress={() => this.HandleTap("number", 7)}
                    >
                      <Text style={styles.textStyle}>Single 7</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "red",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("double", 14)}
                    >
                      <Text style={styles.textStyle}>Double 7</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "darkred",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 21)}
                    >
                      <Text style={styles.textStyle}>Treble 7</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "red",
                    borderRadius: 20,
                    padding: 9,
                    elevation: 0,
                  },
                ]}
                onPress={() => this.setState({ modalVisible7: true })}
              >
                <Text style={styles.textStyle}>7/D7/T7</Text>
              </Pressable>
            </View>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible6}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisible6: false });
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "#F0E68C",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 6)}
                    >
                      <Text style={styles.textStyle}>Single 6</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "lime",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("double", 12)}
                    >
                      <Text style={styles.textStyle}>Double 6</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "green",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 18)}
                    >
                      <Text style={styles.textStyle}>Treble 6</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "green",
                    borderRadius: 20,
                    padding: 9,
                    elevation: 0,
                  },
                ]}
                onPress={() => this.setState({ modalVisible6: true })}
              >
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
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisible5: false });
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "#F0E68C",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 5)}
                    >
                      <Text style={styles.textStyle}>Single 5</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "lime",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("double", 10)}
                    >
                      <Text style={styles.textStyle}>Double 5</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "green",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 15)}
                    >
                      <Text style={styles.textStyle}>Treble 5</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "green",
                    borderRadius: 20,
                    padding: 9,
                    elevation: 0,
                  },
                ]}
                onPress={() => this.setState({ modalVisible5: true })}
              >
                <Text style={styles.textStyle}>5/D5/T5</Text>
              </Pressable>
            </View>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible4}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisible4: false });
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "#F0E68C",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 4)}
                    >
                      <Text style={styles.textStyle}>Single 4</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "lime",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("double", 8)}
                    >
                      <Text style={styles.textStyle}>Double 4</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "green",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 12)}
                    >
                      <Text style={styles.textStyle}>Treble 4</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "green",
                    borderRadius: 20,
                    padding: 9,
                    elevation: 0,
                  },
                ]}
                onPress={() => this.setState({ modalVisible4: true })}
              >
                <Text style={styles.textStyle}>4/D4/T4</Text>
              </Pressable>
            </View>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible3}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisible3: false });
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
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
                      onPress={() => this.HandleTap("number", 3)}
                    >
                      <Text style={styles.textStyle}>Single 3</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "red",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("double", 6)}
                    >
                      <Text style={styles.textStyle}>Double 3</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "darkred",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 9)}
                    >
                      <Text style={styles.textStyle}>Treble 3</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "red",
                    borderRadius: 20,
                    padding: 9,
                    elevation: 0,
                  },
                ]}
                onPress={() => this.setState({ modalVisible3: true })}
              >
                <Text style={styles.textStyle}>3/D3/T3</Text>
              </Pressable>
            </View>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible2}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisible2: false });
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
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
                      onPress={() => this.HandleTap("number", 2)}
                    >
                      <Text style={styles.textStyle}>Single 2</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "red",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("double", 4)}
                    >
                      <Text style={styles.textStyle}>Double 2</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "darkred",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 6)}
                    >
                      <Text style={styles.textStyle}>Treble 2</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "red",
                    borderRadius: 20,
                    padding: 9,
                    elevation: 0,
                  },
                ]}
                onPress={() => this.setState({ modalVisible2: true })}
              >
                <Text style={styles.textStyle}>2/D2/T2</Text>
              </Pressable>
            </View>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible1}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setState({ modalVisible1: false });
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "#F0E68C",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 1)}
                    >
                      <Text style={styles.textStyle}>Single 1</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "lime",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("double", 2)}
                    >
                      <Text style={styles.textStyle}>Double 1</Text>
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? "rgb(210, 230, 255)"
                            : "green",
                          borderRadius: 20,
                          padding: 9,
                          elevation: 0,
                          marginBottom: 10,
                        },
                      ]}
                      onPress={() => this.HandleTap("number", 3)}
                    >
                      <Text style={styles.textStyle}>Treble 1</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "green",
                    borderRadius: 20,
                    padding: 9,
                    elevation: 0,
                  },
                ]}
                onPress={() => this.setState({ modalVisible1: true })}
              >
                <Text style={styles.textStyle}>1/D1/T1</Text>
              </Pressable>
            </View>
          </Row>
          <Row>
            <Button text="25" onPress={() => this.HandleTap("number", 25)} />
            <Button text="BULL" onPress={() => this.HandleTap("double", 50)} />
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
  columns: {
    alignItems: "left",
    marginLeft: 30,
  },
  columns2: {
    alignItems: "center",
    marginLeft: 35,
  },
  columns3: {
    alignItems: "center",
    marginLeft: 65,
  },
  value: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  player1Text: {
    color: "red",
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 30,
  },
  player2Text: {
    color: "red",
    fontSize: 26,
    textAlign: "center",
    marginBottom: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  outText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 3,
    marginLeft: 20,
    marginRight: 20,
  },
  modalText: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
  },
  threeDarts: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 32,
  },
});
