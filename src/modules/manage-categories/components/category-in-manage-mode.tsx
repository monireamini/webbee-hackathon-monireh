import React from 'react';
import {createCategoryFormValues} from '../../create-category/components/create-category.screen.types';
import {ArrayHelpers, FieldArray, Formik} from 'formik';
import CategoryFields from '../../create-category/components/category-fields';
import {ScrollView, View} from 'react-native';
import styles from './categroy-in-manage-mode.styles';
import CustomTextInput from '../../../shared/components/text-input/text-input';
import Separator from '../../../shared/components/form-item-separator/separator';
import CustomButton from '../../../shared/components/button/button';
import {colors} from '../../../shared/styles/styles';

const CategoryInManageMode = (props: createCategoryFormValues) => {
  const initialValues = {...props};

  function handleUpdateCategory() {
    //
  }

  return (
    <View style={styles.mainContainer}>
      <Formik initialValues={initialValues} onSubmit={handleUpdateCategory}>
        {({values, setFieldValue, handleSubmit}) => {
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

          function handleSetTitleField() {
            //
          }

          return (
            <>
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

              <View style={styles.submitButtonContainer}>
                <CustomButton
                  onPress={handleSetTitleField}
                  label={`Title Field is: ${values.titleField || ''}`}
                  backgroundColor={colors.beauBlue}
                />
              </View>

              <Separator half />

              <View style={styles.submitButtonContainer}>
                <CustomButton
                  onPress={handleSubmit}
                  label={'Submit Category'}
                />
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default CategoryInManageMode;
