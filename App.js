import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AddExerciseScreen from './screens/AddExerciseScreen';
import ExerciseHistoryScreen from './screens/ExerciseHistoryScreen';
import SettingsScreen from './screens/SettingsScreen';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Exercise"
          component={ExerciseHistoryScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-fitness" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="AddExercise"
          component={AddExerciseScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-add-circle" size={size} color={color} />
            ),
            tabBarLabel: 'Add Exercise',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-settings" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
