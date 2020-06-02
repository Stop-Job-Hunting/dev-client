import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginForm() {
  const router = useRouter();

  function register(username, password) {
    return fetch("http://localhost:3001/sessions/register", {
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
      <div className="headerContainer">Create Your Account</div>
      <div className="formGuts">
        <div className="misc">
          <h2>username</h2>
          <textarea onChange={handleUsername} />
          <h2>password</h2>
          <textarea onChange={handlePassword} />
          <div
            className="loginButton"
            onClick={() => {
              onRegister(username, password);
            }}
          >
            Login
          </div>
        </div>
      </div>

      <style jsx>{`
        .headerContainer {
          font-size: 1.5em;
          margin-bottom: 1em;
          font-weight: bold;
        }
        .loginButton {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2.2em;
          width: 5em;
          padding-left: 0.5em;
          padding-right: 0.5em;
          border: 4px solid #ffa600;
          border-radius: 4px;
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
          justify-content; center;
          width: 400px;
          padding: 1em;
          margin: 5em;
        }
        .formGuts {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1em;
          flex-direction: column;
          border: 2px solid #444;
          border-radius: 4px;
        }
        button {
          width: 200px;
          margin-top: 20px;
          height: 30px;
        }
        textarea {
          resize: none;
          font-size: 18px;
          display: flex;
          justify-content: center;
          padding: 5px;
          height: 20px;
          max-width: 250px;
        }
        .loginButton:hover {
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
}
