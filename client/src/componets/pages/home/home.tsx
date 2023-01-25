import { Navigate } from 'react-router';
import { MyRoutes } from '../../../types/enums';

export const Home = () => {
  return <Navigate to={MyRoutes.CONTACTS} />;
};
