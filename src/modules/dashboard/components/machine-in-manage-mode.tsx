import React from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import styles from '../../manage-categories/components/categroy-in-manage-mode.styles';
import {reduxStore} from '../../../shared/ts-interfaces/shared.types';
import {deleteMachine, updateMachine} from '../../create-machine/redux/actions';
import {categoryFieldPropTypes} from '../../create-category/components/category-field.types';
import DynamicField from '../../create-machine/components/dynamic-field';
import Separator from '../../../shared/components/form-item-separator/separator';
import CustomButton from '../../../shared/components/button/button';
import {colors, dimensions} from '../../../shared/styles/styles';

const MachineInManageMode = (props: {id: string}) => {
  const dispatch = useDispatch();

  const machine =
    useSelector((state: reduxStore) => state.machines).find(
      (item: {id: string}) => item.id === props.id,
    ) || {};

  const category = useSelector((state: reduxStore) => state.categories).find(
    // @ts-ignore
    (item: {id: string}) => item.id === machine.categoryId,
  ) || {
    fields: [],
  };

  const initialValues = {...machine};

  function handleUpdateMachine(values: {}) {
    dispatch(updateMachine({id: props.id, data: values}));
  }

  function handleDeleteMachine() {
    dispatch(deleteMachine({id: props.id}));
  }

  function fieldKeyExtractor(item: categoryFieldPropTypes) {
    return item.name;
  }

  return (
    <View style={styles.mainContainer}>
      <Formik initialValues={initialValues} onSubmit={handleUpdateMachine}>
        {({values, setFieldValue, handleSubmit}) => {
          function renderField({item}: {item: categoryFieldPropTypes}) {
            return (
              <DynamicField
                name={item.name}
                type={item.type}
                // @ts-ignore
                value={values[item.name]}
                setFieldValue={setFieldValue}
              />
            );
          }

          return (
            <View style={styles.container}>
              <FlatList
                data={category.fields}
                renderItem={renderField}
                keyExtractor={fieldKeyExtractor}
                ItemSeparatorComponent={() => <Separator half />}
              />

              <Separator />

              <View style={styles.submitButtonContainer}>
                <CustomButton
                  onPress={handleSubmit}
                  label={'Update Machine'}
                  width={dimensions.windowWidth - 86}
                />
              </View>

              <Separator half />

              <View style={styles.submitButtonContainer}>
                <CustomButton
                  onPress={handleDeleteMachine}
                  label={'Delete Machine'}
                  backgroundColor={colors.error}
                  width={dimensions.windowWidth - 86}
                />
              </View>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default MachineInManageMode;
