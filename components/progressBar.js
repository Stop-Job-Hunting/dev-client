import { useEffect, useState } from "react";
import LogoutButton from "./logoutButton";
import { useRouter } from "next/router";
import SERVERURL from "../constants";

// defines the fetch request to server to check if logged in
function getLoggedIn() {
  return fetch(`${SERVERURL}/sessions/am-i-logged-in`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
}

function sendProgress() {
  return fetch(`${SERVERURL}/sessions/update-progress`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      progress: 10
    }),
    credentials: "include",
  });
}
// this is the navbar
function ProgressBar() {
  const router = useRouter();
  const [navState, setNavState] = useState("load");

  //Calls the request to server, then sets the appropriate state
  async function checkLoggedIn() {
    const result = await getLoggedIn();
    const data = await result.json();

    if (data) {
      setNavState("loggedIn");

    } else {
      setNavState("loggedOut");
    }
  }

  useEffect(() => {
    checkLoggedIn();
    sendProgress();
    console.log(navState);
  });


  return (
    <div className="navContainer">
      <div
        className="logoContainer"
        onClick={() => {
          router.push("/");
        }}
      >
        <img src="/assets/SJHlogo.png" width="280px"></img>
      </div>
      <div className="navBarContainer"></div>
      <style jsx>{`
        .navContainer {
          width: 100%;
          display: flex;
          color: #3a7ff2;
          font-weight: bold;
          align-items: center;
          justify-content: space-between;

          height: 4.5em;
          background-color: #fbfcfd;
          box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.16);
        }
        .logoContainer {
          padding-left: 10px;
          font-size: 2em;
          font-weight: bold;
          color: #444;
          cursor: pointer;
          display: flex;
          1-items: center;
        }
        .logocontainer: hover {
          opacity: 0.9;
        }
        .navBarContainer {
          margin-right: 18px;
        }
      `}</style>
    </div>
  );
}

export default ProgressBar;
