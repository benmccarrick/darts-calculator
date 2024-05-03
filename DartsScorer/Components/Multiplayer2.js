import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';

const MultiPlayer2 = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Multi Player</Text>
            <Button
      title="Submit"
      onPress={() => {navigation.navigate("Multiplayer Game Player 1")}}/>
        </View>
    );
}

export default MultiPlayer2;