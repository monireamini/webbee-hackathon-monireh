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
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';
import Dashboard from './src/modules/dashboard/components/dashboard.screen';
import ManageCategories from './src/modules/manage-categories/components/manage-categories.screen';
import CreateCategory from './src/modules/create-category/components/create-category.screen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ManageCategories">
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen
              name="ManageCategories"
              component={ManageCategories}
            />
            <Stack.Screen name="CreateCategory" component={CreateCategory} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
