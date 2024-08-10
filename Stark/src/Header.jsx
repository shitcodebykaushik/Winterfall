import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profileImage} />
      <Text style={styles.title}>MyApp</Text>
      <TextInput style={styles.searchBar} placeholder="Search..." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#6200EE',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: {
    flex: 1,
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
  searchBar: {
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});

export default Header;
