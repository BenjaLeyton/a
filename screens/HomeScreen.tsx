// screens/HomeScreen.tsx
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styled } from "nativewind";

const StyledView = styled(View);

const HomeScreen = () => {
  return (
    <StyledView className="flex-1 justify-center items-center">
      <Text>Pantalla de inicio</Text>
    </StyledView>
  );
}

export default HomeScreen;
