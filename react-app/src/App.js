import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
// import User from './components/User';
import { authenticate } from './store/session';
// import ListingForm from './components/listingform/ListingForm';
import MainPage from './components/mainpage';
import SellPage from './components/sellpage';
import ShoeProfilePage from './components/ShoeProfilePage';
import ShoeListingPage from './components/ShoeListingPage';
import ShoeListingFormPage from './components/ShoeListingPage/ShoeListingFormPage'
import ShoePurchasePage from './components/ShoeBuyingPage';
import CurrentUserListings from './components/usersListings';
import CurrentUserPurchases from './components/userPurchases';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Route path='/login' exact={true}>
        <LoginForm />
      </Route>
      <Route path='/sign-up' exact={true}>
        <SignUpForm />
      </Route>
      <NavBar />
      <Switch>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/listings' exact={true} >
          <CurrentUserListings />
        </ProtectedRoute>

        <ProtectedRoute path='/users/purchases' exact={true} >
          <CurrentUserPurchases />
        </ProtectedRoute>

        <ProtectedRoute path='/shoe/:shoeId' exact={true} >
          <ShoeProfilePage />
        </ProtectedRoute>

        <ProtectedRoute path='/shoe/:shoeId/sell' exact={true} >
          <ShoeListingPage />
        </ProtectedRoute>

        <ProtectedRoute path='/shoe/:shoeId/sell/:sizeId' exact={true} >
          <ShoeListingFormPage />
        </ProtectedRoute>

        <ProtectedRoute path='/shoe/:shoeId/buy' exact={true} >
          <ShoePurchasePage />
        </ProtectedRoute>

        <ProtectedRoute path='/shoe/:shoeId/buy/:sizeId' exact={true} >
          {/* <ShoeListingFormPage /> */}
        </ProtectedRoute>

        <ProtectedRoute path='/sell' exact={true} >
          <SellPage />
        </ProtectedRoute>

        <Route path='/' exact={true} >
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
