import React from 'react';
import styled from 'styled-components/native';

import Text from '../shared/Text';
import ProgressiveImage from '../shared/ProgressiveImage';

export default function GameDetails({route, navigation}) {
  const {game} = route.params;
  const rating = () => '*****';
  return (
    <Container showsVerticalScrollIndicator={false}>
      <Poster source={{uri: game.download_url}} borderRadius={25} />
      <Close onPress={() => navigation.goBack()}>
        <Text medium bold>
          X
        </Text>
      </Close>
      <Cover>
        <Content>
          <LogoContainer>
            <Logo source={{uri: game.download_url}} borderRadius={10} />
          </LogoContainer>
          <ContentWrapper>
            <Title>
              <Text medium bold>
                {game.name}
              </Text>
              <Text small>{game.about}</Text>
            </Title>
            <DownloadIcon source={require('../assets/images/download.png')} />
          </ContentWrapper>
        </Content>
        <GameInfo>
          <Rating xlarge color="#819ee5">
            {rating()}
          </Rating>
          <Text>3.8</Text>
          <Text>Strategy</Text>
          <Text>11+</Text>
          <Text>Game of the Day</Text>
        </GameInfo>
        <ScreenShots horizontal showsHorizontalScrollIndicator={false}>
          {game.screenshots.map((screenshot, index) => (
            <Screenshot
              borderRadius={10}
              key={index}
              source={{uri: screenshot}}
              resize="contain"
            />
          ))}
        </ScreenShots>
        <Description color="#9a9a9a">{game.description}</Description>
      </Cover>
    </Container>
  );
}

const Container = styled.ScrollView`
  flex: 1;
  background-color: #343434;
`;

const Cover = styled.View`
  margin: 16px 16px 0 16px;
`;

const Poster = styled(ProgressiveImage)`
  width: 100%;
  height: 300px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const Close = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background-color: #819ee5;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50px;
  right: 20px;
`;

const Content = styled.View`
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
`;

const LogoContainer = styled.View`
  width: 50px;
  height: 50px;
`;

const Logo = styled(ProgressiveImage)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const ContentWrapper = styled.View`
  flex: 1;
  margin-left: 8px;
  flex-direction: row;
  padding: 0 16px;
  align-items: center;
`;

const Title = styled.View`
  flex: 1;
  margin-right: 10px;
`;

const DownloadIcon = styled(ProgressiveImage)`
  width: 32px;
  height: 32px;
`;

const GameInfo = styled.View`
  margin-top: 16px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const Rating = styled(Text)`
  align-self: center;
  padding: 0;
`;

const ScreenShots = styled.ScrollView`
  margin-top: 16px;
`;

const Screenshot = styled.Image`
  width: 280px;
  height: 200px;
  margin-right: 16px;
  border-radius: 10px;
  background-color: white;
`;

const Description = styled(Text)`
  margin-top: 16px;
`;
