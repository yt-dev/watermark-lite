import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';

import {Navigator} from 'navigation/Navigator';

export function App(): React.ReactElement | null {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <NativeBaseProvider>
        <Navigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
