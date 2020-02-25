import React from 'react';
import {FlatList} from 'react-native';

import Styled from 'styled-components/native';

const StoryContainer = Styled.View`
  padding: 8px;
  width: 72px;
`;
const Story = Styled.View`
  width: 56px;
  height: 56px;
  border-radius: 56px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;
const StoryBackground = Styled.Image`
  position: absolute;
`;


const StoryList = () => {
  return (
    <FlatList />
  );
};

export default StoryList;
