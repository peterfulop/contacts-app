import { Link } from 'react-router-dom';
import { translate } from '../../../helpers/translate/translate';
import { TEXT } from '../../../helpers/translate/translate-object';
import styled from '../../../theme/styled';
import { MyRoutes } from '../../../types/enums';

const NotFound = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
  height: '100vh',
  h2: {
    ...theme.typography.H2,
  },
  h3: {
    ...theme.typography.H3,
    marginTop: '1rem',
  },
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
      <h2>{translate(TEXT.pages.notFound.labels.title)}</h2>
      <h3>{translate(TEXT.pages.notFound.labels.content)}</h3>
      <Link to={MyRoutes.CONTACTS}>
        {translate(TEXT.pages.contacts.labels.title)}
      </Link>
    </NotFound>
  );
};
