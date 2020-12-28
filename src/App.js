import { useEffect, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import { noUser, updateUser } from "./redux/userAuth/userAction";

import Footer from './components/footer/Footer';
 import Header from './components/header/Header';
import { auth } from './firebase/firebase';
import Spinner from './components/spinner/Spinner'

const CartPage = lazy(() => import('./pages/cart/CartPage'));
const Home = lazy(() => import('./pages/Home/Home'));
const SignIn = lazy(() => import('./pages/SignInPage/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Shop = lazy(() => import('./pages/shop/Shop'));
const ItemDetails = lazy(() => import('./pages/itemDetails/ItemDetails'));
const Payment = lazy(() => import('./pages/payment/Payment'))

 


function App({ setUser, noUser }) {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        setUser(authUser);
      }
      if (!authUser) {
        noUser();
      }
    });
  });
  return (
    <Suspense fallback={<Spinner />}>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={CartPage} />
          <Route path="/user/signin" component={SignIn} />
          <Route path="/user/signup" component={SignUp} />
          <Route exact path="/collections/shop" component={Shop} />
          <Route exact path="/collections/shop/:id" component={ItemDetails} />
          <Route exact path="/checkout" component={Payment} />
        </Switch>

        <Footer />
      </div>
    </Suspense>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch(updateUser(user)),
    noUser: () => dispatch(noUser()),
  };
}

export default connect(null, mapDispatchToProps)(App);
