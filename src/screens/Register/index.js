import React, {useState} from 'react';
import RegisterComponent from '../../components/SignUp';
import envs from '../../config/env';

const Register = () => {
  const {DEV_BACKEND_URL} = envs;

  console.log('DEV_BACKEND_URLL :>> ', DEV_BACKEND_URL);
  console.log('__DEV__', __DEV__);

  return <RegisterComponent />;
};

export default Register;
