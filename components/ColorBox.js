import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = (props) => {
  const boxColor = {
    backgroundColor: props.hexCode,
  };

  return (
    <View style={[styles.container, boxColor]}>
      <Text style={styles.boxText}>
        {props.colorName} {props.hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 3,
  },
});

export default ColorBox;