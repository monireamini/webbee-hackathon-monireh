import React, {useState} from 'react';
import {TextInput, Text, View, Pressable, Modal} from 'react-native';
import {inputPropTypes} from './field-input.types';
import styles from './field-input.styles';
import {colors} from '../../styles/styles';
import fieldTypes from '../../../data/field-types';

const FieldInput = (props: inputPropTypes) => {
  const {value, placeholder, onChangeText, keyboardType = 'default'} = props;

  const [modalVisible, setModalVisible] = useState(false);

  function handleShowSelectTypeModal() {
    setModalVisible(true);
  }

  return (
    <>
      <View style={styles.mainRow}>
        {/* field name */}
        <View style={styles.container}>
          <View style={styles.placeholder}>
            {!!value && (
              <Text style={styles.placeholderText}>{placeholder}</Text>
            )}
          </View>
          <TextInput
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            style={styles.input}
            placeholderTextColor={colors.morningBlue}
          />
        </View>

        {/* field type*/}
        <Pressable
          style={styles.typeContainer}
          onPress={handleShowSelectTypeModal}>
          <Text style={styles.typeText}>Field Type</Text>
        </Pressable>

        {/* remove button */}
        <View style={styles.removeButtonContainer} />
      </View>

      {/* select type modal */}
      <Modal visible={modalVisible} animationType={'slide'} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Select one of the following data type:
            </Text>
            {fieldTypes.map((type: string) => {
              function handleSelectType() {
                setModalVisible(false);
                // setFieldType(type);
              }

              return (
                <Pressable style={styles.typeButton} onPress={handleSelectType}>
                  <Text>{type}</Text>
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
