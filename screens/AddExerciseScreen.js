import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import Calendar from '../Components/Calendar';

const AddExerciseScreen = ({ navigation }) => {
  const [sportType, setSportType] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());

  const handleAddExercise = () => {
    if (!Number(distance) || !Number(duration) || Number(distance) < 0 || Number(duration) < 0) {
      Alert.alert('Invalid input', 'Distance and duration must be positive numbers.');
      return;
    }

    setSportType('');
    setDistance('');
    setDuration('');
    setDate(new Date());
  };

  return (
    <View>
      <Text>Sport Type:</Text>
      <TextInput value={sportType} onChangeText={setSportType} />
      <Text>Distance:</Text>
      <TextInput value={distance} onChangeText={setDistance} keyboardType="numeric" />
      <Text>Duration:</Text>
      <TextInput value={duration} onChangeText={setDuration} keyboardType="numeric" />
      <Text>Date:</Text>
      <Calendar selectedDate={date} onSelectDate={setDate} />
      <Button title="Add Exercise" onPress={handleAddExercise} />
    </View>
  );
};

export default AddExerciseScreen;
