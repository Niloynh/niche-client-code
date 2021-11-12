import React, {useState} from 'react';
import { useHistory, useLocation } from 'react-router';
import { Alert, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import initializeFirebase from '../Firebase/firebase.init';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile} from 'firebase/auth'

import './Register.css';
import useAuth from '../../../Hooks/useAuth/useAuth';

// initialize firebase app 
initializeFirebase()

// getAuth 
const auth = getAuth()
const Register = () => {
      // State
      const [user, setUser] = useState([])

      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [error, setError] = useState('')
      const [isLogin, setIsLogin] = useState(false)
  
//   distructuring 
    const {savedUser} = useAuth()
//   history push handle 
      const location = useLocation()
      const history = useHistory()
      const redirect_url = location.state?.from || '/home'
  
  
  // reload hanlder
  const handleReload = e => {
      e.preventDefault()
      console.log(user)
  
      // error handle
      if(password < 6){
          setError('Password must be at least 6 character')
      }
  
      // user hanlde
      if(isLogin){
          userSignIn(email, password)
      }
      else{
          newUser(email, password);
      }
     
  }
  // update Profile
  const userUpdate = () => {
      updateProfile(auth.currentUser, {displayName:name})
      .then(result => { })
  }
  
  // user sign up
  const newUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
      .then(result =>{
          setUser(result)
        history.push(redirect_url)
          setError('')

          savedUser(email, name)
          userUpdate()
      })
      .catch(error =>{
          setError(error.message)
      })
      
  } 
  
  // user sign in
  const userSignIn = () => {
      return signInWithEmailAndPassword(auth, email, password)
      .then(result =>{
          setUser(result)
        history.push(redirect_url)
    })
      .catch(error =>{
          setError(error.message)
      })
  }
  
  // sign handler 
  const handleName = e => {
      setName(e.target.value)
  }
  
  const  handleEmail = e => {
      setEmail(e.target.value)
  }
  const  handlePassword = e => {
      setPassword(e.target.value)
  }
  
  const toggleHandle = e => {
      setIsLogin(e.target.checked)
  }
  
    return (
        <>
             <div className="login-container">
                <Row xs={1} md={2} className=" mx-auto py-5 container">
                    <Col className="login-text">
                        <div>
                        <h2 className="fw-bold">Welcome !</h2>
                        <h5>Enter your details and start journey with us</h5>
                        <Link to="/login"><button className="regular-btn">404 ! ☹</button></Link>
                        </div>
                    </Col>
                    <Col className="form-container">
                        <h3 className="w-75 mx-auto text-uppercase mb-3 sign-up fw-bold">Please Sign {isLogin ? "In" : "up"}</h3>
                        
                         <form  onSubmit={handleReload} className="form-css">
                            {!isLogin && <input onBlur={handleName} type="text" className="form-control" placeholder="Name"/> }

                            <input onBlur={handleEmail} type="email" className="form-control" placeholder="Email"/>

                            <input onBlur={handlePassword} type="password"
                            className="form-control" name="password" placeholder="Password" />

                            <button className="login-btn">Sign {isLogin ? "In" : "Up"}</button>
                        </form>
                            <div className="w-75 mx-auto mt-3">
                                <input onChange={toggleHandle} type="checkbox" className="form-check-input fs-5" id="exampleCheck1" />
                                <label className="form-check-label mx-3 fw-bold fs-5"  for="exampleCheck1">Already Sign <span className="sign-up">Up</span> ?</label>
                            </div>
                        {user.email && <Alert variant="success">User Created Successfully!</Alert>}

                        {error && <Alert variant="warning">{error}</Alert>}
                    </Col>
                </Row>
             </div>
            </>
    );
};

export default Register;