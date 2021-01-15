import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Here are some boxes of different colours</Text>
        <View style={[styles.cyanBox, styles.textBox]}>
          <Text style={styles.boxText}>Cyan #2aa198</Text>
        </View>
        <View style={[styles.blueBox, styles.textBox]}>
          <Text style={styles.boxText}>Blue #268bd2</Text>
        </View>
        <View style={[styles.magentaBox, styles.textBox]}>
          <Text style={styles.boxText}>Magenta #d33682</Text>
        </View>
        <View style={[styles.orangeBox, styles.textBox]}>
          <Text style={styles.boxText}>Orange #cb4b16</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  safeArea: {
    flex: 2,
  },
  cyanBox: {
    backgroundColor: '#2aa198',
  },
  textBox: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  blueBox: {
    backgroundColor: '#268bd2',
  },
  magentaBox: {
    backgroundColor: '#d33682',
  },
  orangeBox: {
    backgroundColor: '#cb4b16',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
