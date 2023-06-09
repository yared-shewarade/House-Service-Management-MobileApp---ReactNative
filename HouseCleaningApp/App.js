import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './components/HomeScreen';
import HouseScreen from './components/HouseScreen';
import ApartmentScreen from './components/ApartmentScreen';
import ContactScreen from './components/ContactScreen';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.mainTitle}>Commercial Cleaning Service</Text>
          <Image source={require('./assets/HouseCleanImage.png')} style={styles.logo} />
        </View>
        <Tab.Navigator
          tabBarPosition="top"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'House') {
                iconName = focused ? 'business' : 'business-outline';
              } else if (route.name === 'Apartment') {
                iconName = focused ? 'business' : 'business-outline';
              } else if (route.name === 'Contact') {
                iconName = focused ? 'person' : 'person-outline';
              }

              return (
                <Ionicons
                  name={iconName}
                  size={focused ? 30 : 26} // Customize the size based on focus
                  color={focused ? 'red' : 'blue'} // Customize the color based on focus
                  style={{ width: 30, fontWeight: 'bold' }} // Customize the width of the icon
                />
              );
            },
          })}
          screenOptions={{
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'gray',
            tabBarShowIcon: true,
            tabBarStyle: { backgroundColor: 'lightblue' },
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="House" component={HouseScreen} />
          <Tab.Screen name="Apartment" component={ApartmentScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'linen',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 0,
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 10,
    //textDecorationLine: 'underline', // Add underline to the mainTitle
  },
  logo: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
});