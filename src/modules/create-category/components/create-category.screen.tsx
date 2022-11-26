import React from 'react';
import {ScrollView} from 'react-native';
import {Formik} from 'formik';
import Layout from '../../../shared/components/layout/layout';
import CustomTextInput from '../../../shared/components/text-input/text-input';
import styles from './create-category.screen.styles';

const CreateCategoryScreen = () => {
  const initialValues = {title: '', fields: []}; // todo: get initial values from async storage or redux persist

  function handleAddCategory() {
    //
  }

  return (
    <Layout>
      <Formik initialValues={initialValues} onSubmit={handleAddCategory}>
        {({values, setFieldValue}) => {
          function setTitle(text: string) {
            setFieldValue('title', text);
          }

          return (
            <ScrollView contentContainerStyle={styles.container}>
              {/* title */}
              <CustomTextInput
                value={values.title}
                placeholder={'Category Name'}
                onChangeText={setTitle}
              />

              {/* fields */}
            </ScrollView>
          );
        }}
      </Formik>
    </Layout>
  );
};

export default CreateCategoryScreen;
