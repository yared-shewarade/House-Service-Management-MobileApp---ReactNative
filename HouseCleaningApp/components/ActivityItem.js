import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ActivityItem = ({ activity }) => {
  const [completed, setCompleted] = useState(false);

  const handleToggleComplete = () => {
    setCompleted(!completed);
  };

  return (
    <TouchableOpacity
      style={[styles.container, completed && styles.completedContainer]}
      onPress={handleToggleComplete}
    >
      <View style={styles.checkbox}>
        {completed && <MaterialIcons name="check-box" size={24} color="#33BB5D" />}
        {!completed && <MaterialIcons name="check-box-outline-blank" size={24} color="#999" />}
      </View>
      <Image source={activity.image} style={styles.activityImage} />
      <View style={styles.activityDetails}>
        <Text style={[styles.title, completed && styles.completedTitle]}>{activity.title}</Text>
        <Text style={[styles.description, completed && styles.completedDescription]}>
          {activity.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  completedContainer: {
    backgroundColor: '#e6e6e6',
    borderColor: '#bbb',
  },
  checkbox: {
    marginRight: 8,
  },
  activityImage: {
    width: 64,
    height: 64,
    marginRight: 16,
    borderRadius: 8,
  },
  activityDetails: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  completedTitle: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  completedDescription: {
    color: '#999',
  },
});

export default ActivityItem;