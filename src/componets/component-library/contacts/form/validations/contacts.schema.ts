import * as yup from 'yup';
import { ContactInput } from '../../../../../apollo/graphql-generated/types';

export const contactSchema = yup.object().shape({
  name: yup.string().required('Name is required!'),
  email: yup
    .string()
    .email('Email must be a valid email!!')
    .required('Email is required!'),
  phone: yup
    .string()
    .required('Phone is required!')
    .typeError('Phone number must be numeric!'),
});

type ValidateFormPayload = {
  data?: Omit<ContactInput, 'image'>;
  error?: string[];
};

export const validateForm = async (
  input: Record<string, unknown>
): Promise<ValidateFormPayload> => {
  try {
    const res = await contactSchema.validate(input);
    if (res) {
      return {
        data: {
          name: res.name,
          email: res.email,
          phone: res.phone,
        },
      };
    } else throw new Error('Unknown Error');
  } catch (err: any) {
    return { error: [...err.errors] };
  }
};
