import { useState, useEffect } from "react";
import SERVERURL from "../../components/constants";
import EducationListItem from "../educationListItem";
import { useRouter } from "next/router";

// let mappedWork;
// Do some stuff here to use education model
function EduSummary() {
  const [state, setState] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (state.length < 1) {
      getAllEducation();
    }
  });

  function getAllEducation() {
    return fetch(`${SERVERURL}/educations/all-education`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
      res.text().then((text) => {
        setState(JSON.parse(text));
      });
    });
  }

  function createMappedEducation() {
    let index = 0;

    let divs = state.map((item) => {
      if (item.institution) {
        index = index + 1;
        return (
          <EducationListItem
            item={item}
            index={index}
            key={`${Math.random() * 100}`}
          />
        );
      }
    });

    return divs;
  }

  return (
    <>
      <div className="title">
        <h2>Education Summary</h2>
      </div>
      {createMappedEducation()}
      <div
        className="bottomButton"
        onClick={() => {
          router.push("/section/education-item/new");
        }}
      >
        {" "}
        ADD NEW DEGREE
      </div>
      <div className="navButtons">
        <div
          className="buttonContainer"
          onClick={() => {
            router.push("/section/skills-index");
          }}
        >
          Next
        </div>
        <div
          className="buttonContainer"
          onClick={() => {
            router.push("/section/education-index");
          }}
        >
          {" "}
          Back
        </div>
      </div>
      <style jsx>{`
        .title {
          display: flex;
          width: 75%;
          height: 50px;
          align-items: center;
          margin-bottom: 20px;
          cursor: default;
          color: #444;
          margin-top: 24px;
        }
        .bottomButton {
          border: 1px dashed #3a7ff2;
          font-weight: 600;
          width: 75%;
          color: #3a7ff2;
          background-color: #fefefe;
          display: flex;
          height: 60px;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        .bottomButton:hover {
          opacity: 0.7;
        }
        .navButtons {
          width: 75%;
          display: flex;
          justify-content: space-between;
          flex-direction: row-reverse;
          margin-top: 20px;
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
      `}</style>
    </>
  );
}
export default EduSummary;
