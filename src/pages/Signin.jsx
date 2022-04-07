import React from 'react'

function Signin() {
  return (
    <form class="form-signin">
        <div class="text-center mb-4">
            <img class="mb-4" src="/docs/4.6/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
            <h1 class="h3 mb-3 font-weight-normal">Go Productive App</h1>
        </div>

        <div class="form-label-group">
            <label for="inputEmail">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />

        </div>

        <div class="form-label-group">
            <label for="inputPassword">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />

        </div>

        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted text-center">© 2017-2021</p>
    </form>
  )
}

export default Signin