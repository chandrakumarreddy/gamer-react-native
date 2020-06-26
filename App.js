import 'react-native-gesture-handler';
import React from 'react';
import styled from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './components/screens/HomeScreen';
import GameScreen from './components/screens/GameScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import GameDetails from './components/screens/GameDetails';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function AppTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = require('./components/assets/images/home.png');
              break;
            case 'Game':
              iconName = require('./components/assets/images/game.png');
              break;
            case 'Profile':
              iconName = require('./components/assets/images/profile.png');
              break;
            default:
              break;
          }
          return (
            <TabIconContainer focused={focused}>
              <TabIcon source={iconName} />
            </TabIconContainer>
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#343434',
          borderTopColor: '#343434',
          paddingBottom: 12,
        },
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Game" component={GameScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator headerMode="none" mode="modal">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="GameDetails" component={GameDetails} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppTab />
    </NavigationContainer>
  );
}

const TabIconContainer = styled.View`
  background: ${({focused}) => (focused ? '#819ee5' : '#343434')};
  padding: 8px 16px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;
const TabIcon = styled.Image`
  width: 24px;
  height: 24px;
`;
