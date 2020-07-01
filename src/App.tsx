import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './theme/lightTheme';
import { GlobalStyle } from './theme/GlobalStyle';
import { Switch, Route } from 'react-router-dom';

import { Layout } from './hoc/Layout';
import About from './pages/about/About';
import UserDashboard from './pages/userDashboard/UserDashboard';
import Reservation from './pages/reservation/Reservation';
import Empty from './pages/empty/Empty';
// import Landing from './pages/landing/Landing';
// import Menu from './pages/menu/Menu';
// import Cart from './pages/cart/Cart';
import { OrderDetail } from './pages/orderDetail/OrderDetail';
import ProtectedRoute from './components/navigation/ProtectedRoute';
import Login from './pages/login/Login';
import { useDispatch } from 'react-redux';
import { initCart } from './features/cartSlice';
import Register from './pages/register/Register';
import { LoadingScreen } from './components/ui/LoadingScreen/LoadingScreen';

const Menu = React.lazy(() => import('./pages/menu/Menu'));
const Landing = React.lazy(() => import('./pages/landing/Landing'));
const Cart = React.lazy(() => import('./pages/cart/Cart'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCart());
  }, [dispatch]);
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route path="/orders/:id" component={OrderDetail} />

          <ProtectedRoute path="/me">
            <UserDashboard />
          </ProtectedRoute>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/reservation" component={Reservation} />

          <React.Suspense fallback={<LoadingScreen />}>
            <Route path="/cart" component={Cart} />
            <Route path="/menu" component={Menu} />
            <Route path="/" exact component={Landing} />
          </React.Suspense>

          <Route component={Empty} />
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
