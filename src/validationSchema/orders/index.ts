import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  customer_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
