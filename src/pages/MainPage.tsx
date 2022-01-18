import React from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import {VStack, useColorModeValue, Fab, Icon} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';

import {Masthead, Navbar} from 'components';

const DATE_FORMAT = 'ddd MMM D';

interface MainPageProps {}
export const MainPage: React.FC<MainPageProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Masthead
        title={moment().format(DATE_FORMAT)}
        image={require('../assets/images/masthead.png.webp')}
      >
        <Navbar />
      </Masthead>
      <VStack
        flex={1}
        space={1}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt={-5}
        borderTopRadius={20}
        pt="20px"
      >
        <Text>Some content here...</Text>
      </VStack>
      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={
          <Icon color="white" as={<Feather name="chevron-right" />} size="sm" />
        }
        colorScheme={useColorModeValue('blue', 'darkBlue')}
        bg={useColorModeValue('blue.500', 'blue.400')}
        onPress={() => {
          Alert.alert('Function not implemented.');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
