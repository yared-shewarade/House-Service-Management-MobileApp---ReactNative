import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact us</Text>
      <Text>Please contact us if you have any question and need help. 
        {'\n'}
      </Text>
      <Text>We can be reached at: {'\n'}</Text>

      {/* Phone */}
      <View style={styles.contactRow}>
        <Icon name="phone" style={styles.icon} />
        <Text style={styles.contactText}>Phone: 123-456-7890</Text>
      </View>

      {/* Email */}
      <View style={styles.contactRow}>
        <Icon name="envelope" style={styles.icon} />
        <Text style={styles.contactText}>Email: example@example.com</Text>
      </View>

      {/* Facebook */}
      <View style={styles.contactRow}>
        <Icon name="facebook" style={styles.icon} />
        <Text style={styles.contactText}>Facebook: facebook.com/example</Text>
      </View>

      {/* Twitter */}
      <View style={styles.contactRow}>
        <Icon name="twitter" style={styles.icon} />
        <Text style={styles.contactText}>Twitter: twitter.com/example</Text>
      </View>

      {/* Instagram */}
      <View style={styles.contactRow}>
        <Icon name="instagram" style={styles.icon} />
        <Text style={styles.contactText}>Instagram: instagram.com/example</Text>
      </View>

      {/* Add other contact information here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'blue'
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    fontSize: 30,
    marginRight: 20,
  },
  contactText: {
    fontSize: 16,
  },
});

export default ContactScreen;