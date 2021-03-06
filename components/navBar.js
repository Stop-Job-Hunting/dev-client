import { useEffect, useState } from "react";
import LogoutButton from "../components/logoutButton";
import { useRouter } from "next/router";
import SERVERURL from "./constants";

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

// this is the navbar
function NavBar() {
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
    console.log(navState);
  });

  function loggedInStatusButton() {
    if (navState === "load") {
      return <div>loading</div>;
    } else if (navState === "loggedIn") {
      return (
        <div className="builderLogoutContainer">
          <LogoutButton />
          <style jsx>{`
            .builderLogoutContainer {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
            }
            .builderContainer {
              margin-right: 1em;
              cursor: pointer;
            }
            .builderContainer:hover {
              opacity: 0.7;
            }
            .menuListItem:hover {
              opacity: 0.7;
            }
          `}</style>
        </div>
      );
    } else if (navState === "loggedOut") {
      return (
        <div className="inOutContainer">
          <div
            className="logInContainer"
            onClick={() => {
              router.push("/login");
            }}
          >
            <div className="menuListItem">Log In</div>
          </div>

          <div
            className="buttonContainer"
            onClick={() => {
              router.push("/register");
            }}
          >
            Sign Up
          </div>

          <style jsx>{`
            .logInContainer {
              margin-right: 1em;
              cursor: pointer;
            }
            .logincontainer: hover {
              opacity: 0.7;
            }
            .inOutContainer {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: row;
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
            .menuListItem:hover {
              opacity: 0.7;
            }
          `}</style>
        </div>
      );
    }
  }

  const loggedStatus = loggedInStatusButton();

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
      <div className="navBarContainer">{loggedStatus}</div>
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

export default NavBar;
