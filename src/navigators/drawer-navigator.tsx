import React from 'react';
import {useSelector} from 'react-redux';
import {categoryInReduxStore} from '../modules/create-category/components/create-category.screen.types';
import FilteredCategory from '../modules/filtered-category/filtered-category.screen';
import {reduxStore} from '../shared/ts-interfaces/shared.types';
import {dimensions} from '../shared/styles/styles';
import Dashboard from '../modules/dashboard/components/dashboard.screen';
import ManageCategories from '../modules/manage-categories/components/manage-categories.screen';
import CreateCategory from '../modules/create-category/components/create-category.screen';
import CreateMachine from '../modules/create-machine/components/create-machine.screen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const categories = useSelector((state: reduxStore) => state.categories);

  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        drawerType: dimensions.windowWidth >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      {categories.map((category: categoryInReduxStore) => {
        return (
          <Drawer.Screen
            key={category.id}
            name={category.title}
            component={FilteredCategory}
            initialParams={{id: category.id}}
          />
        );
      })}
      <Drawer.Screen name="ManageCategories" component={ManageCategories} />
      <Drawer.Screen
        name="CreateCategory"
        component={CreateCategory}
        options={{drawerItemStyle: {height: 0}}}
      />
      <Drawer.Screen
        name="CreateMachine"
        component={CreateMachine}
        options={{drawerItemStyle: {height: 0}}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
