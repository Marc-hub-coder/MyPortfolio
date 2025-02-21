import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const ProjectScreen = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <StatusBar style={darkMode ? "light" : "dark"} />

      <TouchableOpacity style={styles.toggleButton} onPress={() => setDarkMode(!darkMode)}>
        <Text style={styles.toggleText}>{darkMode ? "Light Mode" : "Dark Mode"}</Text>
      </TouchableOpacity>

      <Text style={[styles.header, darkMode ? styles.darkText : styles.lightText]}>My Projects</Text>

      <ScrollView style={styles.scrollView}>
        <View style={[styles.projectContainer, darkMode ? styles.darkProject : styles.lightProject]}>
          <Text style={[styles.projectTitle, darkMode ? styles.darkText : styles.lightText]}>To Do App</Text>
          <Text style={[styles.projectDescription, darkMode ? styles.darkText : styles.lightText]}>
            A react app that allows you to create a list of things that you need to do. You can remove tasks and edit the task name, after you finished the task there is an option that says completed and if you click it the task will be remove from the list.
          </Text>
        </View>

        <View style={[styles.projectContainer, darkMode ? styles.darkProject : styles.lightProject]}>
          <Text style={[styles.projectTitle, darkMode ? styles.darkText : styles.lightText]}>Inventory System</Text>
          <Text style={[styles.projectDescription, darkMode ? styles.darkText : styles.lightText]}>
            This app is used to manage the items stored in the inventory. You can add, remove, and edit items. The app also has a search using the item name. The items are stored in a local storage.
          </Text>
        </View>

        <View style={[styles.projectContainer, darkMode ? styles.darkProject : styles.lightProject]}>
          <Text style={[styles.projectTitle, darkMode ? styles.darkText : styles.lightText]}>Event Management System</Text>
          <Text style={[styles.projectDescription, darkMode ? styles.darkText : styles.lightText]}>
            This system allows you to manage reserve and join events. the system can use by 3 persona, first one is the event creator, second one is the event joiner, and the third one is the admin. event creators can use this system to create private and public events while the event joiners can navigate it and the admin will manage the whole system.
          </Text>
        </View>
      </ScrollView>
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
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    marginTop: 50,
    width: '100%',
  },
  projectContainer: {
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
  },
  darkProject: {
    backgroundColor: '#333333',
  },
  lightProject: {
    backgroundColor: '#DDDDDD',
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  projectDescription: {
    fontSize: 16,
    marginTop: 5,
  },
  darkText: {
    color: '#FFFFFF',
  },
  lightText: {
    color: '#000000',
  },
});

export default ProjectScreen;