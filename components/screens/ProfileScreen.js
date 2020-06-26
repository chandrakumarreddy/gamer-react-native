import React from 'react';
import styled from 'styled-components/native';

import Text from '../shared/Text';
import ProgressiveImage from '../shared/ProgressiveImage';
import purchases from '../data/purchases';

export default function Profile() {
  return (
    <Container>
      <Cover showsVerticalScrollIndicator={false}>
        <Avatar source={require('../assets/images/avatar.jpg')} />
        <Name large center heavy>
          Chandra
        </Name>
        <PlayerType center>
          <Text>Pro Player</Text>
        </PlayerType>
        <Stats>
          <TotalGames>
            <Text medium bold>
              250{' '}
            </Text>
            <Text color="#9a9a9a" bold>
              Games
            </Text>
          </TotalGames>
          <Text>
            <Text medium bold>
              3{' '}
            </Text>
            <Text color="#9a9a9a" bold>
              Purchases
            </Text>
          </Text>
        </Stats>
        <PurchasedGames>
          <Title center medium>
            Purchased Games
          </Title>
          {purchases.map(purchase => (
            <Purchase key={purchase.id}>
              <PurchaseContainer>
                <PurchaseLogo
                  source={{uri: purchase.image}}
                  borderRadius={10}
                />
                <Content>
                  <Text medium>{purchase.name}</Text>
                  <Text color="#9a9a9a">{purchase.sales} sales</Text>
                </Content>
              </PurchaseContainer>
              <Text bold color="#819ee5">{`$ ${purchase.price}`}</Text>
            </Purchase>
          ))}
        </PurchasedGames>
        <Footer>
          <Settings>
            <SettingIcon source={require('../assets/images/settings.png')} />
          </Settings>
          <Logout activeOpacity={1} accessible>
            <Text center medium>
              Logout
            </Text>
          </Logout>
        </Footer>
      </Cover>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #343434;
`;

const Cover = styled.ScrollView`
  margin: 16px 16px 0 16px;
`;

const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50px;
`;

const Name = styled(Text)`
  margin-top: 16px;
`;

const PlayerType = styled.View`
  margin-top: 16px;
  background-color: #819ee5;
  padding: 5px 10px;
  border-radius: 10px;
  align-self: center;
`;

const Stats = styled.View`
  margin-top: 32px;
  flex-direction: row;
  justify-content: center;
`;

const TotalGames = styled(Text)`
  margin-right: 32px;
`;

const PurchasedGames = styled.View`
  margin-top: 24px;
`;

const Title = styled(Text)`
  margin-bottom: 24px;
`;

const Purchase = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const PurchaseContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PurchaseLogo = styled(ProgressiveImage)`
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;

const Content = styled.View`
  margin-left: 32px;
`;

const Footer = styled.View`
  margin: 16px 0;
  flex-direction: row;
`;

const Settings = styled.View`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: #819ee5;
  margin-right: 10px;
  border-radius: 5px;
`;

const Logout = styled.TouchableOpacity`
  background-color: #555;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  flex: 1;
`;

const SettingIcon = styled.Image`
  width: 30px;
  height: 30px;
`;
