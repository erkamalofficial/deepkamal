import React, { useState } from "react";
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    fname: '',
    lname: '',
    email: '',
    age: '',
    password: '',
    cpassword: ''
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

  const submitForm = (e: any) => {
    e.preventDefault();
    alert(JSON.stringify(userInfo))
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Register Here</h1>
      </div>
      <form onSubmit={submitForm}>
      <div className="container">
        <div style={{padding: '0 150px'}} className="row">
          <div className="col-md-6 col-10 mx-auto">

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">FirstName</label>
              <input type="text" className="form-control" id="exampleFormControlInput1"
              name='fname'
              value={userInfo.fname}
              onChange={ChangeEvent}
              placeholder="Enter your firstname" />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" 
              name='email'
              value={userInfo.email}
              onChange={ChangeEvent}
              placeholder="name@example.com" />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleFormControlInput1" 
              name='password'
              value={userInfo.password}
              onChange={ChangeEvent}
              placeholder="Choose Password"/>
            </div>

          </div>


          <div className="col-md-6 col-10 mx-auto">
          <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">LastName</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" 
              name='lname'
              value={userInfo.lname}
              onChange={ChangeEvent}
              placeholder="Enter your lastname" />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Age</label>
              <input type="number" className="form-control" id="exampleFormControlInput1" 
              name='age'
              value={userInfo.age}
              onChange={ChangeEvent}
              placeholder="Enter your age" />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label"> Confirm Password
              </label>
              <input type="password" className="form-control" id="exampleFormControlInput1" 
              name='cpassword'
              value={userInfo.cpassword}
              onChange={ChangeEvent}
              placeholder="Re-enter Password"
              />
            </div>

          </div>

          <div className="text-center mb-5">
            <button type="submit" className="btn btn-outline-primary">
              Register
            </button>
          </div>
         
          <p>
            Already have account <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
      </form>
    </>
  );
}

export default SignUp;
