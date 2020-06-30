import { useEffect } from "react";
import LogoutButton from "../components/logoutButton";
import NavBar from "../components/navBar";
import SERVERURL from "../components/constants";

function writeJSONFile() {
  return fetch(`${SERVERURL}/resumes/build-json`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
}

function buildResume() {
  return fetch(`${SERVERURL}/resumes/build-resume`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
}

export default () => {
  return (
    <div>
      <NavBar />

      <div className="hero">
        <button onClick={writeJSONFile}>Write JSON file</button>
        <button onClick={buildResume}>Build Resume</button>
      </div>
      <style jsx>{`
        .hero {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #f2f2f2;
          min-height: calc(100vh - 132px);
        }
      `}</style>
    </div>
  );
};
