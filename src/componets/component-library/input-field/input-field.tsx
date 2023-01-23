import React from 'react';
import styled from '../../../theme/styled';

const MainInputField = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '12px 0',
  label: {
    fontFamily: theme.fonts.lexendDeca,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.01em',
    color: theme.colors.secondary,
    marginBottom: '4px',
    ':first-letter': { textTransform: 'uppercase' },
  },
  input: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.lexendDeca,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '18px',
    padding: '11px 12px',
    borderRadius: '8px',
    outline: 'none',
    background: theme.colors.G80,
    border: `1px solid ${theme.colors.G60}`,
    ':first-letter': { textTransform: 'uppercase' },
    ':hover': {
      border: `1px solid ${theme.colors.G30}`,
    },
    ':active, :focus': {
      border: `1px solid ${theme.colors.G10}`,
      backgroundColor: theme.colors.G60,
    },
  },
  small: {
    color: theme.colors.secondary,
    margin: '5px',
  },
}));

type InputFieldProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  errorMessage?: string;
  onChange?: React.InputHTMLAttributes<HTMLInputElement>;
};

export const InputField = (props: InputFieldProps) => {
  return (
    <MainInputField>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        {...props}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
      />
      <small>{props.errorMessage}</small>
    </MainInputField>
  );
};
