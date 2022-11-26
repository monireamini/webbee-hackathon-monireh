import React from 'react';
import {ScrollView} from 'react-native';
import {ArrayHelpers, FieldArray, Formik} from 'formik';
import Layout from '../../../shared/components/layout/layout';
import CustomTextInput from '../../../shared/components/text-input/text-input';
import styles from './create-category.screen.styles';
import Separator from '../../../shared/components/form-item-separator/separator';
import CategoryFields from './category-fields';

const CreateCategoryScreen = () => {
  const initialValues = {title: '', fields: []}; // todo: get initial values from async storage or redux persist

  function handleAddCategory() {
    // todo: add category to the redux store
  }

  return (
    <Layout>
      <Formik initialValues={initialValues} onSubmit={handleAddCategory}>
        {({values, setFieldValue}) => {
          function setTitle(text: string) {
            setFieldValue('title', text);
          }

          function renderCategoryFields(arrayHelpers: ArrayHelpers) {
            return (
              <CategoryFields
                fields={values.fields}
                arrayHelpers={arrayHelpers}
              />
            );
          }

          return (
            <ScrollView contentContainerStyle={styles.container}>
              {/* title */}
              <CustomTextInput
                value={values.title}
                placeholder={'Category Name'}
                onChangeText={setTitle}
              />

              <Separator />

              {/* fields */}
              <FieldArray name="fields" render={renderCategoryFields} />
            </ScrollView>
          );
        }}
      </Formik>
    </Layout>
  );
};

export default CreateCategoryScreen;
