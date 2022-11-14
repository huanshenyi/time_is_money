import { useRoutes } from 'react-router-dom';

import { publicRoutes } from './public';

export const AppRoutes = () => {
  const router = publicRoutes;
  const element = useRoutes([...router]);
  return <>{element}</>;
};
