import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import {LOGIN} from '../../constants/routeNames';
import Input from '../../components/common/Input';
import styles from './styles';

const RegisterComponent = ({onSubmit, onChange, form, error, errors}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo1.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to AkContacts</Text>
        <Text style={styles.subTitle}>Create an Account</Text>

        <View form style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
            error={errors.userName}
          />
          <Input
            label="First Name"
            iconPosition="right"
            placeholder="Enter First Name"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName}
          />
          <Input
            label="Last Name"
            iconPosition="right"
            placeholder="Enter Last Name"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName}
          />
          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={errors.email}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password}
          />
          <CustomButton onPress={onSubmit} title="Submit" primary />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an Account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
