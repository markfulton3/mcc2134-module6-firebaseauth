import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Input, Button} from '@rneui/themed';
import auth from '../lib/firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    console.log('login');

    const register = () => {
      console.log("registering");
      console.log(email);
      navigation.navigate('Register');
    }

    const reset = () => {
      console.log("reset");
      setEmail('');
      setPassword('');
    }

    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate('Home');
      } else {
        // not logged in
      }
    })

    const login = (email,password, nav) => {
      console.log(email);
      console.log(password);
      // login to firebase
      console.log(JSON.stringify(auth));
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("SUCCESS:" + JSON.stringify(user));
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("ERROR:" + error.message);
          });

    }

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>This requires a registered user to use this part of the app.  Please login below.</Text>
        <Input
            placeholder='Enter your email'
            label='Email'
            leftIcon={{ type: 'material', name: 'email' }}
            autoCapitalize = 'none'
            value={email}
            onChangeText={text => setEmail(text)}
        />
        <Input
            placeholder='Enter your password'
            label='Password'
            leftIcon={{ type: 'material', name: 'lock' }}
            autoCapitalize = 'none'
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
        />
        <Button title="sign in" style={styles.button} onPress={() => login(email, password, navigation)} />
        <View>
          <Text style={styles.link} onPress={register}>Don't have a login?  Register now!</Text>
          <Text style={styles.link} onPress={reset}>Forgot your login?  Reset your password.</Text>
        </View>
      </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
      fontSize: 16,
      color: '#999',
      marginBottom: 40
    },
    button: {
        width: 250,
        marginTop: 20,
        marginBottom: 20
    },
    link: {
      fontSize: 16,
      marginBottom: 15,
      color: '#666',
    },
  });