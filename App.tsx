import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import Contact from './screens/Contact';
import ProjectScreen from './screens/Projects';
import SkillsScreen from './screens/skills';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Project" component={ProjectScreen} />
        <Stack.Screen name="Skills" component={SkillsScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}