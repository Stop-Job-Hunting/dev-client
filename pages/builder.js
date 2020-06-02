import NavBar from "../components/navBar";
import { useState } from "react";
import Heading from "../components/heading";

export default () => {
  return (
    <div>
      <NavBar />

      <div className="hero">
        <Heading />
      </div>
      <style jsx>{`
        .hero {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 2em;
          height: 45em;
        }
      `}</style>
    </div>
  );
};
