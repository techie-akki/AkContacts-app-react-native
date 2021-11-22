import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import {LOGIN} from '../../constants/routeNames';
import Input from '../../components/common/Input';
import styles from './styles';
import {Formik} from 'formik';
import * as yup from 'yup';

const validateSchema = yup.object({
  Username: yup.string().required().min(6),
  FirstName: yup.string().required().min(3),
  LastName: yup.string().required().min(3),
  email: yup.string().email('Invalide email!').required(),
  password: yup.string().required().min(8),
});

const RegisterComponent = () => {
  const {navigate} = useNavigation();
  const userInfo = {
    Username: '',
    FirstName: '',
    LastName: '',
    email: '',
    password: '',
  };

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

        <View>
          <Formik
            initialValues={userInfo} //fields & initial value of the fields
            validationSchema={validateSchema}
            onSubmit={(values, actions) => {
              actions.resetForm();
              //addReview(values);
            }}>
            {props => (
              <View style={styles.form}>
                <Input
                  label="Username"
                  iconPosition="right"
                  placeholder="Enter Username"
                  onChangeText={props.handleChange('Username')}
                  value={props.values.Username}
                  onBlur={props.handleBlur('Username')}
                  error={props.touched.Username && props.errors.Username}
                />
                <Input
                  label="First Name"
                  iconPosition="right"
                  placeholder="Enter First Name"
                  onChangeText={props.handleChange('FirstName')}
                  value={props.values.FirstName}
                  onBlur={props.handleBlur('FirstName')}
                  error={props.touched.FirstName && props.errors.FirstName}
                />
                <Input
                  label="Last Name"
                  iconPosition="right"
                  placeholder="Enter Last Name"
                  onChangeText={props.handleChange('LastName')}
                  value={props.values.LastName}
                  onBlur={props.handleBlur('LastName')}
                  error={props.touched.LastName && props.errors.LastName}
                />
                <Input
                  label="Email"
                  iconPosition="right"
                  placeholder="Enter Email"
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                  onBlur={props.handleBlur('email')}
                  error={props.touched.email && props.errors.email}
                />
                <Input
                  label="Password"
                  placeholder="Enter Password"
                  secureTextEntry={true}
                  icon={<Text>Show</Text>}
                  iconPosition="right"
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                  onBlur={props.handleBlur('password')}
                  error={props.touched.password && props.errors.password}
                />
                <CustomButton
                  onPress={props.handleSubmit}
                  title="Submit"
                  primary
                />
              </View>
            )}
          </Formik>
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
