export interface reduxStore {
  categories: [];
}

export interface reduxAction {
  type: string;
  payload: {
    id?: string;
  };
}
