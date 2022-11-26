/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';
import Dashboard from './src/modules/dashboard/components/dashboard.screen';
import ManageCategories from './src/modules/manage-categories/components/manage-categories.screen';
import CreateCategory from './src/modules/create-category/components/create-category.screen';
import CreateMachine from './src/modules/create-machine/create-machine.screen';
import {dimensions} from './src/shared/styles/styles';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
              drawerType: dimensions.windowWidth >= 768 ? 'permanent' : 'front',
            }}>
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen
              name="ManageCategories"
              component={ManageCategories}
            />
            <Drawer.Screen name="CreateCategory" component={CreateCategory} />
            <Drawer.Screen name="CreateMachine" component={CreateMachine} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
