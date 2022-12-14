import {View, Text} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Image} from 'react-native';

const OnBoardingScreen = ({navigation}) => {
  return (
    <Onboarding
    onSkip={() => navigation.navigate("HomeStack")}
    onDone={() => navigation.navigate("HomeStack")}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image  source={require('../../../assets/onboarding-img1.png')} />,
          title: 'Welcome house buy and rental',
          subtitle: 'house basic need for humnan being',
        },

        {
            backgroundColor: '#fdeb93',
            image: <Image source={require('../../../assets/onboarding-img2.png')} />,
            title: 'Buying your house simple as click button',
            subtitle: 'Buy house from anyware in world',
          },

          {
            backgroundColor: '#e9bcbe',
            image: <Image source={require('../../../assets/onboarding-img3.png')} />,
            title: 'Betoch making simpler than ever',
            subtitle: 'we have over 1000 customes all over Ethiopian',
          },
      ]}
    />
  );
};

export default OnBoardingScreen;
