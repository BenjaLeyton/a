import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function App() {
  return (
    <StyledView className="flex-1 justify-center items-center">
      <StyledText>Hello PAPAFAM 123</StyledText>
      <StatusBar style="auto" />
    </StyledView>
  );
}
