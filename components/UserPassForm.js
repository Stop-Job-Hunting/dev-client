import { useState } from "react";
import { useRouter } from "next/router";
import SERVERURL from "../constants";

export default function LoginForm() {
  const router = useRouter();

  function register(username, password) {
    return fetch(`${SERVERURL}/sessions/register`, {
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

  async function onRegister(username, password) {
    const result = await register(username, password);

    if (result.status === 401) {
      throw new Error("AHHH BAD GO AWAY");
    }

    router.push("/builder");
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
      <div className="headerContainer">
        <center>Create an account to save your work!</center>
      </div>
      <div className="formGuts">
        <div className="misc">
          <div className="inputLabel">Email / Username</div>

          <textarea onChange={handleUsername} />
          <div className="inputLabel">Password</div>
          <textarea onChange={handlePassword} />
          <div
            className="loginButton"
            onClick={() => {
              onRegister(username, password);
            }}
          >
            Create Account
          </div>
          <div className="loginLinkContainer">
            Already have an account?&nbsp;
            <div className="loginContainer">Login here.</div>
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

        textarea {
          resize: none;
          font-size: 18px;
          display: flex;
          justify-content: center;
          padding: 5px;
          height: 20px;
          max-width: 250px;
          border-radius: 0;
        }
        textarea:focus {
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
        .loginLinkContainer {
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
        .loginContainer {
          cursor: pointer;
          text-decoration: underline;
          color: #3a7ff2;
        }
        .loginContainer:hover {
          color: #444;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
