import SlateSummaryEditor from "../slateSummaryEditor";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import SlateParser from "../SlateParser";
import SERVERURL from "../../constants";

function Summary() {
  const router = useRouter();
  const [state, setState] = useState();
  const [summary, setSummary] = useState("Write a 2-4 sentence summary here..");

  useEffect(() => {
    if (summary === "Write a 2-4 sentence summary here..") {
      getBasicSchema();
    }

    console.log("component loaded");
  });

  function updateData(data) {
    console.log("update data in the database", data);
    return fetch(`${SERVERURL}/basics/update`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
  }

  function getBasicSchema() {
    return fetch(`${SERVERURL}/basics/all-basic`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
      res.text().then((text) => {
        const data = JSON.parse(text);
        setSummary(data[0].summary);
        console.log(summary);
      });
    });
  }

  return (
    <div>
      <div className="componentContainer">
        <div className="recommendationContainer">
          <div className="recommendationHeader">Professional Summary</div>
          <div className="listItemContainer">
            <div className="numberOne">1</div>
            <div>
              Keep your professional summary no longer than 2-4 sentences.
            </div>
          </div>
          <div className="listItemContainer">
            <div className="numberTwo">2</div>
            <div>
              Highlight your most impressive and relevent accomplishments.
            </div>
          </div>
          <div className="listItemContainer">
            <div className="numberThree">3</div>
            <div>
              Recruiters often scan this section for job experience, education,
              and key highlights related to the position.
            </div>
          </div>
          <div className="exampleContainer">
            &nbsp;
            <div></div>
            &nbsp;
            <div>
              <strong>Example</strong>
            </div>
            <div className="paragraphContainer">
              Recent graduate with a bachelor's in Computer Science and 5 years
              of experience working on full stack javascript products. Strong
              team player who is looking for a long term position at a San
              Francisco startup with potential for growth.
            </div>
          </div>
        </div>
        <div className="slateContainer">
          <SlateSummaryEditor setValue={setState} />
        </div>
      </div>

      <div className="footerContainer">
        <div
          className="buttonContainer"
          onClick={() => {
            router.push("/section/summary-index");
          }}
        >
          Back
        </div>
        <div
          className="buttonContainer"
          onClick={() => {
            let parsedObject = SlateParser(state);
            let paragraph = parsedObject.paragraph;
            let data = { summary: paragraph };

            updateData(data);
            router.push("/section/review");
          }}
        >
          Next
        </div>
      </div>

      <style jsx>{`
        .componentContainer {
          display: flex;
          border: 1px solid #eee;
          padding: 20px 20px 20px 0;
          box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.16);
          margin-top: 15px;
        }
        .slateContainer {
          width: 340px;
        }
        .recommendationContainer {
          background-color: #f6f8fa;
          margin-right: 20px;
          width: 340px;
          margin-top: -20px;
          margin-bottom: -20px;
          min-height: 440px;
          padding: 20px;
          z-index: -1;
        }
        .recommendationHeader {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          font-weight: bold;
          color: #3a7ff2;
        }
        .numberOne {
          padding-top: 1px;
          min-width: 35px;
          height: 35px;
          background-color: #ffa600;
          color: white;
          font-size: 22px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 20px;
        }
        .numberTwo {
          padding-top: 1px;
          min-width: 35px;
          height: 35px;
          background-color: #ffa600;
          color: white;
          font-size: 22px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 20px;
        }
        .numberThree {
          padding-top: 1px;
          min-width: 35px;
          height: 35px;
          background-color: #ffa600;
          color: white;
          font-size: 22px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 20px;
        }
        .listItemContainer {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: 25px;
        }
        .footerContainer {
          width: 100%;
          display: flex;
          justify-content: space-between;
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
          margin-top: 20px;
          margin-bottom: 45px;
        }
        .buttonContainer:hover {
          opacity: 0.7;
        }
        .paragraphContainer {
          margin-top: 5px;
        }
      `}</style>
    </div>
  );
}

export default Summary;
