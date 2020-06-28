import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SERVERURL from "../../constants";
import DatePicker from "react-datepicker";
// import DatePicker from "react-date-picker";

// import "react-datepicker/dist/react-datepicker.css";
// import "react-datepicker/dist/react-datepicker-cssmodules.css";

function WorkItem() {
  const router = useRouter();
  const [state, setState] = useState({});
  const [currentItem, setCurrentItem] = useState("load");
  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  const { workid } = router.query;

  useEffect(() => {
    console.log("built component");
    if (currentItem === "load") {
      getAllWork();
    }
  });

  function handleInput(event, field) {
    setState({
      ...state,
      [field]: event.target.value,
    });
  }

  function handleDate(date, field) {
    setState({
      ...state,
      [field]: date,
    });
    console.log(date);
  }

  function getAllWork() {
    return fetch(`${SERVERURL}/works/all-work`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
      res.text().then((text) => {
        const allWorkItems = JSON.parse(text);

        for (let i = 0; i < allWorkItems.length; i++) {
          if (allWorkItems[i]._id === `${workid}`) {
            console.log(allWorkItems[i]);
            setCurrentItem(allWorkItems[i]);
            if (allWorkItems[i].endDate) {
              console.log(new Date(allWorkItems[i].endDate));
              setEndDate(new Date(allWorkItems[i].endDate));
            }
            if (allWorkItems[i].startDate) {
              console.log("start date: ", new Date(allWorkItems[i].startDate));
              setStartDate(new Date(allWorkItems[i].startDate));
            }
          }
        }
      });
    });
  }

  const testStyles = `{
    background-color: blue
  }`;

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

  function updateData(data) {
    console.log("update data: ", data);
    console.log("going to put data in the database", data);
    return fetch(`${SERVERURL}/works/update/${workid}`, {
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
      <div className="headingTitleContainer">
        Tell us about your most recent job.
      </div>
      <div className="contentContainer">
        <div className="inputListContainer">
          <div className="insideInputsContainer">
            <div className="inputContainer">
              <div className="inputLabel">Job Title</div>
              <textarea
                onChange={(event) => {
                  return handleInput(event, "position");
                }}
                // @ts-ignore
                defaultValue={currentItem.position || ""}
              ></textarea>
            </div>

            <div className="inputContainer">
              <div className="inputLabel">Employer</div>
              <textarea
                onChange={(event) => {
                  return handleInput(event, "company");
                }}
                // @ts-ignore
                defaultValue={currentItem.company || ""}
              ></textarea>
            </div>
            <div className="inputContainer">
              <div className="inputLabel">City</div>
              <textarea
                onChange={(event) => {
                  return handleInput(event, "city");
                }}
                // @ts-ignore
                defaultValue={currentItem.city || ""}
              ></textarea>
            </div>
            <div className="inputContainer">
              <div className="inputLabel">State</div>
              <textarea
                onChange={(event) => {
                  return handleInput(event, "state");
                }}
                // @ts-ignore
                defaultValue={currentItem.state || ""}
              ></textarea>
            </div>

            <div className="inputContainer">
              <div className="inputLabel">Start Date</div>

              <div>{/* <DatePicker /> */}</div>

              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  handleDate(date, "startDate");

                  setStartDate(date);
                }}
              />

              {/* <textarea
                onChange={(event) => {
                  return handleInput(event, "startDate");
                }}
                // @ts-ignore
                defaultValue={currentItem.startDate || ""}
              ></textarea> */}
            </div>

            <div className="inputContainer">
              <div className="inputLabel">End Date</div>
              <DatePicker
                selected={endDate}
                onChange={(date) => {
                  handleDate(date, "endDate");
                  setEndDate(date);
                }}
              />
              {/* <textarea
                onChange={(event) => {
                  return handleInput(event, "endDate");
                }}
                // @ts-ignore
                defaultValue={currentItem.endDate || ""}
              ></textarea> */}
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
            router.push("/section/work-index");
          }}
        >
          Back
        </div>
        <div
          className="buttonContainer"
          onClick={() => {
            if (workid === "new") {
              commitData(state);
            } else {
              updateData(state);
            }

            router.push(`/section/work-highlights/${workid}`);
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
          margin-top: 24px;
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

export default WorkItem;
