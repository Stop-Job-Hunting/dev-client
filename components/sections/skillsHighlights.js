import SlateEditor from "../slateEditor";
import { useRouter } from "next/router";

function WorkHighlights() {
  const router = useRouter();

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
          <SlateEditor />
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