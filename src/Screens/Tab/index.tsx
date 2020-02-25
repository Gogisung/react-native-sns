import React from 'react';
import { ImageSourcePropType } from 'react-native';


interface Props {
  selected: boolean;
  label? : string;
  imageSource?: ImageSourcePropType;
  onPress?: () => void;
}

const Tab = ({ selected, label, imageSource, onPress }: Props) => {

};

export default Tab;
