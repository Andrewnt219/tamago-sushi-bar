import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './theme/lightTheme';
import { GlobalStyle } from './theme/GlobalStyle';
import { Switch, Route } from 'react-router-dom';

import { Layout } from './hoc/Layout';
import About from './pages/about/About';
import Order from './pages/order/OrdersPage';
import Reservation from './pages/reservation/Reservation';
import Empty from './pages/empty/Empty';
import Landing from './pages/landing/Landing';
import Menu from './pages/menu/Menu';

// const Menu = React.lazy(() => import('./pages/menu/Menu'));

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
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
