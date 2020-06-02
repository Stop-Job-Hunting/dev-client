import { useState } from "react";


function Heading() {
  const [state, setState] = useState("");

  function handleInput(event) {
    setUsername(event.target.value);
  }

  return (
    <div className="componentContainer">
      <div className="headingContainer">
        <div className="header">
          What’s the best way for employers to contact you?
        </div>
        <div className="subHeader">
          We suggest including an email and phone number.
        </div>
      </div>

      <style jsx>{`
        .componentContainer {
          width: 75%;
          min-height: 35em;
          border: 1px solid #f2f2f2;
          padding: 1em;
        }
        .header {
          font-size: 25px;
          color: #ffa600;
          line-height: 1.5;
          margin-bottom: 5px;
          font-weight: 300;
        }
        .subHeader {
          color: #666;
          font-size: 18px;
          line-height: 1.25;
          font-weight: 400;
          margin-bottom: 5px;
        }
      `}</style>
    </div>
  );
}

export default Heading;
