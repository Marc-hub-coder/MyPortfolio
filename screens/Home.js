import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <StatusBar style={darkMode ? "light" : "dark"} />
      
      <TouchableOpacity style={styles.toggleButton} onPress={() => setDarkMode(!darkMode)}>
        <Text style={styles.toggleText}>{darkMode ? "Light Mode" : "Dark Mode"}</Text>
      </TouchableOpacity>
      
      <Image source={require('../assets/id.jpg')} style={[styles.profilePic, darkMode ? styles.darkPic : styles.lightPic]} />
      <Text style={[styles.name, darkMode ? styles.darkText : styles.lightText]}>Marc Eiron P Hernandez</Text>
      <Text style={[styles.bio, darkMode ? styles.darkText : styles.lightText]}>Computer Science | Data Analyst</Text>
      
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={[styles.button, darkMode ? styles.darkButton : styles.lightButton]} onPress={() => navigation.navigate('Skills')}>
      <Text style={[styles.buttonText, darkMode ? styles.darkButtonText : styles.lightButtonText]}>Skills</Text>
      </TouchableOpacity>

        <TouchableOpacity style={[styles.button, darkMode ? styles.darkButton : styles.lightButton]} onPress={() => navigation.navigate('Project')}>
        <Text style={[styles.buttonText, darkMode ? styles.darkButtonText : styles.lightButtonText]}>Projects</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button, darkMode ? styles.darkButton : styles.lightButton]} onPress={() => navigation.navigate('Contact')}>
          <Text style={[styles.buttonText, darkMode ? styles.darkButtonText : styles.lightButtonText]}>Contact</Text>
        </TouchableOpacity>
      </View>
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
    profilePic: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 50,
      marginTop: -400,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    bio: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: -100,
    },
    darkText: {
      color: '#FFFFFF',
    },
    lightText: {
      color: '#000000',
    },
    lightPic: {
      borderColor: "black",
      borderWidth: 2,
    },
    darkPic: {
      borderColor: "white",
      borderWidth: 2,
    },
    buttonContainer: {
      marginBottom: -300,
      marginTop: 200,
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
    },
    button: {
      height: 50,
      width: 100,
      padding: 10,
      borderRadius: 5,
    },
    darkButton: {
      backgroundColor: '#006600',
      padding: 10,
      borderRadius: 5,
    },
    lightButton: {
      backgroundColor: '#009900',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      alignSelf: "center",
      marginTop: 7,
    },
    darkButtonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    lightButtonText: {
      color: '#000000',
      fontWeight: 'bold',
    },
  });
  
  export default HomeScreen;