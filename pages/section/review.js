import ProgressBar from "../../components/progressBar";
import Footer from "../../components/footer";
import SERVERURL from "../../constants";

export default () => {
  function triggerDownload() {
    console.log("triggered");
    return fetch(`${SERVERURL}/downloads`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
      res.text().then((text) => {
        console.log(text);
      });
    });
  }
  return (
    <div>
      <ProgressBar progress={12} />

      <div className="hero">
        <div className="headerText">Ready to download your resume?</div>

        <div className="overallButtonContainer">
          <div className="buttonContainer" onClick={triggerDownload}>
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
          height: 600px;
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
