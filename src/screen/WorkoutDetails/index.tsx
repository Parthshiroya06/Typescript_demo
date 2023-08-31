import {View, Text, Pressable, StyleSheet, Alert, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Modal, useCountDown} from '@components';
import {getData} from '@storage';
import data from '../../../data.json';
import {SequenceItem} from '@types';
type Workout = {
  route: {
    params: {
      item: string;
    };
  };
};

type Navigation = Workout & NativeStackHeaderProps;
const WorkoutDetails = ({route}: Navigation) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sequence, setSequence] = useState<SequenceItem[]>([]);
  const [trackerIdx, setTrackerIdx] = useState(-1);
  const [countDown, setCountDown] = useState(-1);

  const countDowns = useCountDown(trackerIdx, route.params.item!.sequence[idx]);

  // useEffect(() => {
  //   if (!route.params.item) return;
  //   if (trackerIdx === route.params.item!.sequence.length - 1) return;

  //   if (countDown === 0) {
  //     addItemToSequence(trackerIdx + 1);
  //   }
  // }, [trackerIdx]);
  console.log('checl', countDowns, countDown);
  const addItemToSequence = (idx: number) => {
    setSequence([...sequence, route.params.item!.sequence[idx]]);
    setTrackerIdx(idx);
  };
  return (
    <View>
      <Text>{`items: ${route.params.item}`}</Text>
      <Modal
        activator={() => (
          <Pressable
            onPress={() => {
              Alert.alert('Opeing');
            }}>
            <Text>{'Open'}</Text>
          </Pressable>
        )}>
        <Text>{'Opening There'}</Text>
      </Modal>

      <View>
        {data.map((_item, _index) => {
          return _item.sequence.map((item, index) => {
            return (
              <Text key={index}>
                {item.name} | {item.duration} |{item.type}
              </Text>
            );
          });
        })}
      </View>
      {/* <Modal
        activator={({handleOpen}) => (
          <Button onPress={handleOpen} title="Custom Button" />
        )}>
        <Text>{'Closing There'}</Text>
      </Modal> */}
      <Pressable onPress={() => addItemToSequence(0)}>
        <Text>Play Button</Text>
      </Pressable>
      {countDowns >= 0 && (
        <View
          style={{
            width: '20%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 50}}>{countDowns}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export {WorkoutDetails};
