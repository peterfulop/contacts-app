import { Link } from 'react-router-dom';
import { MyRoutes } from '../../../types/enums';

export const NotFoundPage = () => {
  return (
    <div>
      <h2>Page Not Found!</h2>
      <p>Return to the Contacts page:</p>
      <Link to={MyRoutes.CONTACTS}>Contacts</Link>
    </div>
  );
};
