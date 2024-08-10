import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const data = [
  { id: '1', title: 'Item 1', image: 'https://via.placeholder.com/100' },
  { id: '2', title: 'Item 2', image: 'https://via.placeholder.com/100' },
  { id: '3', title: 'Item 3', image: 'https://via.placeholder.com/100' },
  { id: '4', title: 'Item 4', image: 'https://via.placeholder.com/100' },
];

const HorizontalScroll = () => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  itemContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    marginTop: 5,
    fontSize: 16,
  },
});

export default HorizontalScroll;
