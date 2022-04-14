import axios from 'axios';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Signin = () => {

  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // redirect
  const [redirect, setRedirect] = useState(false);

  const submit = async(e) => {
    e.preventDefault();

    const payload = {
      email,
      password
    };

    try {
      let response = await axios.post('http://localhost:5000/api/v1/signIn', payload);
      
      localStorage.setItem("jwt", response.data.token)
      
      setRedirect(true);

    }catch(error) {
      let errorMsg = error.response.data.message;
      alert(errorMsg);
    }
  }

  if(redirect) {
    return <Navigate to={'/todos'} />
  }

  return (
    <form class="form-signin" onSubmit={submit}>
        <div class="text-center mb-4">
            <h1 class="h3 mb-3 font-weight-normal">Go Productive App</h1>
        </div>

        <div class="form-label-group">
            <label for="inputEmail">Email address</label>
            <input 
              type="email" 
              id="email" 
              class="form-control" 
              placeholder="Email address" 
              required="" 
              onChange={e => setEmail(e.target.value)}
               />

        </div>

        <div class="form-label-group">
            <label for="inputPassword">Password</label>
            <input 
              type="password" 
              id="password" 
              class="form-control" 
              placeholder="Password" 
              onChange={e => setPassword(e.target.value)}
             />

        </div>

        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted text-center">© 2022</p>
    </form>
  )
}

export default Signin;