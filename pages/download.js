import { useEffect } from "react";
import LogoutButton from "../components/logoutButton";
import NavBar from "../components/navBar";


function writeJSONFile() {

  return fetch("http://localhost:3001/resumes/build-json", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include"
  });
}

function buildResume() {

  return fetch("http://localhost:3001/resumes/build-resume", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include"
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
          height: 300px;
        }
      `}</style>
    </div>
  );
};
