import ProgressBar from "../../components/progressBar";
import Footer from "../../components/footer";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();

  return (
    <div>
      <ProgressBar progress={12} />

      <div className="hero">
        <div className="componentContainer">
          <div className="upperContainer">
            <div className="textContentContainer">
              <div className="headerTitle">
                Next, add a Professional Summary.
              </div>
              &nbsp;
              <div className="subHeader">
                <strong>You're almost done.</strong>
              </div>
              <div className="subHeader">
                Your summary quickly explains why you are the correct person for
                the job.
              </div>
              <div className="subHeader">
                We'll help you develop a concise summary that will catch the
                recruiters attention.
              </div>
              <div className="templateContainer"></div>
            </div>
            <div className="imageContainer">
              <img src="/assets/summaryworkplz.png" width="220px" />
            </div>
          </div>
          <div className="footerContainer">
            <div
              className="buttonContainer"
              onClick={() => {
                router.push("/section/skills-highlights");
              }}
            >
              Back
            </div>
            <div
              className="buttonContainer"
              onClick={() => {
                router.push("/section/summary");
              }}
            >
              Next
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .hero {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - 132px);
          flex-direction: column;
        }
        .componentContainer {
          display: flex;
          flex-direction: column;
          margin: 40px;
        }
        .upperContainer {
          display: flex;
        }
        .textContentContainer {
          max-width: 600px;
          min-height: 300px;
        }
        .headerTitle {
          font-size: 28px;
          font-weight: bold;
          color: #3a7ff2;
          cursor: default;
        }
        .subHeader {
          font-size: 18px;
          margin-top: 10px;
          cursor: default;
        }
        .templateContainer {
          display: flex;
          margin-top: 25px;
        }
        img {
          padding-left: 5px;
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
};
