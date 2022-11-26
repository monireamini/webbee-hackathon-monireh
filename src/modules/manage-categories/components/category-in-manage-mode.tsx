import React from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {ArrayHelpers, FieldArray, Formik} from 'formik';
import * as yup from 'yup';
import {
  categoryInReduxStore,
  createCategoryFormValues,
} from '../../create-category/components/create-category.screen.types';
import CategoryFields from '../../create-category/components/category-fields';
import styles from './categroy-in-manage-mode.styles';
import CustomTextInput from '../../../shared/components/text-input/text-input';
import Separator from '../../../shared/components/form-item-separator/separator';
import CustomButton from '../../../shared/components/button/button';
import {colors} from '../../../shared/styles/styles';
import validations from '../../../shared/utils/validations';
import ErrorMessage from '../../../shared/components/error-message/error-message';
import {
  deleteCategory,
  updateCategory,
} from '../../create-category/redux/actions';

const CategoryInManageMode = (props: categoryInReduxStore) => {
  const dispatch = useDispatch();

  const initialValues = {...props};

  const validationSchema = yup.object().shape({
    title: validations.title,
    fields: validations.fields,
    titleField: validations.titleField,
  });

  function handleUpdateCategory(values: createCategoryFormValues) {
    dispatch(updateCategory({id: props.id, data: values}));
  }

  function handleDeleteCategory() {
    dispatch(deleteCategory({id: props.id}));
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
              <View style={styles.container}>
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
              </View>

              <View style={styles.submitButtonContainer}>
                <CustomButton
                  onPress={handleSetTitleField}
                  label={
                    values.titleField
                      ? `Title Field is: ${values.titleField}`
                      : 'Click here to select the title field'
                  }
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

              <Separator half />

              <View style={styles.submitButtonContainer}>
                <CustomButton
                  onPress={handleDeleteCategory}
                  label={'Delete Category'}
                  backgroundColor={colors.error}
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
