import { useEffect, useState } from "react";
import LogoutButton from "./logoutButton";
import { useRouter } from "next/router";
import SERVERURL from "../constants";
import { ArrowRightCircle } from "react-feather";

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
      progress: 10,
    }),
    credentials: "include",
  });
}

// this is the navbar
function ProgressBar(props) {
  const router = useRouter();
  const [navState, setNavState] = useState("load");
  const [progressState, setProgressState] = useState(props.progress);

  //Calls the request to server, then sets the appropriate state

  // async function checkLoggedIn() {
  // const result = await getLoggedIn();
  // const data = await result.json();
  // if (data) {
  //   console.log("loggedIn");
  //   setNavState("loggedIn");
  // } else {
  //   setNavState("loggedOut");
  // }
  // }

  // useEffect(() => {
  //   checkLoggedIn();
  //   sendProgress();
  //   console.log(navState);
  // });

  const headingArray = [
    <div className="navItemContainer">Heading </div>,
    <ArrowRightCircle width="16px" />,
    <div className="navItemContainer">Work History</div>,
    <ArrowRightCircle width="16px" />,
    <div className="navItemContainer">Education</div>,
    <ArrowRightCircle width="16px" />,
    <div className="navItemContainer">Skills</div>,
    <ArrowRightCircle width="16px" />,
    <div className="navItemContainer">Summary</div>,
    <ArrowRightCircle width="16px" />,
    <div className="navItemContainer">Download</div>,
  ];

  let counter = 0;
  const styledHeadingArray = headingArray.map((item) => {
    counter++;
    if (counter === progressState || counter === progressState - 1) {
      if (item.props.width) {
        return (
          <div>
            {item}
            <style jsx>{`
              div {
                color: #3a7ff2;
              }
            `}</style>
          </div>
        );
      } else {
        return (
          <div className="itemContainer">
            {item}
            <style jsx>{`
              .itemContainer {
                color: #3a7ff2;
                margin-left: 10px;
                margin-right: 10px;
                font-size: 16px;
                display: flex;
                align-items: center;
                cursor: pointer;
              }
              .itemContainer:hover {
                color: #3a7ff2;
              }
            `}</style>
          </div>
        );
      }
    } else if (Math.sign(progressState) !== -1) {
      if (item.props.width) {
        return (
          <div>
            {item}
            <style jsx>{`
              div {
                color: #bfbfbf;
              }
            `}</style>
          </div>
        );
      } else {
        return (
          <div className="itemContainerGrey">
            {item}
            <style jsx>{`
              .itemContainerGrey {
                color: #bfbfbf;
                margin-left: 10px;
                margin-right: 10px;
                font-size: 16px;
                display: flex;
                align-items: center;
                cursor: pointer;
              }
              .itemContainerGrey:hover {
                color: #3a7ff2;
              }
            `}</style>
          </div>
        );
      }
    }
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
      <div className="navBarContainer">
        {styledHeadingArray}
        {/* <div className="navItemContainer">Heading</div>
        <ArrowRightCircle width="16px" />
        <div className="navItemContainer">Work History</div>
        <ArrowRightCircle width="16px" />
        <div className="navItemContainer">Education</div>
        <ArrowRightCircle width="16px" />
        <div className="navItemContainer">Skills</div>
        <ArrowRightCircle width="16px" />
        <div className="navItemContainer">Summary</div>
        <ArrowRightCircle width="16px" />
        <div className="navItemContainer">Download</div> */}
      </div>
      <style jsx>{`
        .navContainer {
          width: 100%;
          display: flex;
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
          display: flex;
          align-items: center;
          font-size: 14px;
          cursor: default;
        }
        .navItemContainer {
          margin-right: 10px;
          margin-left: 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default ProgressBar;
