import React from "react";
import { NavLink } from "react-router-dom";

export interface cardProps {
  src: string;
  title: string;
  buttonText: string;
  urlLink: string;
}

const Card = (props: cardProps) => {
  return (
    <div className="col-md-4 col-10 mx-auto">
      <div className="card">
        <img style={{width: 'auto', height: 230}} className="card-img-top" src={props.src} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <NavLink to={props.urlLink} className="btn btn-primary">
            {props.buttonText}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
