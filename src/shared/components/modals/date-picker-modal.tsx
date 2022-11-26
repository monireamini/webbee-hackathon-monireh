import React from 'react';
import {Modal, Platform, View} from 'react-native';
// @ts-ignore
import Calendar from 'react-native-calendar-datepicker';
import styles from './date-picker-modal.styles';
import {colors} from '../../styles/styles';
import moment, {Moment} from 'moment';

const DatePickerModal = ({
  modalVisible,
  setModalVisible,
  setDate,
}: {
  modalVisible: boolean;
  setModalVisible: Function;
  setDate: Function;
}) => {
  function handleSetDate(date: Moment) {
    const dateString = moment(date).format('YYYY/MM/DD');
    setDate(dateString);
    setModalVisible(false);
  }

  return (
    <Modal visible={modalVisible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Calendar
            onChange={handleSetDate}
            minDate={moment().subtract(2, 'months')}
            maxDate={moment().add(10, 'years').startOf('day')}
            barText={{color: colors.gunMetal}}
            dayText={{color: colors.gunMetal}}
            dayDisabledText={{color: colors.disabled}}
            dayHeaderText={{color: colors.gunMetal}}
            dayView={{height: Platform.OS === 'android' ? 32 : undefined}}
          />
        </View>
      </View>
    </Modal>
  );
};

export default DatePickerModal;
