import { TextField } from "@material-ui/core";
import React, { useState } from "react";

function Contact() {
  const [contactObj, setContactObj] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: ''
  })

  const InputEvent = (event: any) => {
    const {name, value} = event.target;
    setContactObj((preVal) => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }

  const submitForm = (e: any) => {
    e.preventDefault();
    alert(JSON.stringify(contactObj))
  }
  return (
    <>
      <div className="my-3">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={submitForm}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                FullName
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name='fullname'
                value={contactObj.fullname}
                onChange={InputEvent}
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name='phone'
                value={contactObj.phone}
                onChange={InputEvent}
                placeholder="Mobile number"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                name='email'
                value={contactObj.email}
                onChange={InputEvent}
                placeholder="name@example.com"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name='msg'
                value={contactObj.msg}
                onChange={InputEvent}
                rows={3}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit Now
            </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
