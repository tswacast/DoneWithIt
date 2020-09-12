import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, Image, Text, Button } from 'react-native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import { Picker } from '@react-native-community/picker';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import AppButton from './app/components/AppButton';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import BatchedBridge from 'react-native/Libraries/BatchedBridge/BatchedBridge';
import AuthNavigator from './app/navigators/AuthNavigator';
import AppNavigator from './app/navigators/AppNavigator';
import navigationTheme from './app/navigators/navigationTheme';

type RootStackParamList = {
  Tweets: undefined;
  TweetDetails: { id: number };
};

interface TweetsProps {
  navigation: StackNavigationProp<RootStackParamList, 'Tweets'>;
}
const Tweets = ({ navigation }: TweetsProps) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
    />
  </Screen>
);

interface TweetDetailsProps {
  navigation: StackNavigationProp<RootStackParamList, 'TweetDetails'>;
  route: RouteProp<RootStackParamList, 'TweetDetails'>;
}
const TweetDetails = ({ route }: TweetDetailsProps) => (
  <Screen>
    <Text>Tweet Details: {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: 'dodgerblue' },
      headerTintColor: 'white',
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({
        title: `Tweet ${route.params.id} Details`,
      })}
    />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'tomato',
      activeTintColor: 'white',
      inactiveBackgroundColor: 'lightgrey',
      inactiveTintColor: 'black',
    }}
  >
    <Tab.Screen
      name="Feed"
      component={StackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
