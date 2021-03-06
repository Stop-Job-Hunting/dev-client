import ProgressBar from "../../components/progressBar";
import Footer from "../../components/footer";
import SERVERURL from "../../components/constants";
import { useEffect } from "react";

export default () => {
  useEffect(() => {
    console.log("rendered component");
    buildJSON();
  }, []);

  function buildJSON() {
    console.log("triggered");
    return fetch(`${SERVERURL}/downloads/build-json`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  }

  function triggerDownload() {
    console.log("triggered");
    window.open(`${SERVERURL}/downloads/build-resume`);
  }
  return (
    <div>
      <ProgressBar progress={14} />

      <div className="hero">
        <div className="headerText">Ready to download your resume?</div>

        <div className="overallButtonContainer">
          <div
            className="buttonContainer"
            onClick={() => {
              triggerDownload();
              //TODO: fix this
              // window.open("http://localhost:3001/downloads/download-resume");
            }}
          >
            PDF Download
          </div>
          <div className="buttonContainer">Word Download</div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .hero {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - 132px);
        }
        .overallButtonContainer {
          display: flex;
          margin-top: 25px;
        }
        .buttonContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          width: 180px;
          padding-left: 0.5em;
          padding-right: 0.5em;
          border: 4px solid #ffa600;
          background-color: #ffa600;
          color: white;
          font-weight: bold;
          cursor: pointer;
          margin: 10px;
        }
        .buttonContainer:hover {
          opacity: 0.7;
        }
        .headerText {
          font-size: 28px;
          font-weight: bold;
          color: #3a7ff2;
        }
      `}</style>
    </div>
  );
};
