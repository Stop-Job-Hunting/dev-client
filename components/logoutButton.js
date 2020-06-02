import { useRouter } from "next/router";

function logout() {
  return fetch("http://localhost:3001/sessions/logout", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
}

function LogoutButton() {
  const router = useRouter();

  async function onLogout() {
    const result = await logout();

    if (result.status === 401) {
      throw new Error("AHHH BAD GO AWAY");
    }

    router.push("/");
  }

  return (
    <div>
      <div className="buttonContainer" onClick={onLogout}>
        Logout
      </div>
      <style jsx>{`
        .buttonContainer {
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
        }
        .buttonContainer:hover {
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
}

export default LogoutButton;
