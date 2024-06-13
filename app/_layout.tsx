import React from 'react';
import { Stack } from 'expo-router';
import { AuthProvider } from '../hooks/useAuth';
import 'tailwindcss/tailwind.css';

export default function RootLayout() {
  return (
    <AuthProvider children={undefined}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="chat" options={{ title: 'Chat' }} />
        <Stack.Screen name="login" options={{ title: 'Login' }} />
      </Stack>
    </AuthProvider>
  );
}
