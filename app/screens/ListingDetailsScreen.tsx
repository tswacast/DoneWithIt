import React from 'react';
import { StyleSheet, Image, View, ImageSourcePropType } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import { FeedStackParamList } from '../navigators/FeedNavigator';

export interface ListingDetails {
  id: number;
  title: string;
  price: number;
  image: ImageSourcePropType;
}

interface ListingDetailsScreenPops {
  route: RouteProp<FeedStackParamList, 'ListingDetails'>;
}
const ListingDetailsScreen = ({ route }: ListingDetailsScreenPops) => {
  const item = route.params.item;
  return (
    <Screen>
      <View>
        <Image style={styles.image} source={item.image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{item.title}</AppText>
          <AppText style={styles.price}>${item.price}</AppText>
          <View style={styles.userContainer}>
            <ListItem
              image={require('../assets/mosh.jpg')}
              title="Mosh"
              subTitle="5 Listings"
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  },
});
