import React, { useState } from 'react';
import activityData from './ActivityData';

const ActivityList = () => {
  const [selectedActivities, setSelectedActivities] = useState([]);

  const handleActivitySelection = (event, activity) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedActivities((prevSelectedActivities) => [
        ...prevSelectedActivities,
        activity,
      ]);
    } else {
      setSelectedActivities((prevSelectedActivities) =>
        prevSelectedActivities.filter((selectedActivity) => selectedActivity.id !== activity.id)
      );
    }
  };

  return (
    <div>
      <h3>Activities</h3>
      {Object.keys(activityData).map((location) => (
        <div key={location}>
          <h4>{location}</h4>
          {Object.keys(activityData[location]).map((category) => (
            <div key={category}>
              <h5>{category}</h5>
              {activityData[location][category].map((activity) => (
                <div key={activity.id}>
                  <input
                    type="checkbox"
                    checked={selectedActivities.some(
                      (selectedActivity) => selectedActivity.id === activity.id
                    )}
                    onChange={(event) => handleActivitySelection(event, activity)}
                  />
                  <label>{activity.title}</label>
                  <p>{activity.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
      <div>
        <h4>Selected Activities</h4>
        {selectedActivities.map((activity) => (
          <div key={activity.id}>
            <p>{activity.title}</p>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityList;