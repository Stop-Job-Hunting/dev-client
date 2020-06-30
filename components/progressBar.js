import { useEffect, useState } from "react";
import LogoutButton from "./logoutButton";
import { useRouter } from "next/router";
import SERVERURL from "./constants";
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
    <div
      key={`${Math.random() * 100}`}
      className="navItemContainer"
      onClick={() => {
        router.push("/section/heading");
      }}
    >
      Heading{" "}
    </div>,
    <ArrowRightCircle width="16px" key={`${Math.random() * 100}`} />,
    <div
      key={`${Math.random() * 100}`}
      className="navItemContainer"
      onClick={() => {
        router.push("/section/work-index");
      }}
    >
      Work History
    </div>,
    <ArrowRightCircle width="16px" key={`${Math.random() * 100}`} />,
    <div
      key={`${Math.random() * 100}`}
      className="navItemContainer"
      onClick={() => {
        router.push("/section/education-index");
      }}
    >
      Education
    </div>,
    <ArrowRightCircle width="16px" key={`${Math.random() * 100}`} />,
    <div
      key={`${Math.random() * 100}`}
      className="navItemContainer"
      onClick={() => {
        router.push("/section/skills-index");
      }}
    >
      Skills
    </div>,
    <ArrowRightCircle width="16px" key={`${Math.random() * 100}`} />,
    <div
      key={`${Math.random() * 100}`}
      className="navItemContainer"
      onClick={() => {
        router.push("/section/summary-index");
      }}
    >
      Summary
    </div>,
    <ArrowRightCircle width="16px" key={`${Math.random() * 100}`} />,
    <div
      key={`${Math.random() * 100}`}
      className="navItemContainer"
      onClick={() => {
        router.push("/section/review");
      }}
    >
      Download
    </div>,
  ];

  let counter = 0;
  const styledHeadingArray = headingArray.map((item) => {
    counter++;
    if (counter === progressState || counter === progressState - 1) {
      if (item.props.width) {
        return (
          <div key={`${Math.random() * 100}`}>
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
          <div className="itemContainer" key={`${Math.random() * 100}`}>
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
              @media only screen and (max-width: 940px) {
                .itemContainer {
                  font-size: 12px;
                }
              }
              @media only screen and (max-width: 810px) {
                .itemContainer {
                  font-size: 10px;
                }
              }
              @media only screen and (max-width: 740px) {
                .itemContainer {
                  display: none;
                }
              }
            `}</style>
          </div>
        );
      }
    } else if (Math.sign(progressState) !== -1) {
      if (item.props.width) {
        return (
          <div key={`${Math.random() * 100}`}>
            {item}
            <style jsx>{`
              div {
                color: #bfbfbf;
              }
              @media only screen and (max-width: 740px) {
                div {
                  display: none;
                }
              }
            `}</style>
          </div>
        );
      } else {
        return (
          <div className="itemContainerGrey" key={`${Math.random() * 100}`}>
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
              @media only screen and (max-width: 940px) {
                .itemContainerGrey {
                  font-size: 12px;
                }
              }
              @media only screen and (max-width: 810px) {
                .itemContainerGrey {
                  font-size: 10px;
                }
              }
              @media only screen and (max-width: 740px) {
                .itemContainerGrey {
                  display: none;
                }
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
