import React, {useState} from 'react';
import {View} from 'react-native';
import {ArrayHelpers, FieldArray, Formik} from 'formik';
import * as yup from 'yup';
import Layout from '../../../shared/components/layout/layout';
import CustomTextInput from '../../../shared/components/text-input/text-input';
import styles from './create-category.screen.styles';
import Separator from '../../../shared/components/form-item-separator/separator';
import CategoryFields from './category-fields';
import CustomButton from '../../../shared/components/button/button';
import {colors} from '../../../shared/styles/styles';
import {useDispatch} from 'react-redux';
import {addCategory} from '../redux/actions';
import {
  createCategoriesPropTypes,
  createCategoryFormValues,
} from './create-category.screen.types';
import validations from '../../../shared/utils/validations';
import ErrorMessage from '../../../shared/components/error-message/error-message';
import SelectTitleFieldModal from '../../../shared/components/modals/select-title-field-modal';

const CreateCategoryScreen = ({navigation}: createCategoriesPropTypes) => {
  const dispatch = useDispatch();

  const [titleFieldModalVisible, setTitleFieldModalVisible] = useState(false);

  const initialValues = {title: '', fields: [], titleField: ''}; // todo: get initial values from async storage or redux persist

  const validationSchema = yup.object().shape({
    title: validations.title,
    fields: validations.fields,
    titleField: validations.titleField,
  });

  function handleAddCategory(values: createCategoryFormValues) {
    dispatch(addCategory(values));
    navigation.goBack();
  }

  return (
    <Layout>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleAddCategory}>
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

          function handleShowSelectTitleFieldModal() {
            setTitleFieldModalVisible(true);
          }

          function handleSetTitleField(fieldName: string) {
            setFieldValue('titleField', fieldName);
            setTitleFieldModalVisible(false);
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
                  onPress={handleShowSelectTitleFieldModal}
                  label={`Title Field is: ${values.titleField || ''}`}
                  backgroundColor={colors.gunMetal}
                />

                <SelectTitleFieldModal
                  modalVisible={titleFieldModalVisible}
                  setModalVisible={setTitleFieldModalVisible}
                  fields={values.fields}
                  setTitleField={handleSetTitleField}
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
    </Layout>
  );
};

export default CreateCategoryScreen;
