import React, { useContext, useState, createRef, useEffect } from 'react';
import {
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
} from 'react-native';

import Styled from 'styled-components/native';
import { RandomUserDataContext } from '~/Context/RandomUserData';
import Tab from '~/Components/Tab';
import NotificationList from './NotificationList';

const ProfileTabContainer = Styled.View`
  flex-direction: row;
  background-color: #FEFFF;
`;
const TabContainer = Styled.SafeAreaView`
  width: 100%;
  height: ${Dimensions.get('window').height}px;
`;

interface Props {}

const Notification = () => {
  const { getMyFeed } = useContext(RandomUserDataContext);
  const [followingList, setFollowingList] = useState<Array<IFeed>>([]);
  const [myNotifications, setMyNotifications] = useState<Array<IFeed>>();
  const [tabIndex, setTabIndex] = useState<number>();
  const width = Dimensions.get('window').width;
  const tabs = ['팔로잉', '내 소식'];
  const refScrollView = createRef<ScrollView>();
  
  useEffect(() => {
    setFollowingList(getMyFeed(24));
    setMyNotifications(getMyFeed(24));
  }, []);

  return (
    <TabContainer>
      <ProfileTabContainer>
        {tabs.map((label: string, index: number) => {
          <Tab
            key={`tab-${index}`}
            selected={tabIndex === index}
            label={label}
            onPress={() => {
              setTabIndex(index);
              const node = refScrollView.current;
              if (node) {
                node.scrollTo({ x: width * index, y: 0, animated: true });
              }
            }}
          />
        })}
      </ProfileTabContainer>
    </TabContainer>
  );
};

export default Notification;
