// screens/LogoutScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LogoutScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Thực hiện logic logout: xóa trạng thái người dùng (nếu có)
    // Sau đó chuyển về màn hình Login
    alert("You have been logged out.");
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>You are now logged out.</Text>
      <Button title="Go to Login" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  message: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
});

export default LogoutScreen;
