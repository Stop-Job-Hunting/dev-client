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
          <div className="buttonContainer">BUILD RESUME</div>
        </div>
        <div className="resumePhotoContainer">
          <img src="/assets/resume-example.png" width="320px"></img>
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
          width: 200px;
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
