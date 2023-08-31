import {View, Text} from 'react-native';
import React, {Children} from 'react';

type Props = {};

const TextComponent = (props: Text['props']) => {
  return <Text {...props} />;
};

export default TextComponent;
