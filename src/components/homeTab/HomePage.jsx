import React from "react";
import img from '../../images/business.png'
import { Services } from "../";

export const HomePage = () => {
  return (
    <>
    <section id="header" className="">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column">
                <h1 style={{marginTop: 65}}> Grow your business with <span className="brand-name">Deep Kamal</span>
                </h1>
                <h2 className="my-3">
                  We are team of telented developers making websites
                </h2>
                <div className="mt-3">
                  <a className="btn-get-started" href="/services">
                    Get Started
                  </a>
                </div>
              </div>

              <div className="col-6 pt-5 pt-lg-0 order-1 order-lg-2 header-img">
                <img className="img-fluid animated" src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Services/>
    </>
  );
}