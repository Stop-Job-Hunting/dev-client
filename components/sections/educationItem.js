import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SERVERURL from "../../constants";

function EducationItem() {
  const router = useRouter();
  const [state, setState] = useState({});
  const [currentItem, setCurrentItem] = useState("load");
  const { educationitem } = router.query;

  useEffect(() => {
    console.log("built component");

    if (currentItem === "load") {
      getAllEducation();
    }
  });

  function handleInput(event, field) {
    setState({
      ...state,
      [field]: event.target.value,
    });
  }

  function getAllEducation() {
    return fetch(`${SERVERURL}/educations/all-education`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
      res.text().then((text) => {
        const allEducationItems = JSON.parse(text);

        for (let i = 0; i < allEducationItems.length; i++) {
          if (allEducationItems[i]._id === `${educationitem}`) {
            console.log(allEducationItems[i]);
            setCurrentItem(allEducationItems[i]);
          }
        }
      });
    });
  }

  function commitData(data) {
    console.log("going to put data in the database", data);
    return fetch(`${SERVERURL}/educations/new-education`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
  }

  function updateData(data) {
    console.log("going to put data in the database", data);
    return fetch(`${SERVERURL}/educations/update/${educationitem}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
  }

  return (
    <div className="componentContainer">
      <div className="headingTitleContainer">Tell us about your education</div>
      <div className="contentContainer">
        <div className="inputListContainer">
          <div className="insideInputsContainer">
            <div className="inputContainer">
              <div className="inputLabel">School Name</div>
              <textarea
                onChange={(event) => {
                  return handleInput(event, "institution");
                }}
                defaultValue={currentItem.institution || ""}
              ></textarea>
            </div>

            <div className="inputContainer">
              <div className="inputLabel">School Location</div>
              <textarea
                onChange={(event) => {
                  return handleInput(event, "location");
                }}
                defaultValue={currentItem.location || ""}
              ></textarea>
            </div>
            <div className="inputContainer">
              <div className="inputLabel">Degree</div>
              <textarea
                onChange={(event) => {
                  return handleInput(event, "studyType");
                }}
                defaultValue={currentItem.studyType || ""}
              ></textarea>
            </div>
            <div className="inputContainer">
              <div className="inputLabel">Field of Study</div>
              <textarea
                onChange={(event) => {
                  return handleInput(event, "area");
                }}
                defaultValue={currentItem.area || ""}
              ></textarea>
            </div>

            <div className="inputContainer">
              <div className="inputLabel">Graduation Date</div>
              <textarea
                onChange={(event) => {
                  return handleInput(event, "endDate");
                }}
                defaultValue={currentItem.endDate || ""}
              ></textarea>
            </div>
            <div className="invisible">
              <div className="inputContainer">
                <div className="inputLabel">Place Holder</div>
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
            router.push("/section/education-index");
          }}
        >
          Back
        </div>
        <div
          className="buttonContainer"
          onClick={() => {
            if (educationitem === "new") {
              commitData(state);
            } else {
              updateData(state);
            }
            router.push("/section/education-summary");
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

export default EducationItem;
