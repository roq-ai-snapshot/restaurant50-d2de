import * as yup from 'yup';

export const restaurantTableValidationSchema = yup.object().shape({
  restaurant_id: yup.string().nullable().required(),
  status_id: yup.string().nullable().required(),
});
