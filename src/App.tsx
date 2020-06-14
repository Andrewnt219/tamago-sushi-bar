import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './theme/lightTheme';
import { GlobalStyle } from './theme/GlobalStyle';
import { Switch, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Reservation } from './pages/Reservation';
import { Menu } from './pages/Menu';
import { Layout } from './hoc/Layout';
import { Empty } from './pages/Empty';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/reservation" component={Reservation} />
          <Route path="/menu" component={Menu} />
          <Route path="/" exact component={Landing} />
          <Route component={Empty} />
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
