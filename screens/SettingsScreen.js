import React, { useState } from 'react';
import { View, Text, RadioButton } from 'react-native';

const SettingsScreen = () => {
  const [unit, setUnit] = useState('kilometers'); 

  const handleUnitChange = (selectedUnit) => {
    setUnit(selectedUnit);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Select Units:</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="kilometers"
          status={unit === 'kilometers' ? 'checked' : 'unchecked'}
          onPress={() => handleUnitChange('kilometers')}
        />
        <Text>Kilometers</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="miles"
          status={unit === 'miles' ? 'checked' : 'unchecked'}
          onPress={() => handleUnitChange('miles')}
        />
        <Text>Miles</Text>
      </View>
    </View>
  );
};

export default SettingsScreen;
