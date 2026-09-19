import React from 'react';
import Navbar from './components/NavBar';
import PageTransition from './components/PageTransition';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <PageTransition>
        <div className="content">{children}</div>
      </PageTransition>
    </div>
  );
};

export default Layout;
