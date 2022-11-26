export interface reduxStore {
  categories: [];
  machines: [];
}

export interface reduxAction {
  type: string;
  payload: {
    id?: string;
    data?: object;
  };
}
