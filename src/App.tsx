import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './theme/lightTheme';
import { GlobalStyle } from './theme/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <div>App</div>
    </ThemeProvider>
  );
}

export default App;
