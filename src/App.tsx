import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './theme/lightTheme';
import { GlobalStyle } from './theme/GlobalStyle';
import { Switch, Route } from 'react-router-dom';
import { Landing } from './pages/landing/Landing';
import { Order } from './pages/order/Order';
import { Reservation } from './pages/reservation/Reservation';
import { Menu } from './pages/menu/Menu';
import { Layout } from './hoc/Layout';
import { Empty } from './pages/empty/Empty';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route path="/order" component={Order} />
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
