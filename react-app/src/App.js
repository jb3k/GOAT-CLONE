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
import ShoePurchaseFormPage from './components/ShoeBuyingPage/ShoePurchaseFormPage';
import CurrentUserListings from './components/usersListings';
import CurrentUserPurchases from './components/userPurchases';
import UploadPicture from './components/ImagesForm';


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
      {/* <NavBar /> */}
      <Switch>
        <ProtectedRoute path='/users' exact={true} >
          <NavBar />
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/listings' exact={true} >
          <NavBar />
          <CurrentUserListings />
        </ProtectedRoute>

        <ProtectedRoute path='/users/purchases' exact={true} >
          <NavBar />
          <CurrentUserPurchases />
        </ProtectedRoute>

        <Route path='/shoe/:shoeId' exact={true} >
          <NavBar />
          <ShoeProfilePage />
        </Route>

        <ProtectedRoute path='/shoe/:shoeId/sell' exact={true} >
          <NavBar />
          <ShoeListingPage />
        </ProtectedRoute>

        <ProtectedRoute path='/shoe/:shoeId/sell/:sizeId' exact={true} >
          <NavBar />
          <ShoeListingFormPage />
        </ProtectedRoute>

        <ProtectedRoute path='/shoe/:shoeId/buy' exact={true} >
          <NavBar />
          <ShoePurchasePage />
        </ProtectedRoute>

        <ProtectedRoute path='/shoe/:shoeId/buy/:sizeId' exact={true} >
          <NavBar />
          <ShoePurchaseFormPage />
        </ProtectedRoute>

        <ProtectedRoute path='/sell' exact={true} >
          <NavBar />
          <UploadPicture />
        </ProtectedRoute>





        <ProtectedRoute path='/broken' exact={true} >
          <SellPage />
        </ProtectedRoute>

        <Route path='/' exact={true} >
          <NavBar />
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
