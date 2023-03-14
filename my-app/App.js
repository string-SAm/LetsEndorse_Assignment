import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './components/Menu';
import List from './components/List';
import Data from './components/Data';
import Graph from './components/Graph';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Graph/>
      <Data />
      <List />
      <Menu />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
