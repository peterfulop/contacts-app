import { Link } from 'react-router-dom';
import styled from '../../../theme/styled';
import { MyRoutes } from '../../../types/enums';

const NotFound = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '24px',
  textAlign: 'center',
  width: '100%',
  a: {
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    backgroundColor: theme.colors.G60,
    color: theme.colors.primary,
    borderRadius: '8px',
    padding: '1rem',
    margin: '1rem',
    ':hover': {
      background: theme.colors.G50,
    },
    ':active': {
      background: theme.colors.G40,
    },
  },
}));

export const NotFoundPage = () => {
  return (
    <NotFound>
      <h2>Page Not Found!</h2>
      <p>Return to the Contacts page:</p>
      <Link to={MyRoutes.CONTACTS}>Contacts</Link>
    </NotFound>
  );
};
