import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
import defaultStyles from '../config/styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { AccountStackParamList } from '../navigators/AccountNavigator';
import { TouchableOpacity } from 'react-native-gesture-handler';

const user = {
  name: 'Tom Wacaster',
  email: 'tswacaster@gmail.com',
  image: require('../assets/mosh.jpg'),
};

const menuItems: {
  title: string;
  routeName?: 'Messages';
  icon: { name: string; backgroundColor: string };
}[] = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: defaultStyles.colors.primary,
    },
  },
  {
    title: 'My Messages',
    routeName: 'Messages',
    icon: { name: 'email', backgroundColor: defaultStyles.colors.secondary },
  },
];

interface AccountScreenProps {
  navigation: StackNavigationProp<AccountStackParamList, 'Account'>;
}

const AccountScreen = ({ navigation }: AccountScreenProps) => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem title={user.name} subTitle={user.email} image={user.image} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              title={item.title}
              onPress={() =>
                item.routeName && navigation.navigate(item.routeName)
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
          title="Log Out"
        />
      </View>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: 'white',
  },
  screen: {
    backgroundColor: defaultStyles.colors.light,
  },
});
