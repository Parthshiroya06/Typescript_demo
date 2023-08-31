import {getData} from '@storage';
import {Workout} from '@types';
import {useEffect, useState} from 'react';

export const useWorkouts = () => {
  const [workout, setWorkout] = useState<Workout[]>([]);
  useEffect(() => {
    async function getDatas() {
      const _workout = await getData('storeData');
      setWorkout(_workout);
    }
    getDatas();
  }, []);

  return workout;
};
