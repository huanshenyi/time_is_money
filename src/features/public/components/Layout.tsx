import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import { Head } from '@/components/Head';

import { Navbar } from './NavBar';
import { Sidebar } from './Sidebar';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children, title = 'recruitment list' }: LayoutProps) => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      <Head title={title} description={title} />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-center lg:justify-start">
          <div className="lg:w-[60vw] max-w-screen-lg lg:pt-4 lg:p-4">
            <Navbar />
            <main className="flex-1 p-3 md:py-[35]">{children}</main>
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
};
