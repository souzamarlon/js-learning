import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

console.tron.log('Hi');

export default function App() {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>App test2</Text>
      <Text style={styles.sectionDescription}>Welcome to my app!</Text>
    </View>
  );
}
