import React, {useContext, useState, useEffect} from 'react';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

import Styled from 'styled-components/native';

import {RandomUserDataContext} from '~/Context/RandomUserData';
import IconButton from '~/Components/IconButton';
import Input from '~/Components/Input';
import ImageFeedList from '~/Components/ImageFeedList';

const SearchBar = Styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

const Feeds = ({navigation}: Props) => {
  const {getMyFeed} = useContext(RandomUserDataContext);
}

export default Feeds;
