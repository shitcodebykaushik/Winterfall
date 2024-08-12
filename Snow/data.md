```JavaScript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomCard = (props) => {
  return (
    <View style={[data.card, { backgroundColor: props.backgroundColor }]}>
      <Text style={[data.title, { color: props.titleColor }]}>
        {props.title}
      </Text>
      <Text style={[data.subtitle, { color: props.subtitleColor }]}>
        {props.subtitle}
      </Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={data.dog}>
      <CustomCard 
        title="React Native"
        subtitle="Props Example"
        backgroundColor="#f8b400"
        titleColor="#fff"
        subtitleColor="#333"
      />
      <CustomCard 
        title="Another Card"
        subtitle="With Different Props"
        backgroundColor="#4a90e2"
        titleColor="#fff"
        subtitleColor="#eee"
      />
         <CustomCard 
        title="Third card"
        subtitle="With Different Props"
        backgroundColor="#4a90e2"
        titleColor="#fff"
        subtitleColor="#eee"
      />
    </View>
  );
};

const data = StyleSheet.create({    // Here we have the data object that contains the properties like dog ,card,title,subtitle.
  dog: {                            // This is dog property which contains the  css styling of it.
    flex: 1,                        // By storing the  styling in the object we can reuse it many ways. 
    justifyContent: 'center',       
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default App;
```
# Learnig begins here 
- Step one is to follow the path of the and need to connect all these from src to the app.jsx files 
 - Button => Welcome => Login => 
 