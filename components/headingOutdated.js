import { useState } from "react";
import { useRouter } from "next/router";
import SERVERURL from "./constants";

function Heading() {
  const router = useRouter();
  const [state, setState] = useState({});

  function handleInput(event, field) {
    setState({
      ...state,
      [field]: event.target.value,
    });
  }

  function commitData(data) {
    console.log("going to put data in the database", data);
    return fetch(`${SERVERURL}/resumes`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
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

        <div className="inputBlockContainer">
          <div className="inputCenterContainer">
            <div>
              <div className="inputContainer">
                <div className="inputLabel">Name</div>
                <textarea
                  onChange={(event) => {
                    return handleInput(event, "name");
                  }}
                ></textarea>
              </div>

              <div className="inputContainer">
                <div className="inputLabel">Label</div>
                <textarea
                  onChange={(event) => {
                    return handleInput(event, "label");
                  }}
                ></textarea>
              </div>

              <div className="inputContainer">
                <div className="inputLabel">City</div>
                <textarea
                  onChange={(event) => {
                    return handleInput(event, "city");
                  }}
                ></textarea>
              </div>

              <div className="inputContainer">
                <div className="inputLabel">State</div>
                <textarea
                  onChange={(event) => {
                    return handleInput(event, "region");
                  }}
                ></textarea>
              </div>

              <div className="inputContainer">
                <div className="inputLabel">Zip Code</div>
                <textarea
                  onChange={(event) => {
                    return handleInput(event, "postalCode");
                  }}
                ></textarea>
              </div>

              <div className="inputContainer">
                <div className="inputLabel">Phone</div>
                <textarea
                  onChange={(event) => {
                    return handleInput(event, "phone");
                  }}
                ></textarea>
              </div>

              <div className="inputContainer">
                <div className="inputLabel">Email Address</div>
                <textarea
                  onChange={(event) => {
                    return handleInput(event, "email");
                  }}
                ></textarea>
              </div>
            </div>
            <img
              src="/assets/templatePlaceholder.png"
              width="210px"
              height="300px"
            />
          </div>
          <div className="holdTheButtonContainer">
            <div
              className="buttonContainer"
              onClick={() => {
                console.log("state: ", state);
                console.log("State as JSON: ", JSON.stringify(state));
                // commitData(JSON.stringify(state));
                commitData(state);
                router.push("/section/work");
              }}
            >
              Next
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .componentContainer {
          width: 600px;
          min-height: 35em;
          padding: 1em;
          background-color: pink;
        }
        img {
          opacity: 0.5;
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
        .inputBlockContainer {
          display: flex;
          margin-top: 1em;
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-bottom: 1em;
          background-color: blue;
        }
        .inputCenterContainer {
          display: flex;
          flex-wrap: wrap;
          margin-top: 1em;
          display: flex;
          margin-bottom: 1em;
          background-color: red;
        }
        .inputContainer {
          margin-top: 1em;
          margin-right: 8px;
          margin-left: 2px;
        }
        .inputLabel {
          font-size: 13px;
          font-weight: 600;
          line-height: 24px;
          color: #545454 !important;
        }
        textarea {
          resize: none;
          font-size: 18px;
          display: block;
          padding: 5px;
          height: 28px;
          max-width: 250px;
          border: 1px solid #d7dde2;
          line-height: 1.7;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: regular;
          overflow: hidden;
          color: #444;
        }
        textarea:focus {
          border: 1px solid #ffa600;
          outline: 0px;
        }
        .lastItem {
          align-self: flex-start;
        }
        .buttonContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2.2em;
          width: 5em;
          padding-left: 0.5em;
          padding-right: 0.5em;
          border: 4px solid #ffa600;
          background-color: #ffa600;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }
        .buttonContainer:hover {
          opacity: 0.7;
        }
        .holdTheButtonContainer {
          display: flex;
          justify-content: flex-end;
          margin-top: 1em;
          min-width: 415px;
        }
      `}</style>
    </div>
  );
}

export default Heading;
