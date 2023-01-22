import styled from 'styled-components';
import { Icon } from '../icon-item/icon-item';
import { IconType } from '../icons';

export enum ButtonVariant {
  FLAT = 'FLAT',
  BORDERED = 'BORDERED',
}

export enum ButtonTheme {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export enum ButtonState {
  DEFAULT = 'DEFAULT',
  ACTIVE = 'ACTIVE',
  HOVER = 'HOVER',
}

type ButtonProps = {
  variant: keyof typeof ButtonVariant;
  theme?: keyof typeof ButtonTheme;
  label?: string;
  icon?: IconType;
  reverse?: boolean;
  onClick?: () => void;
};

const MainButton = styled('div')(({ theme }) => ({
  fontWeight: '400',
  fontSize: '14px',
  cursor: 'pointer',
  height: '40px',
  color: theme.colors.textPrimary,
  p: {
    ':first-letter': { textTransform: 'uppercase' },
  },
}));

const ButtonBorderedPrimary = styled(MainButton)(({ theme }) => ({
  borderRadius: '20px',
  background:
    'linear-gradient(180deg, rgba(60, 60, 60, 1) 0%, rgba(60, 60, 60, 0) 100%)',
  padding: '1px',
  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: '20px',
    padding: '0 8px',
    background:
      'linear-gradient(360deg,rgba(40, 40, 40, 0.7) 0%,rgba(40, 40, 40, 1) 70%)',
  },
  ':hover': {
    background: theme.colors.G50,
  },
  ':active': {
    background: theme.colors.G40,
  },
}));

const ButtonFlatPrimary = styled(MainButton)(({ theme }) => ({
  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    padding: '0 8px',
    backgroundColor: theme.colors.G60,
    ':hover': {
      background: theme.colors.G50,
    },
    ':active': {
      background: theme.colors.G40,
    },
  },
}));

const ButtonFlatSecondary = styled(ButtonFlatPrimary)(({ theme }) => ({
  div: {
    background: theme.colors.G00,
    ':hover': {
      background: theme.colors.G90,
    },
    ':active': {
      background: theme.colors.G80,
    },
  },
}));

const ButtonContent = (props: ButtonProps) => {
  return (
    <div
      style={{
        flexDirection: `${!props?.reverse ? 'row' : 'row-reverse'}`,
      }}
    >
      {props.icon && (
        <Icon icon={props.icon} img={{ style: { margin: '0px 8px' } }} />
      )}
      <p
        style={{
          margin: `${props.label ? '0 8px 0 8px' : '0'}`,
        }}
      >
        {props.label}
      </p>
    </div>
  );
};

export const Button = (props: ButtonProps) => {
  return (
    <>
      {props.variant === ButtonVariant.BORDERED && (
        <ButtonBorderedPrimary onClick={props.onClick}>
          <ButtonContent {...props} />
        </ButtonBorderedPrimary>
      )}
      {props.variant === ButtonVariant.FLAT &&
        (props.theme === ButtonTheme.SECONDARY ? (
          <ButtonFlatSecondary onClick={props.onClick}>
            <ButtonContent {...props} />
          </ButtonFlatSecondary>
        ) : (
          <ButtonFlatPrimary onClick={props.onClick}>
            <ButtonContent {...props} />
          </ButtonFlatPrimary>
        ))}
    </>
  );
};
