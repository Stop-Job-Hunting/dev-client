import { useState, useEffect } from "react";
import SERVERURL from "../../components/constants";
import WorkListItem from "../workListItem";
import { useRouter } from "next/router";

// let mappedWork;

function WorkSummary() {
  const [state, setState] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (state.length < 1) {
      getAllWork();
    }
  });

  function getAllWork() {
    return fetch(`${SERVERURL}/works/all-work`, {
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

  function createMappedWork() {
    let index = 0;

    let divs = state.map((item) => {
      if (item.company) {
        index = index + 1;
        return (
          <WorkListItem
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
        <h2>Work History Summary</h2>
      </div>
      {createMappedWork()}
      <div
        className="bottomButton"
        onClick={() => {
          router.push("/section/work-item/new");
        }}
      >
        {" "}
        ADD NEW POSITION
      </div>
      <div className="navButtons">
        <div
          className="buttonContainer"
          onClick={() => {
            router.push("/section/education-index");
          }}
        >
          Next
        </div>
        <div
          className="buttonContainer"
          onClick={() => {
            router.push("/section/work-index/");
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
          margin-top: 20px;
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
export default WorkSummary;
