import react from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import HouseCleanImage from './assets/HouseCleanImage.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={HouseCleanImage} style={styles.backgroundImage} />
      <Text style={styles.title}>House Cleaning App</Text>
      <Text style={styles.subtitle}>Welcome to our app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fonrtWeight: 'bold',
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
  }
});
