import React from 'react';
import Styled from 'styled-components/native';

import Button from '~/Components/Button';

const Container = Styled.View`
  flex-direction: row;
`;
const ProfileImageContainer = Styled.View`
  padding: 16px;
`;
const ProfileImage = Styled.Image`
  border-radius: 100px;
`;
const ProfileContent = Styled.View`
  flex: 1;
  padding: 16px;
  justify-content: space-around;
`;
const LabelContainer = Styled.View`
  flex-direction: row;
`;
const ProfileItem = Styled.View`
  flex: 1;
  align-item: center;
`;
const LabelCount = Styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
const LabelTitle = Styled.Text`
  font-weight: 300;
`;

interface Props {
  image: string;
  posts: number;
  follower: number;
  following: number;
}

const ProfileHeader = ({ image, posts, follower, following }: Props) => {
  return(
    <Container>
      <ProfileImageContainer>
        <ProfileItem
          source={{ uri: image }}
          style={{width: 100, height: 100}}
        />
      </ProfileImageContainer>
      <ProfileContent>
        <LabelContainer>
          <ProfileItem>
            <LabelCount>{posts}</LabelCount>
            <LabelTitle>게시물</LabelTitle>
          </ProfileItem>
          <ProfileItem>
            <LabelCount>{follower}</LabelCount>
            <LabelTitle>팔로잉</LabelTitle>
          </ProfileItem>
        </LabelContainer>
        <Button
          label="프로필 수정"
          style={{
            borderRadius: 4,
            backgroundColor: '#FEFFF',
            borderWidth: 1,
            borderColor: '#D3D3D3',
            height: 32,
          }}
          color="32"
        />
      </ProfileContent>
    </Container>
  );
};

export default ProfileHeader;
