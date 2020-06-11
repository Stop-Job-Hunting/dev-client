import { useState } from "react";
import { useRouter } from "next/router";
import SERVERURL from "../constants";

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
      <div className="headingTitleContainer">
        How should employers contact you?
      </div>
      <div className="contentContainer">
        <div className="inputListContainer">
          <div className="insideInputsContainer">
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
        </div>
        <div className="imageContainer">
          <div>
            <img src="/assets/templatePlaceholder.png" width="220px" />
          </div>
        </div>
      </div>
      <div className="buttonBarContainer">
        <div
          className="buttonContainer"
          onClick={() => {
            console.log("back");
          }}
        >
          Back
        </div>
        <div
          className="buttonContainer"
          onClick={() => {
            console.log("next");
          }}
        >
          Next
        </div>
      </div>
      <style jsx>{`
        .componentContainer {
          display: flex;
          flex-direction: column;
          width: 90%;
          padding: 10px;
        }
        .headingTitleContainer {
          display: flex;
          align-items: center;
          width: 100%;
          font-size: 28px;
          font-weight: bold;
          color: #3a7ff2;
        }
        .contentContainer {
          height: 400px;
          width: 100%;
          border: 1px solid grey;
          margin-top: 20px;
          display: flex;
        }
        .buttonBarContainer {
          width: 100%;
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
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
        .inputListContainer {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .imageContainer {
          min-width: 220px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .insideInputsContainer {
          background-color: red;
          padding: 10px;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .inputLabel {
          font-size: 13px;
          font-weight: 600;
          line-height: 24px;
          color: #545454 !important;
        }

        .inputContainer {
          margin-right: 8px;
          margin-left: 2px;
          background-color: blue;
        }

        textarea {
          resize: none;
          font-size: 18px;
          display: block;
          padding: 5px;
          height: 28px;
          width: 100%;
          max-width: 260px;
          border: 1px solid #d7dde2;
          line-height: 1.7;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: regular;
          overflow: hidden;
          color: #444;
        }
      `}</style>
    </div>
  );
}

export default Heading;
