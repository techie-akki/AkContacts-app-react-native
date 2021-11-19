import React, {useState} from 'react';
import {Text, View} from 'react-native';
import LoginComponent from '../../components/Login';

const Login = () => {
  const [text, onChangeText] = useState('');
  return <LoginComponent />;
};

export default Login;
