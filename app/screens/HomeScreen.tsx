import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { styled } from "nativewind";
import { RootStackParamList } from '../types'; // Adjust the import path as needed

const StyledView = styled(View);

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <StyledView className="flex-1 justify-center items-center">
      <Text>Pantalla de inicio</Text>
      <Button title="Go to Chat" onPress={() => navigation.navigate('chat')} />
      <Button title="Go to Login" onPress={() => navigation.navigate('login')} />
    </StyledView>
  );
}

export default HomeScreen;
