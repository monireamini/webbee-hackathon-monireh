import React from 'react';
import {Modal, Pressable, Text, View} from 'react-native';
import styles from './select-field-type-modal.styles';
import fieldTypes from '../../../data/field-types';

const SelectFieldTypeModal = ({
  modalVisible,
  setModalVisible,
  setType,
}: {
  modalVisible: boolean;
  setModalVisible: Function;
  setType: Function;
}) => {
  function handleClose() {
    setModalVisible(false);
  }

  return (
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
                <Text style={styles.typeButtonText}>{typeItem}</Text>
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
