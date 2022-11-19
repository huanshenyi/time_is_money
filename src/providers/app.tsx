import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { Spinner, Button } from '@/components/Elements';
import { Notifications } from '@/components/Notifications/Notifications';

const ErrorFallback = () => {
  return (
    <div className="text-red-500 w-screen h-screen flex flex-col justify-center items-center" role="alert">
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button className="mt-4" variant="warning" onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Notifications />
        <Router>{children}</Router>;
      </ErrorBoundary>
    </React.Suspense>
  );
};
