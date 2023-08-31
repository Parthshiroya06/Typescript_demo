import {Workout} from '@types';
import {containKey, getData, storeData} from './AsyncStorage';
import data from '../../data.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const getWorkout = async (): Promise<Workout> => {
  const workout = await getData('workout-data');
  return workout;
};

export const initWorkouts = async (): Promise<boolean> => {
  const hasWorkouts = await containKey('workout-data');
  if (!hasWorkouts) {
    console.log('Strong data');
    await storeData('workout-data', data);
    return true;
  }

  return false;
};

export const clearData = async () => {
  await AsyncStorage.removeItem('workout-data');
};
