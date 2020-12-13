import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'

import Footer from './components/footer/Footer';
 import Header from './components/header/Header';
import { auth } from './firebase/firebase';
import CartPage from './pages/cart/CartPage';
import Home from './pages/Home/Home';
import SignIn from './pages/SignInPage/SignIn';
import SignUp from "./pages/SignUp/SignUp";
import Shop from "./pages/shop/Shop";
import { noUser, updateUser } from './redux/userAuth/userAction';
import ItemDetails from './pages/itemDetails/ItemDetails';

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
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={CartPage} />
        <Route path="/user/signin" component={SignIn} />
        <Route path="/user/signup" component={SignUp} />
        <Route exact path="/collections/shop" component={Shop} />
        <Route exact path="/collections/shop/:id" component={ItemDetails} />
      </Switch>
      <Footer />
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch(updateUser(user)),
    noUser: () => dispatch(noUser()),
  };
}

export default connect(null, mapDispatchToProps)(App);
