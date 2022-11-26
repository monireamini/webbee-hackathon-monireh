import React from 'react';
import {Modal, View} from 'react-native';
// @ts-ignore
import DatePicker from 'react-native-modern-datepicker';
import styles from './date-picker-modal.styles';
import {colors} from '../../styles/styles';

const DatePickerModal = ({
  modalVisible,
  setModalVisible,
  setDate,
}: {
  modalVisible: boolean;
  setModalVisible: Function;
  setDate: Function;
}) => {
  function handleSetDate(date: string) {
    setDate(date);
    setModalVisible(false);
  }

  return (
    <Modal visible={modalVisible} transparent>
      <View style={styles.modalContainer}>
        <DatePicker
          options={{
            backgroundColor: colors.champagne,
            textHeaderColor: colors.gunMetal,
            textDefaultColor: colors.gunMetal,
            selectedTextColor: colors.white,
            mainColor: colors.gunMetal,
            textSecondaryColor: colors.morningBlue,
          }}
          onSelectedChange={handleSetDate}
          mode="calendar"
        />
      </View>
    </Modal>
  );
};

export default DatePickerModal;
