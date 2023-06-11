import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import RootNavigation from './src/navigation/root';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <RootNavigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
