import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;
  return (
    <View style={styles.safeArea}>
      <FlatList
        data={colors}
        style={styles.container}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
        )}
      />
    </View>
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
    backgroundColor: 'white',
  },
  safeArea: {
    flex: 2,
  },
});

export default ColorPalette;
