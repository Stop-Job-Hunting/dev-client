import { useRouter } from "next/router";

function Heading() {
  const router = useRouter();
  return (
    <div className="componentContainer">
      <div className="headingTitleContainer">Header Title Here</div>
      <div className="contentContainer">Box</div>
      <div className="buttonBarContainer">
        <div
          className="buttonContainer"
          onClick={() => {
            console.log("back");
          }}
        >
          Back
        </div>
        <div
          className="buttonContainer"
          onClick={() => {
            console.log("next");
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
          padding: 10px;
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
          height: 400px;
          width: 100%;
          border: 1px solid grey;
          margin-top: 20px;
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
      `}</style>
    </div>
  );
}

export default Heading;
