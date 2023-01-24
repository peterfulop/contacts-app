import styled from '../../../../../theme/styled';

export const Form = styled('form')(({ theme }) => ({
  h2: {
    ...theme.typography.H2,
    color: theme.colors.primary,
  },
  small: {
    ...theme.typography.P,
    color: theme.colors.error,
    textAlign: 'center',
  },
}));

export const FormActions = styled('div')({
  marginTop: '24px',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '8px',
});
