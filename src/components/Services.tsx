import React from "react";
import Card, { cardProps } from "./Card";
import { cardData } from "./cardData";

const Services = () => {
  const carddata: cardProps[] = cardData;

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {carddata.map((data, index) => {
                return <Card key={index} {...data}/>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
