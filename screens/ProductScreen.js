// screens/ProductScreen.js
import React from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';
import ProductCard from '../components/ProductCard';

const ProductScreen = ({ navigation }) => {
  const products = [
    { id: 1, name: 'Rose', price: 15, description: 'Beautiful red roses' },
    { id: 2, name: 'Tulip', price: 12, description: 'Fresh tulips for you' },
    { id: 3, name: 'Lily', price: 10, description: 'Elegant white lilies' },
  ];

  return (
    <ScrollView style={styles.container}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});

export default ProductScreen;
