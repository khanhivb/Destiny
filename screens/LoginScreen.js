// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add logic for login
    if (username && password) {
      navigation.replace('Home');
    } else {
      alert('Please enter valid username and password');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <View>
        <Image source={require('../assets/marry.png')} style={styles.img} />
      </View>
      <View style={styles.content}>
      <Text style={styles.title}>Đăng Nhập</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={{color: 'black',textAlign: 'right', fontWeight: 'bold', fontSize: 12, padding: 10,}}>Quên mật khẩu?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_LoginScreen} onPress={handleLogin}>
        <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 14}}>Đăng Nhập</Text>
      </TouchableOpacity>
      <View style={styles.text}>
        <Text style={{fontWeight: 'bold'}}>Bạn chưa có tài khoản?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={{color: 'rgb(127, 204, 199)', fontWeight: 'bold', fontSize: 14}}> Đăng ký ngay</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white'},
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20, fontWeight: 'bold' },
  content: {padding: 20 },
  input: { height: 40, borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 10, 
    paddingLeft: 10, 
    borderColor:'rgb(204, 213, 212)', 
    borderRadius: 5,
    backgroundColor: 'rgb(232, 240, 253)' },
  text: {flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10},
  button_LoginScreen: {color: 'pink',
    fontWeight: 'bold',
    backgroundColor: 'rgb(127, 204, 199)', 
    borderRadius: 50, 
    padding: 10, 
    marginTop: 10},
  header: {flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 60},
  img: {width: '100%', height: 300, marginTop: 15},
  logo: {width: 110, height: 30, resizeMode: 'contain',},
});

export default LoginScreen;
