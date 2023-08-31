import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, PlannerScreen, WorkoutDetails} from '@screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return <NavigationContainer>{RootNavigator()}</NavigationContainer>;
};

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'BottomTabNav'} component={BottomTabNav} />
      <Stack.Screen
        name={'WorkoutDetails'}
        component={WorkoutDetails}
        options={{title: 'Workout Info'}}
      />
    </Stack.Navigator>
  );
}

const Bottmtab = createBottomTabNavigator();

function BottomTabNav() {
  return (
    <Bottmtab.Navigator>
      <Bottmtab.Screen name={'HomeScreen'} component={HomeScreen} />
      <Bottmtab.Screen name={'PlannerScreen'} component={PlannerScreen} />
    </Bottmtab.Navigator>
  );
}

export {StackNavigator};
