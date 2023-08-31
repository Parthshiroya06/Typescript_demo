import {View, Button, FlatList, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import data from '../../../data.json';
import {Workout} from '@types';
import {WorkoutItem} from '@components';
import {styles} from './style';
import {getData, storeData} from '@storage';
import {useWorkouts} from '@hooks';

const HomeScreen = ({navigation}: any) => {
  const workouts = useWorkouts;
  const [workout, setWorkout] = useState<Workout[]>([]);
  useEffect(() => {
    async function getDatas() {
      const _workout = await getData('storeData');
      setWorkout(_workout);
    }
    getDatas();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text style={styles.titleStyle}>{'New  Workout'}</Text>
      <FlatList
        style={{flex: 1, paddingTop: 10}}
        contentContainerStyle={{padding: 10}}
        data={workout}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('WorkoutDetails', {item: item});
            }}>
            <WorkoutItem item={item} />
          </Pressable>
        )}
        keyExtractor={item => item.slug}
      />
    </View>
  );
};

export {HomeScreen};
