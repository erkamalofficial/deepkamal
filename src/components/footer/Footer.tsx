import React from "react";
import { Divider } from "../Divider";
import { LinksCard } from "./LinksCard";
import { LinksWrap } from "./LinksWrap";

export const Footer = () => {

  return (
    <>
      <Divider borderType={'solid'} opacity={1} height={2} color={'#4d90fe'} width={100} />

      <LinksWrap/>

      <footer className="bg-transparent text-center">
          <p style={{fontSize: 14}}>&copy; Copyright 2021 Kamaldeep. All Rights Reserved</p>
      </footer>
      
    </>
  );
};