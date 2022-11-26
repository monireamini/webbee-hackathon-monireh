import * as types from './types';
import {reduxAction} from '../../../shared/ts-interfaces/shared.types';
import {uniqueId} from '../../../shared/utils/uuid';
import {machineInReduxStore} from '../components/create-machine.screen.types';

const machines = (state = [], action: reduxAction) => {
  switch (action.type) {
    case types.ADD_MACHINE:
      return [{id: uniqueId(), ...action.payload}, ...state];

    case types.DELETE_MACHINE:
      return [
        ...state.filter(
          (machine: machineInReduxStore) => machine.id !== action.payload.id,
        ),
      ];

    case types.UPDATE_MACHINE:
      return [
        ...state.map((machine: machineInReduxStore) =>
          machine.id === action.payload.id ? action.payload.data : machine,
        ),
      ];

    default:
      return state;
  }
};

export default machines;
