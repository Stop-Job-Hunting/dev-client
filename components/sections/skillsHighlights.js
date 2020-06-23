import SlateSkillsEditor from "../slateSkillsEditor";
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
            text: "Example: Facebook Advertising",
          },
        ],
      },
    ],
  },
];

function WorkHighlights() {
  const router = useRouter();
  const [state, setState] = useState();
  const [skills, setSkills] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(skills)
    if (skills[0].children.length > 0) {
      console.log("Dont do me")
      if (
        skills[0].children[0].children[0].text ===
        initialValue[0].children[0].children[0].text
      ) {
        console.log("update the data");
        getBasicSchema();
        // setIsLoading(false);
      }
    }

    console.log("component loaded");
  });

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

        console.log(data[0].skills);

        let updatedValue = [
          {
            type: "bulleted-list",
            children: [],
          },
        ];

        for (let i = 0; i < data[0].skills.length; i++) {
          updatedValue[0].children.push({
            type: "list-item",
            children: [
              {
                text: `${data[0].skills[i]}`,
              },
            ],
          });
        }

        setSkills(updatedValue);
        setIsLoading(false);
      });
    });
  }

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

  return (
    <div>
      <div className="componentContainer">
        <div className="recommendationContainer">
          <div className="recommendationHeader">Highlight Your Skills</div>
          <div className="listItemContainer">
            <div className="numberOne">1</div>
            <div>Once again be concise, try highlighting 3-5 skills.</div>
          </div>
          <div className="listItemContainer">
            <div className="numberTwo">2</div>
            <div>Technical, exact skills, are better than generic ones.</div>
          </div>
          <div className="listItemContainer">
            <div className="numberThree">3</div>
            <div>Try to showcase skills most relevent to the job.</div>
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
                <li>Facebook Advertising</li>
                <li>Google SEM</li>
                <li>Adobe Illustrator</li>
                <li>Programmatic Media Buying</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="slateContainer">
          {!isLoading && (
            <SlateSkillsEditor setValue={setState} initialData={skills} />
          )}
        </div>
      </div>

      <div className="footerContainer">
        <div
          className="buttonContainer"
          onClick={() => {
            router.push("/section/skills-index");
          }}
        >
          Back
        </div>
        <div
          className="buttonContainer"
          onClick={() => {
            let parsedObject = SlateParser(state);
            let skillsArray = parsedObject.highlights;
            let data = { skills: skillsArray };

            updateData(data);
            router.push("/section/summary-index");
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
      `}</style>
    </div>
  );
}

export default WorkHighlights;
