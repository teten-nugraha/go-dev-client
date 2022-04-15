import React, { useState} from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Signup = () => {

  // payload
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  
  // redirect
  const[redirect, setRedirect] = useState(false);

  const submit = async(e) => {
    e.preventDefault();

    try {
      let response = await axios.post('http://localhost:5000/api/v1/signUp', {
        username,
        email,
        password,
        password_confirmation
      });

      setRedirect(true);

    }catch(error) {
      let errorMsg = error.response.data.message; 
      alert(errorMsg);
    }finally{
      setUsername('');
      setEmail('');
      setPassword('');
      setPasswordConfirmation('');
    }

  }

  if(redirect) {
    return <Navigate to={'/signin'} />
  }

  return (
    <form className="form-signin" onSubmit={submit}>
        <div className="text-center mb-4">
          
          <h1 className="h3 mb-3 font-weight-normal">Go Productive App</h1>
            
        </div>

        <div className="form-label-group">
            <label for="inputEmail">Username</label>
            <input type="text" id="username" className="form-control" required="" onChange={e => setUsername(e.target.value)} />

        </div>

        <div className="form-label-group">
            <label for="inputEmail">Email address</label>
            <input type="email" id="email" className="form-control" required="" onChange={e => setEmail(e.target.value)}  />

        </div>

        <div className="form-label-group">
            <label for="inputPassword">Password</label>
            <input type="password" id="password" className="form-control" onChange={e => setPassword(e.target.value)} />
        </div>

        <div className="form-label-group">
            <label for="inputPassword">Password Confirmation</label>
            <input type="password" id="password_confirmation" className="form-control" onChange={e => setPasswordConfirmation(e.target.value)} />
        </div>

        <br />
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted text-center">© 2022</p>
    </form>
  )
}

export default Signup;