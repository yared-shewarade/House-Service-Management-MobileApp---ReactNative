//import react from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import HouseCleanImage from './assets/HouseCleanImage.png'

import ActivityItem from './components/ActivityItem';
import activityData from './components/ActivityData'
import { FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>House Cleaning Service</Text>
      <View style={styles.header}>
        <Image source={require('./assets/HouseCleanImage.png')}
        style={styles.headerImage}
        resizeMode="cover"
        />
      </View>
      <Text style={styles.title}>House Cleaning checklist</Text>
      <FlatList
        data={activityData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item })=> <ActivityItem activity={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 16
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    //marginBottom: 10,
    color: 'red',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  subtitle: {
    fontSize: 18,
    color: 'gray'
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  header: {
    alignItems: 'center',
    marginBottom: 16
  },
  headerImage: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    borderRadius: 10,
  }
});
