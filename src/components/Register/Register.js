import React from 'react';
import '../Login/Login.css';

export default function Register() {
  return(
    <div className="login-wrapper">
      <h1>Register</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Email</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}