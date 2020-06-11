import { useState } from "react";
import { useRouter } from "next/router";
import SERVERURL from "../constants";

function WorkHistory() {
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
    return fetch(`${SERVERURL}/works/new-work`, {
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
        <div className="header">Tell us about your most recent job</div>
        <div className="subHeader">We'll start there and work backward.</div>
        <div className="subHeader">TODO: determine if first job, or 2nd+</div>

        <div className="inputBlockContainer">
          <div className="inputCenterContainer">
            <div className="inputContainer">
              <div className="inputLabel">Job Title</div>
              <textarea
                onChange={(event) => {
                  return handleInput(event, "position");
                }}
              ></textarea>
            </div>

            <div className="inputContainer">
              <div className="inputLabel">Employer</div>
              <textarea
                onChange={(event) => {
                  return handleInput(event, "company");
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
                  return handleInput(event, "state");
                }}
              ></textarea>
            </div>

            <div className="inputContainer">
              <div className="inputLabel">Start Date</div>
              <textarea
                onChange={(event) => {
                  return handleInput(event, "startDate");
                }}
              ></textarea>
            </div>

            <div className="inputContainer">
              <div className="inputLabel">End Date</div>
              <textarea
                onChange={(event) => {
                  return handleInput(event, "endDate");
                }}
              ></textarea>
            </div>
          </div>

          <div className="holdTheButtonContainer">
            <div
              className="buttonContainer"
              onClick={() => {
                console.log("state: ", state);
                console.log("State as JSON: ", JSON.stringify(state));
                commitData(state);
                console.log(state);
                router.push("/section/work-highlights");
              }}
            >
              Next
            </div>
            <div
              className="buttonContainer"
              onClick={() => {
                router.push("/section/heading");
              }}
            >
              {" "}
              Back
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .componentContainer {
          width: 75%;
          max-width: 600px;
          min-height: 35em;
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
        .inputBlockContainer {
          display: flex;
          flex-wrap: wrap;
          max-width: 100%;
          margin-top: 1em;
          display: flex;
          justify-content: center;
          margin-bottom: 1em;
        }
        .inputCenterContainer {
          display: flex;
          flex-wrap: wrap;
          max-width: 440px;
          margin-top: 1em;
          display: flex;
          margin-bottom: 1em;
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
          justify-content: space-between;
          flex-direction: row-reverse;
          margin-top: 1em;
          min-width: 415px;
        }
      `}</style>
    </div>
  );
}

export default WorkHistory;
