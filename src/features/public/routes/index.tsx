import { Route, Routes } from 'react-router-dom';

import { Recruitments } from './Recruitments';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="recruitments" element={<Recruitments />} />
    </Routes>
  );
};
