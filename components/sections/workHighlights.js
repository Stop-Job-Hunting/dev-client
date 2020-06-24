import SlateWorkEditor from "../slateWorkEditor";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import SlateParser from "../SlateParser";
import SERVERURL from "../../constants";

const initialValue = [
  {
    type: "bulleted-list",
    children: [
      {
        type: "list-item",
        children: [
          {
            text:
              "Write your work highlights here! Led a team of people, grew revenue, was a team player, etc..",
          },
        ],
      },
    ],
  },
];

function WorkHighlights(props) {
  const router = useRouter();
  const [state, setState] = useState();
  const [currentItem, setCurrentItem] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("built component");

    if (currentItem[0] && isLoading) {
      if (
        currentItem[0].children[0].text === initialValue[0].children[0].text
      ) {
        console.log("go update data");
        getAllWork();
      }
    }
  });

  function updateData(data) {
    console.log("going to put data in the database", data);
    return fetch(`${SERVERURL}/works/update/${props.workId}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
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
          if (allWorkItems[i]._id === `${props.workId}`) {
            console.log(allWorkItems[i].highlights);

            if (allWorkItems[i].highlights.length > 0) {
              const currentValue = [
                {
                  type: "bulleted-list",
                  children: [],
                },
              ];

              for (let j = 0; j < allWorkItems[i].highlights.length; j++) {
                currentValue[0].children.push({
                  type: "list-item",
                  children: [{ text: `${allWorkItems[i].highlights[j]}` }],
                });
              }
              console.log("current val:", currentValue);
              setCurrentItem(currentValue);
              setIsLoading(false);
            }
          }
        }
      });
    });
  }

  return (
    <div>
      <div className="componentContainer">
        <div className="recommendationContainer">
          <div className="recommendationHeader">Write Better Highlights</div>
          <div className="listItemContainer">
            <div className="numberOne">1</div>
            <div>Be concise. Stick to 2-3 bullet points.</div>
          </div>
          <div className="listItemContainer">
            <div className="numberTwo">2</div>
            <div>Numbers and percentages are better than vague statements.</div>
          </div>
          <div className="listItemContainer">
            <div className="numberThree">3</div>
            <div>Try to showcase why you are a valuable hire.</div>
          </div>
          <div className="exampleContainer">
            &nbsp;
            <div></div>
            &nbsp;
            <div>
              <strong>Example</strong>
            </div>
            <div>
              <ul>
                <li>
                  Led a team of 3 people to build a consumer facing online
                  Resume Builder.
                </li>
                <li>
                  Scaled user aqusition to over 100,000 subscribers through SEM.
                </li>
                <li>Sold the product after 3 years for a 5x EBIT.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="slateContainer">
          {!isLoading && (
            <SlateWorkEditor setValue={setState} initialData={currentItem} />
          )}
        </div>
      </div>

      <div className="footerContainer">
        <div
          className="buttonContainer"
          onClick={() => {
            router.push(`/section/work-item/${props.workId}`);
          }}
        >
          Back
        </div>
        <div
          className="buttonContainer"
          onClick={() => {
            console.log("this is the slate state:", state);
            let parsedState = SlateParser(state);

            console.log("Parse state: ", parsedState.highlights);
            console.log("workId", props.workId);
            updateData({ highlights: parsedState.highlights });
            router.push("/section/work-summary");
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
      `}</style>
    </div>
  );
}

export default WorkHighlights;
