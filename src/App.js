import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AuthProvider from './Pages/Context/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import BuyNow from './Pages/BuyNow/BuyNow';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';
import Explore from './Pages/Explore/Explore';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className='app'>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <SignUp />
            </Route>
            <Route path='/explore'>
              <Explore />
            </Route>
            <Route path='/manageproducts/update/:id'>
              <UpdateProduct />
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path='/buynow/:id'>
              <BuyNow />
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
