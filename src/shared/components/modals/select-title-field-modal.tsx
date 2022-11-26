import React from 'react';
import {Modal, Pressable, Text, View} from 'react-native';
import styles from './select-title-field-modal.styles';
import {categoryFieldPropTypes} from '../../../modules/create-category/components/category-field.types';

const SelectFieldTypeModal = ({
  modalVisible,
  setModalVisible,
  fields,
  setTitleField,
}: {
  modalVisible: boolean;
  setModalVisible: Function;
  fields: categoryFieldPropTypes[];
  setTitleField: Function;
}) => {
  function handleClose() {
    setModalVisible(false);
  }

  return (
    <Modal visible={modalVisible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>
            Select one of the following fields:
          </Text>
          {fields.map((field: categoryFieldPropTypes) => {
            function handleSelectType() {
              setModalVisible(false);
              setTitleField(field.name);
            }

            return (
              <Pressable
                key={field.name}
                style={styles.typeButton}
                onPress={handleSelectType}>
                <Text style={styles.typeButtonText}>{field.name}</Text>
              </Pressable>
            );
          })}

          <Pressable style={styles.closeButtonContainer} onPress={handleClose}>
            <Text style={styles.closeButton}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default SelectFieldTypeModal;
