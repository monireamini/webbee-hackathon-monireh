import * as yup from 'yup';

const validations = {
  title: yup
    .string()
    .min(2, 'Title must be at least 2 characters.')
    .max(50, 'Title must be at most 50 characters.')
    .required('Title is required.'),
  fields: yup.array().min(1, 'At least one field is required.'),
  // titleField: yup.string().min(1).required('title field is required'),
  titleField: yup.string(),
};

export default validations;
