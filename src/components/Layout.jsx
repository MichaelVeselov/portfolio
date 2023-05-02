import { Outlet, ScrollRestoration } from 'react-router-dom';

import { NavBar } from './NavBar';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <div className='App'>
      <NavBar />
      <main className='content'>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};
