import { useEffect } from "react";
import LogoutButton from "../components/logoutButton";
import NavBar from "../components/navBar";
import SERVERURL from "../components/constants";

function whoami() {
  return fetch(`${SERVERURL}/user-info`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
}

export default () => {
  async function load() {
    const result = await whoami();

    if (result.status === 401) {
      throw new Error("not logged in");
    }

    const data = await result.json();
    console.log(data);
  }

  return (
    <div>
      <NavBar />

      <div className="hero">
        Ready to start building? Get secret data below!
        <button onClick={load}>Load info</button>
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
