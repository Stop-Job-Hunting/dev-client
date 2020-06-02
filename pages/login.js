import NavBar from "../components/navBar";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div>
      <NavBar />
      <div className="hero">
        <LoginForm />
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

export default Login;
