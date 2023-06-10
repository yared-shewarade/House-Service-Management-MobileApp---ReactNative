import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
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
      <View style={styles.container}>
        <View style={styles.column}>
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
        <View style={styles.column}>
          {Object.keys(activityData.APARTMENT).map((area) => (
            <View key={area} style={styles.imageContainer}>
              {activityData.APARTMENT[area].map((activity) => (
                <Image
                  key={activity.id}
                  source={activity.image}
                  style={styles.activityImage}
                />
              ))}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    paddingHorizontal: 10,
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
  imageContainer: {
    flexDirection: 'row',
    //flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  activityImage: {
    width: 200,
    height: 150,
    marginBottom: 5,
  },
});

export default ApartmentScreen;