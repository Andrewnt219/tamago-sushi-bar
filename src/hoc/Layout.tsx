import React from 'react';
import Spinner from '../components/ui/Spinner/Spinner';
import { useTheme } from 'styled-components';

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <header>
        <div>Logo</div>
        <Spinner style={{ size: '4rem', color: theme.primary }} />
      </header>
      <main>{children}</main>
    </>
  );
};
