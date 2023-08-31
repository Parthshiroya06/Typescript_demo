import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Color {
  black: string;
  green: string;
}
const Color: Color = {
  black: 'black',
  green: 'green',
};
interface Style {
  [backgroundColor: string]: string | number;
}
const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    marginLeft: 10,
  },
  commonStyle: (color: string = 'black'): Style => {
    return {
      backgroundColor: Color[color as keyof Color],
    };
  },
});

export {styles};
