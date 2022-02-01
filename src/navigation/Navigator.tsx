import React, {useEffect, useState} from 'react';
import {CameraPermissionStatus, Camera} from 'react-native-vision-camera';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Sidebar from 'components/Sidebar';
import {CameraPage} from 'pages/CameraPage';
import {MainPage} from 'pages/MainPage';
import {MediaPage} from 'pages/MediaPage';
import {PermissionsPage} from 'pages/PermissionsPage';
import {AboutPage} from 'pages/AboutPage';
import {Routes} from 'Routes';

const Stack = createNativeStackNavigator<Routes>();
const MainStack = () => {
  const [cameraPermission, setCameraPermission] =
    useState<CameraPermissionStatus>();
  const [microphonePermission, setMicrophonePermission] =
    useState<CameraPermissionStatus>();

  useEffect(() => {
    Camera.getCameraPermissionStatus().then(setCameraPermission);
    Camera.getMicrophonePermissionStatus().then(setMicrophonePermission);
  }, []);

  console.log(
    `Re-rendering Navigator. Camera: ${cameraPermission} | Microphone: ${microphonePermission}`,
  );

  if (cameraPermission == null || microphonePermission == null) {
    // still loading
    return null;
  }

  const showPermissionsPage =
    cameraPermission !== 'authorized' ||
    microphonePermission === 'not-determined';
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarStyle: 'dark',
        animationTypeForReplace: 'push',
      }}
      initialRouteName={showPermissionsPage ? 'PermissionsPage' : 'MainPage'}
    >
      <Stack.Screen name="PermissionsPage" component={PermissionsPage} />
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="CameraPage" component={CameraPage} />
      <Stack.Screen
        name="MediaPage"
        component={MediaPage}
        options={{
          animation: 'none',
          presentation: 'transparentModal',
        }}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
export const Navigator = ({}) => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={props => <Sidebar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: '#00000000',
      }}
    >
      <Drawer.Screen name="Main" component={MainStack} />
      <Drawer.Screen name="About" component={AboutPage} />
    </Drawer.Navigator>
  );
};
