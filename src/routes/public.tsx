import { lazyImport } from '@/utils/lazyImport';

const { AuthRoutes } = lazyImport(() => import('@/features/auth'), 'AuthRoutes');
const { PublicRoutes } = lazyImport(() => import('@/features/public'), 'PublicRoutes');

export const publicRoutes = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
  {
    path: '/public/*',
    element: <PublicRoutes />,
  },
];
