import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListingDetailsScreen, {
  ListingDetails,
} from '../screens/ListingDetailsScreen';
import ListingsScreen from '../screens/ListingsScreen';

export type FeedStackParamList = {
  Listings: undefined;
  ListingDetails: { item: ListingDetails };
};

const Stack = createStackNavigator<FeedStackParamList>();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
