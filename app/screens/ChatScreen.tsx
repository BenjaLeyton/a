// screens/ChatScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { styled } from "nativewind";

const StyledView = styled(View);

const ChatScreen = () => {
  return (
    <StyledView className="flex-1 justify-center items-center">
      <Text>Pantalla de chat</Text>
    </StyledView>
  );
}

export default ChatScreen;
