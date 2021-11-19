import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import {REGISTER} from '../../constants/routeNames';
import Input from '../../components/common/Input';
import styles from './styles';

const LoginComponent = () => {
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
        <Text style={styles.subTitle}>Please Login Here!</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"

            //error={'This field is required'}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
          />
          <CustomButton title="Submit" primary />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new Account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
