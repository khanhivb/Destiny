// screens/IndexScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Home from './Home';

const IndexScreen = ({ navigation }) => {
  return (
    <Home />
  );
}; 

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
});

export default IndexScreen;
