import React from 'react';
import { useAuth } from './AuthContext';
import NavbarGuest from './NavbarGuest';
import NavbarUser from './NavbarUser';

const Layout = ({ children }) => {
  const { user } = useAuth();

  return (
    <>
      {user ? <NavbarUser /> : <NavbarGuest />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
