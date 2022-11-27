import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {categoryInReduxStore} from '../../create-category/components/create-category.screen.types';
import styles from './category-view.styles';
import CustomButton from '../../../shared/components/button/button';
import {colors, numColumns} from '../../../shared/styles/styles';
import {reduxStore} from '../../../shared/ts-interfaces/shared.types';
import MachineInManageMode from './machine-in-manage-mode';

const CategoryView = (
  props: categoryInReduxStore & {navigation: {navigate: Function}},
) => {
  const machines = useSelector((state: reduxStore) => state.machines).filter(
    (machine: {categoryId: string}) => machine.categoryId === props.id,
  );

  function handleNavigateToAddMachine() {
    props.navigation.navigate('CreateMachine', {categoryId: props.id});
  }

  function renderMachineInEditMode({item}: {item: {id: string}}) {
    return <MachineInManageMode id={item.id} />;
  }

  function machineKeyExtractor(item: {id: string}) {
    return item.id;
  }

  return (
    <View style={styles.categoryContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <CustomButton
          onPress={handleNavigateToAddMachine}
          label={'Add new Item'}
          width={'40%'}
          backgroundColor={colors.gunMetal}
        />
      </View>

      {machines?.length === 0 ? (
        <View style={styles.emptyPlaceholder}>
          <Text style={styles.emptyPlaceholderTitle}>No Machines</Text>
          <Text style={styles.emptyPlaceholderDescription}>
            Add the first one by clicking on the add button!
          </Text>
        </View>
      ) : (
        <FlatList
          numColumns={numColumns}
          data={machines}
          renderItem={renderMachineInEditMode}
          keyExtractor={machineKeyExtractor}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

export default CategoryView;
