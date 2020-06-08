import UserPassForm from "../components/UserPassForm";
import LoginForm from "../components/LoginForm";
import NavBar from "../components/navBar";

export default function Home() {
  return (
    <div className="indexContainer">
      <NavBar />
      <div className="imgContainer">
        <img className="heroImage" src="/assets/heroimage900w.png"></img>
      </div>
      <div className="overlayContainer">
        <div>
          <div className="headerItem">Builder A Better Resume</div>
          <div className="headerItem">Land More Interviews</div>
          <div className="headerItemLast">Make More Money</div>
          <div className="buttonContainer">BUILD MY RESUME</div>
        </div>
        <div className="resumePhotoContainer">
          <img src="/assets/resume-example.png" width="320px"></img>
        </div>
      </div>
      <div className="callToActionBarContainer">
        Templates Proven To Help Get You Hired
      </div>
      <div className="howItWorksContainer">
        <div className="hiwTitleContainer">How It Works</div>
        <div className="hiwSubItemsContainer">
          <div className="subItemIndividualContainer">
            <div className="subItemHeader">Pick Your Template</div>
            <div className="subItemDescription">
              <center>
                Pick from templates recommended by recruiters and proven to
                increase your chance of landing an interview.
              </center>
            </div>
          </div>
          <div className="subItemIndividualContainer">
            <div className="subItemHeader">Enter Your Information</div>
            <div className="subItemDescription">
              <center>
                Enter you information with expert suggestions designed to
                impress hiring managers and showcase your skills.
              </center>
            </div>
          </div>
          <div className="subItemIndividualContainer">
            <div className="subItemHeader">Get More Interviews</div>
            <div className="subItemDescription">
              <center>
                Build a better resume, get more interviews, land a better job,
                make more money, and Stop Job Hunting.
              </center>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .indexContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .imgContainer {
          position: absolute;
          z-index: -1;
          height: 550px;
          width: 100%;
        }
        .overlayContainer {
          width: 90%;
          height: 480px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          color: #fff !important;
          font-size: 40px;
          font-weight: bold;
        }
        .headerItem {
          margin-bottom: 8px;
        }
        .headerItemLast {
          color: #ffa600;
        }
        .buttonContainer {
          background-color: #ce9eec;
          width: 240px;
          height: 60px;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 30px;
          cursor: pointer;
        }
        .buttonContainer:hover {
          opacity: 0.85;
          cursor: pointer;
        }
        .resumePhotoContainer {
          width: 350px;
          height: 400px;
          margin-left: 10px;
        }
        .heroImage {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .callToActionBarContainer {
          width: 100%;
          background-color: #ffa600;
          height: 60px;
          margin-top: -2px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 22px;
          font-weight: bold;
        }
        .howItWorksContainer {
          width: 100%;
          border-bottom: 10px solid red;
          height: 400px;
          display: flex;
          align-items: center;
          padding-top: 30px;
          flex-direction: column;
        }
        .hiwTitleContainer {
          font-size: 40px;
          font-weight: bold;
          color: #444;
        }
        .hiwSubItemsContainer {
          display: flex;
          padding-top: 30px;
          width: 80%;
          justify-content: space-between;
          align-items: center;
        }
        .subItemHeader {
          font-size: 20px;
          font-weight: bold;
          color: #444;
        }
        .subItemIndividualContainer {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .subItemDescription {
          font-size: 18px;
          margin: 15px;
        }
        @media only screen and (max-width: 820px) {
          .resumePhotoContainer {
            display: none;
          }
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          font-family: Arial;
          margin: 0;
          color: #444;
        }
      `}</style>
    </div>
  );
}

// https://coolors.co/gradient-maker/ffa600-ce9eec-3a7ff2
