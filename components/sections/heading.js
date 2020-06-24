import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SERVERURL from "../../constants";

let initialValue = [
  {
    createdAt: "",
    email: "",
    firstname: "",
    id: "",
    isDeleted: false,
    lastname: "",
    location: { city: "", region: "", postalCode: "" },
    phone: "",
    skills: (3)[("", "", "")],
    summary: "",
    updatedAt: "",
    username: "",
    __v: 0,
    _id: "",
  },
];

function Heading() {
  const router = useRouter();
  const [state, setState] = useState({});
  const [currentData, setCurrentData] = useState(initialValue);

  useEffect(() => {
    console.log("built component");
    if (currentData[0].username === "") {
      getData();
    }
  });

  function handleInput(event, field) {
    setState({
      ...state,
      [field]: event.target.value,
    });
  }

  function commitData(data) {
    console.log("going to put basic data in the database", data);
    return fetch(`${SERVERURL}/basics/new-basic`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
  }

  function getData() {
    return fetch(`${SERVERURL}/basics/all-basic`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
      res.text().then((text) => {
        const data = JSON.parse(text);
        console.log("this is an empty doc data: ", data);
        if (data.length < 1) {
          return;
        } else {
          setCurrentData((prevDoc) => {
            let first = data[0];
            for (let key in first) {
              prevDoc[0][key] = first[key];
            }
          });
        }
      });
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
              <div className="inputLabel">First Name</div>
              <textarea
                onChange={(event) => {
                  return handleInput(event, "firstname");
                }}
                defaultValue={currentData[0].firstname || ""}
              ></textarea>
            </div>

            <div className="inputContainer">
              <div className="inputLabel">Last Name</div>
              <textarea
                onChange={(event) => {
                  return handleInput(event, "lastname");
                }}
                defaultValue={currentData[0].lastname || ""}
              ></textarea>
            </div>
            <div className="inputContainer">
              <div className="inputLabel">City</div>
              <textarea
                onChange={(event) => {
                  return handleInput(event, "location.city");
                }}
                defaultValue={currentData[0].location.city || ""}
              ></textarea>
            </div>
            <div className="inputContainer">
              <div className="inputLabel">State/Province</div>
              <textarea
                onChange={(event) => {
                  return handleInput(event, "location.region");
                }}
                defaultValue={currentData[0].location.region || ""}
              ></textarea>
            </div>

            <div className="inputContainer">
              <div className="inputLabel">Zip Code</div>
              <textarea
                onChange={(event) => {
                  return handleInput(event, "location.postalCode");
                }}
                defaultValue={currentData[0].location.postalCode || ""}
              ></textarea>
            </div>

            <div className="inputContainer">
              <div className="inputLabel">Phone</div>
              <textarea
                onChange={(event) => {
                  return handleInput(event, "phone");
                }}
                defaultValue={currentData[0].phone || ""}
              ></textarea>
            </div>

            <div className="inputContainer">
              <div className="inputLabel">Email Address</div>
              <textarea
                onChange={(event) => {
                  return handleInput(event, "email");
                }}
                defaultValue={currentData[0].email || ""}
              ></textarea>
            </div>

            <div className="invisible">
              <div className="inputContainer">
                <div className="inputLabel">Invisible</div>
                <textarea
                  onChange={(event) => {
                    return handleInput(event, "phone");
                  }}
                ></textarea>
              </div>
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
            router.push("/section/select-template");
          }}
        >
          Back
        </div>
        <div
          className="buttonContainer"
          onClick={() => {
            console.log(state);
            if (Object.keys(state).length > 0) {
              console.log("commited data");
              commitData(state);
            }

            router.push("/section/work-index");
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
          min-height: 400px;
          width: 100%;
          border: 1px solid #eee;
          box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.16);
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
          min-width: 230px;
          margin-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .insideInputsContainer {
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
          margin-bottom: 10px;
          margin-right: 10px;
          margin-left: 10px;
        }
        .invisible {
          opacity: 0;
        }

        textarea {
          resize: none;
          font-size: 18px;
          display: block;
          padding: 5px;
          height: 28px;
          max-width: 260px;
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

        @media only screen and (max-width: 775px) {
          textarea {
            width: 90%;
            max-width: 5000px;
          }
          .inputContainer {
            width: 100%;
          }
          .insideInputsContainer {
            width: 100%;
            margin-top: 10px;
            margin-bottom: 10px;
            margin-left: 10px;
          }
          .invisible {
            display: none;
          }
        }

        @media only screen and (min-width: 920px) {
          textarea {
            width: 350px;
          }
        }

        @media only screen and (min-width: 1100px) {
          textarea {
            width: 400px;
          }
        }

        @media only screen and (min-width: 1200px) {
          .componentContainer {
            max-width: 1100px;
          }
        }
      `}</style>
    </div>
  );
}

export default Heading;
