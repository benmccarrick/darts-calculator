import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';

const MultiPlayer = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Multi Player</Text>
            <Button
      title="Submit"
      onPress={() => {navigation.navigate("Multiplayer Game Player 2")}}/>
        </View>
    );
};

export default MultiPlayer;