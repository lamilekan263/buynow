import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import Input from '../../components/Input/Input';
import { auth } from '../../firebase/firebase';
import './SignIn.css'
const SignIn = (props) => {
  const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('')

    // handle sign in
  const handleSignIn = async(e) => {
    e.preventDefault()
   await auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/')
      })
      .catch(error => {
        alert(error.message)
      })
  }
  
    return (
      <div className="signIn my-5">
        <div className="container">
          <div className="signIncontainer shadow">
            <div className="container">
              <form onSubmit={handleSignIn}>
                <h3>Sign In</h3>{" "}
                <Input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChangeValue={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChangeValue={(e) => setpassword(e.target.value)}
                />
                <button>Sign In</button>
                <h6 className="my-3">DON'T HAVE AN ACCOUNT? </h6>
                <Link to="/user/signup">
                  <span>Sign Up</span>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SignIn
