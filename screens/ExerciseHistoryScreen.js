import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const ExerciseHistoryScreen = () => {
  
  const exerciseHistory = [
    { sportType: 'Running', distance: 5, duration: 30, date: '2024-03-10' },
    { sportType: 'Cycling', distance: 10, duration: 45, date: '2024-03-11' },
    { sportType: 'Swimming', distance: 1, duration: 20, date: '2024-03-12' },
  ];

  const distances = exerciseHistory.reduce((acc, exercise) => {
    acc[exercise.sportType] = (acc[exercise.sportType] || 0) + exercise.distance;
    return acc;
  }, {});

  return (
    <View>
      {}
      <Text>Running: {distances['Running'] || 0} km</Text>
      <Text>Cycling: {distances['Cycling'] || 0} km</Text>
      <Text>Swimming: {distances['Swimming'] || 0} km</Text>
      <ScrollView>
        {}
        {exerciseHistory.map((exercise, index) => (
          <View key={index}>
            <Text>{exercise.date}</Text>
            <Text>{exercise.sportType}</Text>
            <Text>{exercise.distance} km</Text>
            <Text>{exercise.duration} mins</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ExerciseHistoryScreen;

