import styled from '../../../theme/styled';
import { breakPoints } from '../../../theme/theme';

export const Header = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px',
  height: '96px',
  h1: {
    ...theme.typography.H1,
    color: theme.colors.primary,
    ':first-letter': {
      textTransform: 'capitalize',
    },
  },
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    padding: '12px',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '1rem',
  },
}));

export const HeaderActions = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1.5rem',
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    padding: '0px 10px',
  },
});

export const HeaderContent = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  button: {
    display: 'none',
  },
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    width: '100%',
    button: {
      display: 'block',
      padding: '10px',
    },
  },
});

export const IconList = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row-reverse',
  cursor: 'pointer',
  gap: '1rem',
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    flexDirection: 'row-reverse',
  },
});

export const Main = styled('main')({
  padding: '12px 12px 12px 24px',
  [`@media screen and (max-width: ${breakPoints.sm})`]: {
    padding: '12px',
  },
});

export const Col = styled('div')({
  padding: '18px',
  height: '96px',
  display: 'flex',
  alignItems: 'center',
  [`@media screen and (max-width: ${breakPoints.md})`]: {
    display: 'none',
  },
});

export const Section = styled('section')({
  maxWidth: '720px',
  width: '100%',
});
