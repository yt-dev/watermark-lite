import React, {useCallback} from 'react';
import {HStack, IconButton} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {Alert} from 'react-native';

const Navbar = () => {
  const navigation = useNavigation<DrawerNavigationProp<{}>>();

  const handlePressMenuButton = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);
  const handlePressSettingsButton = useCallback(() => {
    Alert.alert('Function not implemented.');
  }, []);

  return (
    <HStack
      w="full"
      h={40}
      alignItems="center"
      alignContent="center"
      justifyContent="space-between"
      p={4}
    >
      <IconButton
        onPress={handlePressMenuButton}
        borderRadius={100}
        _icon={{
          as: Feather,
          name: 'menu',
          size: 6,
          color: 'white',
        }}
      />
      <IconButton
        onPress={handlePressSettingsButton}
        borderRadius={100}
        _icon={{
          as: Feather,
          name: 'settings',
          size: 6,
          color: 'white',
        }}
      />
    </HStack>
  );
};

export default Navbar;
