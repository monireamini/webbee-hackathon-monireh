import * as types from './types';

export function addMachine(data: {}) {
  return {
    type: types.ADD_MACHINE,
    payload: data,
  };
}

export function deleteMachine({id}: {id: string}) {
  return {
    type: types.DELETE_MACHINE,
    payload: {id},
  };
}

export function updateMachine({id, data}: {id: string; data: {}}) {
  return {
    type: types.UPDATE_MACHINE,
    payload: {id, data},
  };
}
