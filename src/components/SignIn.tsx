import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const [userInfo, setUserInfo] = useState({
    email:'',
    password: ''
  })

  const ChangeEvent = (event: any) => {
    const {name, value} = event.target;
    setUserInfo((preVal) => {
      return {
        ...preVal,
      [name]: value
      }
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(JSON.stringify(userInfo))
  }
  
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Sign In</h1>
      </div>

      <div className="container">
        <div className="row">
          <form onSubmit={handleSubmit}>
          <div className="col-md-4 col-10 mx-auto">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                name='email'
              value={userInfo.email}
              onChange={ChangeEvent}
                placeholder="name@example.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput1"
                name='password'
              value={userInfo.password}
              onChange={ChangeEvent}
                placeholder="Password"
              />
            </div>

            <div className="text-center mb-5">
              <button type="submit" className="btn btn-outline-primary">
                Sign In
              </button>
            </div>
            <p>Don't have account <Link to="/signup">Register here</Link></p>
          </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
