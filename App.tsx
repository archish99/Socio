import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigation from './src/navigation/root';
import {persistor, store} from './src/redux/store';
import {navigationRef} from './src/utils/helpers/navigationService';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NativeBaseProvider>
            <RootNavigation />
          </NativeBaseProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
