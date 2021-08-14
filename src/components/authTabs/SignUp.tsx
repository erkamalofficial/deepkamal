import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom'

export const SignUp = () => {
  const history = useHistory();
  const [errMsg, setErrorMsg] = useState('');
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: ''
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

  const submitForm = async(e: any) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/user', userInfo).then((result) => {
      console.log(result)
      setUserInfo({firstName: '',lastName: '', email:'', password: '', confirmPassword: '', age: ''})
      setErrorMsg('')
      history.push('/')
    }).catch((err) => {
      setErrorMsg('Error: Failed to Register Please Check details')
      console.log("Error: Failed to Register Please Check details", err)
    })
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Register Here</h1>
      </div>
      {errMsg.length > 0 &&
        <p style={{color: '#f51919', textAlign:'center'}}>{errMsg}</p>
      }
      <form onSubmit={submitForm}>
      <div className="container">
        <div style={{padding: '0 150px', paddingBottom: 40}} className="row">
          <div className="col-md-6 col-10 mx-auto">

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">FirstName</label>
              <input type="text" className="form-control" id="exampleFormControlInput1"
              name='firstName'
              value={userInfo.firstName}
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
              name='lastName'
              value={userInfo.lastName}
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
              name='confirmPassword'
              value={userInfo.confirmPassword}
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