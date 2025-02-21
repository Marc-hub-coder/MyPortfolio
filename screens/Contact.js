import React, { useState } from 'react';
import { View, Text, Linking, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Contact = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <StatusBar style={darkMode ? "light" : "dark"} />

      <TouchableOpacity style={styles.toggleButton} onPress={() => setDarkMode(!darkMode)}>
        <Text style={styles.toggleText}>{darkMode ? "Light Mode" : "Dark Mode"}</Text>
      </TouchableOpacity>

      <Text style={[styles.header, darkMode ? styles.darkText : styles.lightText]}>Contact Information</Text>
      
      <Text style={[styles.label, darkMode ? styles.darkText : styles.lightText]}>Address:</Text>
      <Text style={[styles.info, darkMode ? styles.darkText : styles.lightText]}> Darasa Tanauan , Batangas</Text>
      
      <Text style={[styles.label, darkMode ? styles.darkText : styles.lightText]}>Contact Number:</Text>
      <Text style={[styles.info, styles.link]} onPress={() => Linking.openURL('tel:+639391848365')}>
        (+63) 939 184 8365
      </Text>
      
      <Text style={[styles.label, darkMode ? styles.darkText : styles.lightText]}>Social Media:</Text>
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/profile.php?id=100012441918049')}>
          <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com')}>
          <Image source={require('../assets/twitter.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com')}>
          <Image source={require('../assets/linkedin.png')} style={styles.socialIcon} />
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
    backgroundColor: '#ffffff',
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
  label: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    marginTop: 5,
  },
  darkText: {
    color: '#ffffff',
  },
  lightText: {
    color: '#000000',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
});

export default Contact;
