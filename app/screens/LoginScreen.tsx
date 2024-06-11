import React from 'react';
import { View, Text } from 'react-native';
import useAuth from '../../hooks/useAuth';

const LoginScreen = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <View>
      <Text>Login to the app</Text>
      {user ? <Text>Welcome, {user.name}</Text> : <Text>Please log in</Text>}
    </View>
  );
};

export default LoginScreen;
