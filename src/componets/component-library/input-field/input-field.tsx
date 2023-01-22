import React from 'react';
import styled from '../../../theme/styled';

const MainInputField = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '24px 0',
  label: {
    fontFamily: theme.fonts.lexendDeca,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.01em',
    color: theme.colors.textSecondary,
    marginBottom: '4px',
    ':first-letter': { textTransform: 'uppercase' },
  },
  input: {
    color: theme.colors.textPrimary,
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
}));

type InputFieldProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
};

export const InputField = (props: InputFieldProps) => {
  return (
    <MainInputField>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} id={props.id} placeholder={props.placeholder} />
    </MainInputField>
  );
};
