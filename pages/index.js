import UserPassForm from "../components/UserPassForm";
import LoginForm from "../components/LoginForm";
import NavBar from "../components/navBar";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="indexContainer">
      <NavBar />
      <div className="imgContainer">
        <img className="heroImage" src="/assets/heroimage900w.png"></img>
      </div>
      <div className="overlayContainer">
        <div>
          <div className="headerItem">Build A Better Resume</div>
          <div className="headerItem">Land More Interviews</div>
          <div className="headerItemLast">Make More Money</div>
          <div
            className="buttonContainer"
            onClick={() => {
              router.push("/section/app-index");
            }}
          >
            Build My Resume
          </div>
        </div>
        <div className="resumePhotoContainer">
          <img src="/assets/resume-example.png" width="320px"></img>
        </div>
      </div>

      {/* Call to action */}
      <div className="callToActionBarContainer">
        Try Our FREE Premium Resume Builder
      </div>

      {/* How It Works */}
      <div className="howItWorksContainer">
        <div className="hiwTitleContainer"></div>
        <div className="hiwSubItemsContainer">
          <div className="subItemIndividualContainer">
            <img src="/assets/ione.png" width="120px"></img>
            <div className="subItemHeader">Pick Your Template</div>
            <div className="subItemDescription">
              <center>
                Pick from templates recommended by recruiters and proven to
                increase your chance of landing an interview.
              </center>
            </div>
          </div>
          <div className="subItemIndividualContainer">
            <img src="/assets/itwo.png" width="120px"></img>
            <div className="subItemHeader">Enter Your Information</div>
            <div className="subItemDescription">
              <center>
                Enter you information with expert suggestions designed to
                impress hiring managers and showcase your skills.
              </center>
            </div>
          </div>
          <div className="subItemIndividualContainer">
            <img src="/assets/ithree.png" width="120px"></img>
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

      {/* Review Section */}
      <div className="reviewContainer">
        <div className="imgContainerReviews">
          <img className="heroImage" src="/assets/reviewbanner.png"></img>
        </div>
        <div className="reviewHeaderContainer">
          <center>What are our users saying?</center>
        </div>

        <div className="reviewImageContainer">
          <img
            className="reviewImage"
            src="/assets/sammilittle.png"
            width="300px"
          ></img>
          <img
            className="reviewImageSecond"
            src="/assets/ryanclark.png"
            width="300px"
          ></img>
          <img
            className="reviewImagelast"
            src="/assets/tylerrutzen.png"
            width="300px"
          ></img>
        </div>
      </div>

      {/* ending call to action section */}
      <div className="lastCallToActionContainer">
        <div className="lastCallToActionHeader">Ready To Get Started?</div>
        <div className="buttonContainerLastCTA">Build My Resume</div>
      </div>
      <div className="footerContainer">
        Contact | Privacy Policy | Terms Of Service
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
        .imgContainerReviews {
          position: absolute;
          z-index: -1;
          height: 440px;
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
          cursor: default;
        }
        .headerItemLast {
          color: #ffa600;
          cursor: default;
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
          cursor: default;
        }
        .howItWorksContainer {
          width: 100%;
          min-height: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          cursor: default;
        }
        .hiwTitleContainer {
          font-size: 40px;
          font-weight: bold;
          color: #444;
        }
        .hiwSubItemsContainer {
          display: flex;
          width: 80%;
          justify-content: space-between;
          align-items: center;
        }
        .subItemHeader {
          margin-top: 10px;
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
        .reviewContainer {
          width: 100%;
          min-height: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          cursor: default;
        }
        .reviewImage {
          margin: 30px 10px 10px 10px;
        }
        .reviewImagelast {
          margin: 30px 10px 10px 10px;
        }
        .reviewImageSecond {
          margin: 30px 10px 10px 10px;
        }
        .reviewHeaderContainer {
          font-size: 40px;
          color: white;
          font-weight: bold;
          margin-top: 10px;
          cursor: default;
        }

        .lastCallToActionContainer {
          width: 100%;
          background-color: #444;
          height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 22px;
          font-weight: bold;
          flex-direction: column;
          cursor: default;
        }

        .buttonContainerLastCTA {
          outline: 5px solid white;
          width: 200px;
          height: 50px;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 50px;
          cursor: pointer;
          color: #white;
        }
        .buttonContainerLastCTA:hover {
          opacity: 0.7;
          cursor: pointer;
        }

        .lastCallToActionHeader {
          font-size: 40px;
          color: white;
          font-weight: bold;
          margin-top: 10px;
        }

        .footerContainer {
          width: 100%;
          background-color: #444;
          color: white;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
        }

        @media only screen and (max-width: 820px) {
          .resumePhotoContainer {
            display: none;
          }
          .reviewImagelast {
            display: none;
          }
        }

        @media only screen and (max-width: 960px) {
          .reviewImagelast {
            display: none;
          }
        }

        @media only screen and (max-width: 640px) {
          .reviewImageSecond {
            display: none;
          }
        }

        @media only screen and (max-width: 830px) {
          .hiwSubItemsContainer {
            flex-direction: column;
            margin-top: 30px;
            margin-bottom: 30px;
          }
          .subItemIndividualContainer {
            margin-bottom: 30px;
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
