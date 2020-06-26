import React from 'react';
import styled from 'styled-components/native';
import {StatusBar, View} from 'react-native';

import Text from '../shared/Text';
import catergories from '../data/catergoryList';
import gameList from '../data/gamesList';
import ProgressiveImage from '../shared/ProgressiveImage';

export default function HomeScreen({navigation}) {
  const gamesRef = React.useRef();
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const updateCategory = React.useCallback(val => {
    setSelectedCategory(val);
    gamesRef.current.scrollToOffset({x: 0, y: 0});
  }, []);
  const renderGame = game => (
    <Game
      activeOpacity={1}
      onPress={() => navigation.navigate('GameDetails', {game})}>
      <GamePoster source={{uri: game.download_url}} />
      <GameContent background={game.background}>
        <GameLogo source={{uri: game.download_url}} />
        <GameInfo>
          <GameName>{game.name}</GameName>
          <GameDescription>{game.about}</GameDescription>
        </GameInfo>
      </GameContent>
    </Game>
  );
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <View>
          <Text>
            Hello{' '}
            <Text medium heavy>
              Chandra
            </Text>
          </Text>
          <Text large bold>
            Welcome to Gamers
          </Text>
        </View>
        <Avatar source={require('../assets/images/avatar.jpg')} />
      </Header>
      <CatergoryList horizontal={true} showsHorizontalScrollIndicator={false}>
        {catergories.map((category, index) => (
          <CategoryContainer
            highlight={selectedCategory === category}
            key={index}
            activeOpacity={1}
            onPress={() => updateCategory(category)}>
            <Text color={selectedCategory === category ? 'white' : 'black'}>
              {category}
            </Text>
          </CategoryContainer>
        ))}
      </CatergoryList>
      <GameList
        showsVerticalScrollIndicator={false}
        ref={gamesRef}
        data={gameList.filter(
          game =>
            game.category.includes(selectedCategory) ||
            selectedCategory === 'All',
        )}
        renderItem={({item}) => renderGame(item)}
        keyExtractor={item => String(item.id)}
      />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #343434;
`;

const Header = styled.View`
  margin: 16px 16px 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

const CatergoryList = styled.ScrollView`
  margin: 16px 16px 0 16px;
  flex-shrink: 0;
  flex-grow: 0;
`;

const CategoryContainer = styled.TouchableOpacity`
  margin-right: 16px;
  align-items: center;
  background: #819ee5;
  background: ${({highlight}) => (highlight ? '#819ee5' : '#ccc')};
  padding: 5px;
  border-radius: 10px;
`;

const GameList = styled.FlatList`
  margin-top: 16px;
`;

const Game = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: 20px;
`;

const GamePoster = styled(ProgressiveImage)`
  width: 100%;
  height: 300px;
`;

const GameContent = styled.View`
  background: ${({background}) => background};
  margin: -50px 32px 0 32px;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-radius: 10px;
`;

const GameInfo = styled.View`
  margin: 0 32px 0 24px;
`;

const GameLogo = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 6px;
`;

const GameName = styled(Text)``;

const GameDescription = styled(Text)``;
