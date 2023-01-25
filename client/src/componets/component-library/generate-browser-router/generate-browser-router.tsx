import { Route, Routes } from 'react-router-dom';
import { MyRoutes } from '../../../types/enums';
import { NotFoundPage } from '../../pages/404/not-found';
import { Contacts } from '../../pages/contacts/contacts';
import { Home } from '../../pages/home/home';

const router = [
  {
    path: MyRoutes.HOME,
    element: <Home />,
  },
  {
    path: MyRoutes.CONTACTS,
    element: <Contacts />,
  },
  {
    path: MyRoutes.NOT_FOUND,
    element: <NotFoundPage />,
  },
];

export const GenerateBrowserRouter = () => {
  return (
    <Routes>
      {router.map((rout, index) => (
        <Route key={index} path={rout.path} element={rout.element} />
      ))}
    </Routes>
  );
};
