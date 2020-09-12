import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import { useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from '../navigators/AuthNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

interface WelcomeScreenProps {
  navigation: StackNavigationProp<AuthStackParamList, 'Welcome'>;
}
const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  return (
    <Screen>
      <ImageBackground
        blurRadius={2}
        style={styles.background}
        source={require('../assets/background.jpg')}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/logo-red.png')}
          />
          <Text style={styles.tagLine}>Sell Stuff You Don't Need</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton
            title="Login"
            onPress={() => navigation.navigate('Login')}
          />
          <AppButton
            title="Register"
            color="secondary"
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </ImageBackground>
    </Screen>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
  },
  tagLine: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
