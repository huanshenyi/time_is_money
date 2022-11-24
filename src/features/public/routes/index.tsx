import { Route, Routes } from 'react-router-dom';

import { Recruitments } from './Recruitments';
import { Search } from './Search';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="recruitments" element={<Recruitments />} />
      <Route path="search" element={<Search />} />
    </Routes>
  );
};
