import React, {useMemo} from 'react';
import {FlatList, View} from 'react-native';
import {categoryInReduxStore} from '../../create-category/components/create-category.screen.types';
import {useSelector} from 'react-redux';
import {reduxStore} from '../../../shared/ts-interfaces/shared.types';
import Layout from '../../../shared/components/layout/layout';
import {Formik} from 'formik';
import {generateInitValues} from '../../../shared/utils/generate-init-values';
import {categoryFieldPropTypes} from '../../create-category/components/category-field.types';
import DynamicField from './dynamic-field';
import styles from './create-machine.screen.styles';
import CustomButton from '../../../shared/components/button/button';
import Separator from '../../../shared/components/form-item-separator/separator';

// @ts-ignore
const CreateMachineScreen = ({route}) => {
  const fields =
    useSelector((state: reduxStore) => state.categories).find(
      (item: categoryInReduxStore) => item.id === route.params.categoryId,
      // @ts-ignore
    )?.fields || [];

  const initialValues = useMemo(() => {
    return generateInitValues(fields);
  }, [route.params.categoryId]);

  console.log('initialValues: ', initialValues);

  function handleAddMachine() {
    // dispatch(addCategory(values));
    // navigation.goBack();
  }

  function fieldKeyExtractor(item: categoryFieldPropTypes) {
    return item.name;
  }

  return (
    <Layout>
      <Formik initialValues={initialValues} onSubmit={handleAddMachine}>
        {({values, handleSubmit, setFieldValue}) => {
          console.log('values: ', values);

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
                data={fields}
                renderItem={renderField}
                keyExtractor={fieldKeyExtractor}
                ItemSeparatorComponent={() => <Separator half />}
              />

              <Separator />

              <View style={styles.submitButtonContainer}>
                <CustomButton onPress={handleSubmit} label={'Submit Machine'} />
              </View>
            </View>
          );
        }}
      </Formik>
    </Layout>
  );
};

export default CreateMachineScreen;
