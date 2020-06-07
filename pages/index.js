import UserPassForm from "../components/UserPassForm";
import LoginForm from "../components/LoginForm";
import NavBar from "../components/navBar";

export default function Home() {
  return (
    <div>
      <NavBar />

      <style jsx global>{`
        html,
        body {
          font-family: Arial;
          margin: 0;
          color: #444;
        }
      `}</style>
    </div>
  );
}

// https://coolors.co/gradient-maker/ffa600-ce9eec-3a7ff2
