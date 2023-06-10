import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Welcome to House Management Service</Text>
    <ScrollView style={styles.scrollContainer}>
    <Text style={styles.subtitle}>This app is a housing cleaning 
    service app designed by 
        <Text style={[styles.highlightedText, styles.underlinedText]}> Sri Vuyyuru</Text> ,   
        <Text style={[styles.highlightedText, styles.underlinedText]}> Nicole Hessner</Text>, and    
        <Text style={[styles.highlightedText, styles.underlinedText]}> Yared Shewarade</Text> 
    for Team Project of CS624 course. This app is a mobile application that helps users find and book local 
    cleaning services, schedule appointments, and pay for services all within the app. The app can facilitate 
    users with real-time updates on the status of their cleaning service.
    {'\n'}
    {'\n'}
    <Text>These are the tasks included in cleaning services:</Text>
    {'\n'}
    </Text>
        <Text style={styles.bulletList}>
        &#8226; Clean surfaces and remove dust.
        {'\n'}
        &#8226; Vacuum floors and carpets.
        {'\n'}
        &#8226; Wash windows and mirrors.
        {'\n'}
        &#8226; Clean bathroom and bedroom features.
        {'\n'}
        &#8226; Cleaning surfaces and stoves in the kitchen.
        {'\n'}
        &#8226; Cleaning garden and garage.
        {'\n'}
        &#8226; Trashing.
        {'\n'}
    </Text>
    
    <Text style={styles.subtitle}>Depending on the needs of users, we can also offer these cleaning services:</Text>

    <Text style={styles.bulletList}>
            {'\n'}
             &#8226; Change the bed lien.
            {'\n'}
            &#8226; Iron clothes and laundary.
            {'\n'}
            &#8226; Wash the dishes or load the dishwasher.
            {'\n'}
            &#8226; Wash the dishes or load the dishwasher.
            {'\n'}
            &#8226; Empty all garbage cans, including kitchen waste.
            {'\n'}
            &#8226; Dusting curtains and window sills.
            {'\n'}
            &#8226; Dusting furniture and books.
        </Text>
      </ScrollView>
      <Text style={styles.subtitle}>Explore and enjoy the features!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'black',
  },
  highlightedText: {
    color: 'blue'
  },
  underlinedText: {
    textDecorationLine: 'underline',
  },
  bulletList: {
    fontSize: 16,
    color: 'black',
    marginLeft: 20
  },
  scrollContainer: {
    maxHeight: 500,
  }
});

export default HomeScreen;