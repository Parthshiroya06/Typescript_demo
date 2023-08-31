import {View, Text, Button} from 'react-native';
import React from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

const PlannerScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>PlannerScreen</Text>
      <Button
        title="Go to Planner"
        onPress={() => navigation.push('HomeScreen')}
      />
    </View>
  );
};

export {PlannerScreen};
