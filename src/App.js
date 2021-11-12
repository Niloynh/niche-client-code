import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Explore from './Pages/Explore/Explore';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/Home/PlaceOrder/PlaceOrder';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/CommonUser/MyOrders/MyOrders';
import UserReview from './Pages/Dashboard/CommonUser/UserReview/UserReview';
import Pay from './Pages/Dashboard/CommonUser/Pay/Pay';
import Contact from './Pages/Home/Contact/Contact';
import Contacts from './Pages/Contacts/Contacts';

function App() {
  return (
    <div>
     <AuthProvider>
     <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/placeOrder">
            <PlaceOrder/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
