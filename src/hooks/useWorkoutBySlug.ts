import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Workout} from '@types';

type Props = {};

const useWorkoutBySlug = () => {
  const [workout, setWorkout] = useState<Workout>();
  useEffect(() => {
    async function geData() {
      const _workout = await getWorkoutbySlug(slug);
      setWorkout(_workout);
    }
    getData();
  }, []);

  return workout;
};

export default useWorkoutBySlug;
