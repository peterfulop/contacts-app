import styled from '../../../theme/styled';

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
}));

export const HeaderActions = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1.5rem',
});

export const Main = styled('main')({
  padding: '12px 24px',
});

export const Col = styled('div')({
  padding: '24px',
  height: '96px',
  display: 'flex',
  alignItems: 'center',
});

export const Section = styled('section')({
  maxWidth: '720px',
  width: '100%',
});
