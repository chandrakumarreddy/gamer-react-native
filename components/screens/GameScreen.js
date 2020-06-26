import React from 'react';
import styled from 'styled-components/native';

import Text from '../shared/Text';
import popularGames from '../data/popularGames';
import liveGames from '../data/liveGames';
import ProgressiveImage from '../shared/ProgressiveImage';
import DismissKeyboard from '../shared/DismissKeyboard';

export default function GameScreen() {
  const renderGame = React.useCallback(
    game => (
      <LiveGame>
        <LiveGameLogo source={{uri: game.image}} borderRadius={10} />
        <GameContent>
          <GameTitle>{game.name}</GameTitle>
          <LiveText>Live</LiveText>
        </GameContent>
      </LiveGame>
    ),
    [],
  );
  return (
    <DismissKeyboard>
      <Container>
        <Cover>
          <Text large heavy>
            Streaming
          </Text>
          <SearchContainer>
            <Search
              placeholder="Search live streams or games"
              placeholderTextColor="#ccc"
            />
            <SearchIcon
              source={{
                uri: 'https://img.icons8.com/android/24/000000/search.png',
              }}
            />
          </SearchContainer>
          <PopularGamesContainer>
            <Text heavy>Popular Games</Text>
            <PopularGames
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {popularGames.map(game => (
                <PopularGame key={game.id}>
                  <GameLogo
                    borderRadius={8}
                    source={{uri: game.logo}}
                    resizeMode="cover"
                  />
                </PopularGame>
              ))}
            </PopularGames>
          </PopularGamesContainer>
        </Cover>
        <LiveGames>
          <Title>
            <Text bold>Live Now</Text>
            <Text bold>See All</Text>
          </Title>
          <LiveGamesContainer
            showsVerticalScrollIndicator={false}
            data={liveGames}
            renderItem={({item}) => renderGame(item)}
            keyExtractor={item => String(item.id)}
          />
        </LiveGames>
      </Container>
    </DismissKeyboard>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background: #343434;
`;

const Cover = styled.View`
  padding: 32px 16px 0 16px;
`;

const Search = styled.TextInput`
  background: #444;
  padding: 16px;
  border-radius: 32px;
  color: white;
  font-size: 16px;
`;

const SearchContainer = styled.View`
  margin-top: 16px;
  justify-content: center;
  position: relative;
`;

const SearchIcon = styled.Image`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 20px;
`;

const PopularGamesContainer = styled.View`
  margin-top: 20px;
`;

const PopularGames = styled.ScrollView`
  margin-top: 16px;
  flex-grow: 0;
  flex-shrink: 0;
`;

const PopularGame = styled.View`
  margin-right: 16px;
`;

const GameLogo = styled(ProgressiveImage)`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

const LiveGames = styled.View`
  margin-top: 16px;
  padding: 0 16px;
`;

const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LiveGamesContainer = styled.FlatList`
  margin-top: 16px;
  margin-bottom: 200px;
`;

const LiveGame = styled.View`
  margin-bottom: 16px;
  width: 100%;
  height: 300px;
`;

const LiveGameLogo = styled(ProgressiveImage)`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

const GameContent = styled.View`
  position: absolute;
  top: 20px;
  right: 20px;
  flex-direction: row;
  align-items: center;
`;

const GameTitle = styled(Text)`
  margin-right: 10px;
  background-color: #819ee5;
  padding: 5px 10px;
`;

const LiveText = styled(Text)`
  background-color: #e62117;
  padding: 5px 10px;
`;
