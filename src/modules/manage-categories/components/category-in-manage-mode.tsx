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
import * as yup from 'yup';
import validations from '../../../shared/utils/validations';
import ErrorMessage from '../../../shared/components/error-message/error-message';

const CategoryInManageMode = (props: createCategoryFormValues) => {
  const initialValues = {...props};

  const validationSchema = yup.object().shape({
    title: validations.title,
    fields: validations.fields,
    titleField: validations.titleField,
  });

  function handleUpdateCategory() {
    //
  }

  return (
    <View style={styles.mainContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleUpdateCategory}>
        {({values, errors, setFieldValue, handleSubmit}) => {
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
            // todo
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
                <ErrorMessage text={errors.title || ''} />

                <Separator />

                {/* fields */}
                <FieldArray name="fields" render={renderCategoryFields} />
                <ErrorMessage
                  text={typeof errors.fields === 'string' ? errors.fields : ''}
                />
              </ScrollView>

              <View style={styles.submitButtonContainer}>
                <CustomButton
                  onPress={handleSetTitleField}
                  label={`Title Field is: ${values.titleField || ''}`}
                  backgroundColor={colors.gunMetal}
                />
              </View>

              <Separator half />

              <View style={styles.submitButtonContainer}>
                <CustomButton
                  onPress={handleSubmit}
                  label={'Update Category'}
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
