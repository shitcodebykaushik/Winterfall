import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header Section with Photo */}
      <View style={styles.header}>
        <Image
        
          style={styles.photo}
        />
        <Text style={styles.name}>Kaushik Raj</Text>
        <Text style={styles.title}>Software Developer</Text>
      </View>

      {/* Contact Information */}
      <View style={styles.contactInfo}>
        <Text style={styles.contactText}>Phone: +6239165083</Text>
        <Text style={styles.contactText}>Email: algorithmunclok.com</Text>
        <Text style={styles.contactText}>Location: Law Gate , Punjab</Text>
      </View>

      {/* Skills Section */}
      <View style={styles.skills}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.skillItem}>Rust</Text>
        <Text style={styles.skillItem}>React Native</Text>
        <Text style={styles.skillItem}>Node.js</Text>
        <Text style={styles.skillItem}>Python</Text>
        <Text style = {styles.skillItem}>Dev-ops</Text>
        {/* Experience Section */}
      < View style = {styles.Experince} > 
        < Text style={styles.jobExperince} > Intern </Text>
      </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    color: 'Red',
  },
  contactInfo: {
    marginBottom: 30,
  },
  contactText: {
    fontSize: 16,
    marginBottom: 5,
  },
  skills: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  skillItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  Experince : {
  jobExperince: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  }
  }
});
