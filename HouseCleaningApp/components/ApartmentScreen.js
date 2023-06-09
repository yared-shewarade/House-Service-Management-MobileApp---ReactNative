import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import activityData from './ActivityData';

const ApartmentScreen = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (activityId) => {
    const isChecked = checkedItems.includes(activityId);
    if (isChecked) {
      // Remove the item from the checkedItems array
      setCheckedItems(checkedItems.filter((item) => item !== activityId));
    } else {
      // Add the item to the checkedItems array
      setCheckedItems([...checkedItems, activityId]);
    }
  };

  return (
    <ScrollView>
      <View>
        <Text style={styles.heading}>Apartment cleaning checklist by room:</Text>
        {Object.keys(activityData.APARTMENT).map((area) => (
          <View key={area}>
            <Text style={styles.areaHeading}>{area}</Text>
            {activityData.APARTMENT[area].map((activity) => (
              <TouchableOpacity
                key={activity.id}
                onPress={() => handleCheckboxChange(activity.id)}
                style={{ flexDirection: 'row', alignItems: 'center' }}
              >
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderWidth: 1,
                    marginRight: 10,
                    backgroundColor: checkedItems.includes(activity.id) ? 'green' : 'transparent',
                  }}
                />
                <Text style={styles.activityTitle}>{activity.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = {
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 10,
  },
  areaHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 10,
    marginBottom: 5,
  },
  activityTitle: {
    fontSize: 16,
    color: 'black',
  },
};

export default ApartmentScreen;