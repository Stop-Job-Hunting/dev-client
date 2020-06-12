import { useState } from "react";
import { useRouter } from "next/router";
import SERVERURL from "../constants";

export default function LoginForm() {
  const router = useRouter();

  function login(username, password) {
    return fetch(`${SERVERURL}/sessions/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
  }

  async function onLogin(username, password) {
    const result = await login(username, password);

    if (result.status === 401) {
      throw new Error("AHHH BAD GO AWAY");
    }

    router.push("/section/app-index");
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleUsername(event) {
    setUsername(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="container">
      <div className="headerContainer">Welcome back! Login below.</div>
      <div className="formGuts">
        <div className="misc">
          <div className="inputLabel">Email / Username</div>
          <input onChange={handleUsername} type="email" />
          <div className="inputLabel">Password</div>

          <input onChange={handlePassword} type="password" />
          <div className="forgotLabel">Forgot your username or password?</div>
          <div
            className="loginButton"
            onClick={() => {
              onLogin(username, password);
            }}
          >
            Login
          </div>
          <div className="registerLinkContainer">
            Need an account?&nbsp;
            <div
              className="signUpContainer"
              onClick={() => {
                router.push("/register");
              }}
            >
              Sign up for free!
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .headerContainer {
          font-size: 28px;
          margin-bottom: 1em;
          font-weight: bold;
          color: white;
          cursor: default;
        }
        .misc {
        }
        .loginButton {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2.2em;
          max-width: 250px;
          padding-left: 0.5em;
          padding-right: 0.5em;
          border: 4px solid #ffa600;
          background-color: #ffa600;
          color: white;
          font-weight: bold;
          cursor: pointer;
          margin-top: 1em;
        }
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 400px;
          padding: 1em;
        }
        .formGuts {
          width: 100%;
          min-height: 280px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1em;
          flex-direction: column;
          background-color: white;
          box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.16);
        }

        input {
          resize: none;
          font-size: 16px;
          line-height: 22px;
          display: flex;
          padding: 5px;
          height: 20px;
          width: 250px;
          border-radius: 0;
          border: 1px solid rgb(118, 118, 118);
          font-family: "Source Sans Pro", Arial, sans-serif !important;
        }
        input:focus {
          border: 1px solid #ffa600;
          outline: 0px;
        }

        .loginButton:hover {
          opacity: 0.7;
        }
        .inputLabel {
          font-size: 14px;
          font-weight: 600;
          line-height: 24px;
          color: #545454 !important;
          margin-top: 10px;
          cursor: default;
        }
        .forgotLabel {
          font-size: 11px;
          font-weight: 600;
          line-height: 24px;
          color: #3a7ff2;
          margin-top: 5px;
          cursor: pointer;
          text-decoration: underline;
          width: 81%;
        }
        .forgotLabel:hover {
          color: #444;
          text-decoration: none;
        }
        .registerLinkContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
          font-size: 11px;
          font-weight: 600;
          line-height: 24px;
          color: #444;
          margin-top: 10px;
          width: 100%;
          cursor: default;
          margin-bottom: 5px;
        }
        .signUpContainer {
          cursor: pointer;
          text-decoration: underline;
          color: #3a7ff2;
        }
        .signUpContainer:hover {
          color: #444;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
