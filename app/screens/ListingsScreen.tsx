import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { FeedStackParamList } from '../navigators/FeedNavigator';

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../assets/couch.jpg'),
  },
];

interface ListingsScreenProps {
  navigation: StackNavigationProp<FeedStackParamList, 'Listings'>;
}
const ListingsScreen = ({ navigation }: ListingsScreenProps) => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ListingDetails', { item })}
          >
            <Card
              title={item.title}
              subTitle={`$${item.price}`}
              image={item.image}
            />
          </TouchableOpacity>
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
