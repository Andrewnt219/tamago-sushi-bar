import React from 'react';

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <div style={{ position: 'fixed', top: 0, left: 0 }}>Logo</div>
      </header>
      <main>{children}</main>
    </>
  );
};
