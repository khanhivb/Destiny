import * as React from 'react';
import { Dimensions, View, Text, Button, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view'; // Thêm import SceneMap
import { useNavigation } from '@react-navigation/native'; // Thêm import useNavigation

const FirstRouter = () => {
  const navigation = useNavigation(); // Sử dụng useNavigation để có access đến navigation
  return (
    <View style={styles.container}>
      <Text style={styles.title}>chào tụi mày</Text>
      <Button title="Browse Products" onPress={() => navigation.navigate('Product')} />
    </View>
  );
};

const SecondRouter = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
        <Text style={styles.title}>Welcome to the Flower Shop</Text>
        <Button title="Browse Products" onPress={() => navigation.navigate('Product')} />
    </View>
  );
};

const initialLayout = { width: Dimensions.get('window').width };

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'second', title: 'News' }
  ]);

  const renderScene = SceneMap({
    second: SecondRouter
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
});

export default Home;
