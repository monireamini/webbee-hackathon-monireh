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
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Dashboard from './src/modules/dashboard/components/dashboard.screen';
import ManageCategories from './src/modules/manage-categories/components/manage-categories.screen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ManageCategories">
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ManageCategories" component={ManageCategories} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
