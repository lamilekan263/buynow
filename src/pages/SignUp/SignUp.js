import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/button/Button";
import Input from "../../components/Input/Input";
import { auth } from "../../firebase/firebase";
import "./SignUp.css";
const SignUp = () => {
  const history = useHistory()
  const[email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // handleSignUp
  const handleSignUp = async(e) => {
    console.log(email);
    e.preventDefault()
   await auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/')
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <div className="signUp my-5">
      <div className="container">
        <div className="signUpcontainer shadow">
          <div className="container">
            <form onSubmit={handleSignUp}>
              <h3>Sign Up</h3>{" "}
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChangeValue={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="password"
                value={password}
                onChangeValue={(e) => setPassword(e.target.value)}
              />
              <p>
                By signing up you agree to Terms of Service and Privacy Policy
              </p>
              {/* <Button button="Sign Up" buttonType="buttonBlack" /> */}
              <button>Sign up</button>
              <h6 className="my-3">ALREADY HAVE AN ACCOUNT? </h6>
              <Link to="/user/signin">
                <span>Sign In</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
