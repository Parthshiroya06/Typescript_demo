import AsyncStorage from '@react-native-async-storage/async-storage';
import {getWorkout} from './Workout';
import {Workout} from '@types';

export const storeData = async (key: any, value: any) => {
  try {
    const stringValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, stringValue);
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getData = async (key: any) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      const data = JSON.parse(value);
      return data;
    }
  } catch (error: any) {
    console.error(error.message);
  }
};

//cheack all key if available
export const containKey = async (key: string) => {
  try {
    const asyncKey = await AsyncStorage.getAllKeys();

    return asyncKey.includes(key);
  } catch (error: any) {}
};
