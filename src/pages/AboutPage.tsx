import React from 'react';
import {Text} from 'react-native';
import {Center} from 'native-base';

interface AboutPageProps {}

export const AboutPage: React.FC<AboutPageProps> = ({}) => {
  return (
    <Center flex={1} px="3">
      <Text>AboutPage (Not implemented.)</Text>
    </Center>
  );
};
