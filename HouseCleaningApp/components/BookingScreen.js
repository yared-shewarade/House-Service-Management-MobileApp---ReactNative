import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const BookingScreen = () => {
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleBooking = () => {
    // Implement your booking logic here
    if (service && date && time) {
      // Successful booking
      Alert.alert('Success', 'Booking successful!');
    } else {
      // Incomplete booking details
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  return (
    <View>
      <Text>Book a Cleaning</Text>
      <TextInput
        placeholder="Service"
        value={service}
        onChangeText={setService}
      />
      <TextInput
        placeholder="Date"
        value={date}
        onChangeText={setDate}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Time"
        value={time}
        onChangeText={setTime}
        keyboardType="numeric"
      />
      <Button title="Book" onPress={handleBooking} />
    </View>
  );
};

export default BookingScreen;