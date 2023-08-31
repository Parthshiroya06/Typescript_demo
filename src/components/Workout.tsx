import {SequenceItem, Workout} from '@types';
import {formateToSec, sectoMin} from '@utils';
import React, {Children, ReactNode, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  StyleProp,
  ViewStyle,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {data} from '../../data.json';
const WorkoutItem = ({
  item,
  children,
  childStyle = {},
}: {
  item: Workout;
  children?: ReactNode;
  childStyle?: StyleProp<ViewStyle>;
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.duration}>{formateToSec(item.duration)}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.difficulty}>{item.difficulty}</Text>
      {children && <View style={childStyle}>{children}</View>}
    </View>
  );
};

export {WorkoutItem};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,

    marginBottom: 10,
  },
  name: {fontWeight: 'bold', fontSize: 15, marginBottom: 5},
  difficulty: {fontSize: 15},
  duration: {fontSize: 15},
});
