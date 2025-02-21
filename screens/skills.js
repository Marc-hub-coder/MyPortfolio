import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const skills = [
  { id: '1', name: 'React', icon: 'react' },
  { id: '2', name: 'Python', icon: 'python' },
  { id: '3', name: 'C++', icon: 'code' },
  { id: '4', name: 'React Native', icon: 'mobile-alt' }
];

const SkillsScreen = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <StatusBar style={darkMode ? "light" : "dark"} />

      {/* Toggle Button */}
      <TouchableOpacity style={styles.toggleButton} onPress={() => setDarkMode(!darkMode)}>
        <Text style={styles.toggleText}>{darkMode ? "Light Mode" : "Dark Mode"}</Text>
      </TouchableOpacity>

      {/* Header */}
      <Text style={[styles.header, darkMode ? styles.darkText : styles.lightText]}>My Skills</Text>

      {/* Skills List */}
      <FlatList
        data={skills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.skillItem, darkMode ? styles.darkSkillItem : styles.lightSkillItem]}>
            <FontAwesome5 name={item.icon} size={24} color="#009900" style={styles.icon} />
            <Text style={[styles.skillText, darkMode ? styles.darkText : styles.lightText]}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  lightContainer: {
    backgroundColor: '#FFFFFF',
  },
  toggleButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: 10,
    backgroundColor: '#006600',
    borderRadius: 5,
  },
  toggleText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  darkText: {
    color: '#FFFFFF',
  },
  lightText: {
    color: '#000000',
  },
  skillItem: {
    marginTop: 80,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    width: '100%',
    borderRadius: 5,
  },
  darkSkillItem: {
    backgroundColor: '#333333',
  },
  lightSkillItem: {
    backgroundColor: '#E0F2E9',
  },
  icon: {
    marginRight: 10,
  },
  skillText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SkillsScreen;
