import {v4 as uuidv4} from 'uuid';
import moment from 'moment';

export function uniqueId() {
  try {
    return uuidv4();
  } catch {
    return moment().unix();
  }
}
