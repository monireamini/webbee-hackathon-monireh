import React, {useState} from 'react';
import {TextInput, Text, View, Pressable, Modal} from 'react-native';
import {inputPropTypes} from './field-input.types';
import styles from './field-input.styles';
import {colors} from '../../styles/styles';
import fieldTypes from '../../../data/field-types';
import CustomButton from '../button/button';

const FieldInput = (props: inputPropTypes) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  function handleShowSelectTypeModal() {
    setModalVisible(true);
  }

  function handleAdd() {
    if (name && type) {
      props.handleAddField({name, type});
      setName('');
      setType('');
    }
  }

  return (
    <>
      <View style={styles.mainRow}>
        {/* field name */}
        <View style={styles.container}>
          <View style={styles.placeholder}>
            {!!name && <Text style={styles.placeholderText}>Field Name</Text>}
          </View>
          <TextInput
            value={name}
            placeholder={'Enter Field Name'}
            onChangeText={setName}
            style={styles.input}
            placeholderTextColor={colors.morningBlue}
          />
        </View>

        {/* field type*/}
        <View style={styles.typeMainContainer}>
          <View style={styles.placeholder}>
            {!!type && <Text style={styles.placeholderText}>Field Type</Text>}
          </View>
          <Pressable
            style={styles.typeContainer}
            onPress={handleShowSelectTypeModal}>
            <Text style={type ? styles.typeTextBlack : styles.typeText}>
              {type || 'Select Field Type'}
            </Text>
          </Pressable>
        </View>
      </View>

      {/* submit button */}
      <View style={styles.submitButtonContainer}>
        <CustomButton onPress={handleAdd} label={'Add Field'} />
      </View>

      {/* select type modal */}
      <Modal visible={modalVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Select one of the following data type:
            </Text>
            {fieldTypes.map((typeItem: string) => {
              function handleSelectType() {
                setModalVisible(false);
                setType(typeItem);
              }

              return (
                <Pressable
                  key={typeItem}
                  style={styles.typeButton}
                  onPress={handleSelectType}>
                  <Text>{typeItem}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      </Modal>
    </>
  );
};

export default FieldInput;
