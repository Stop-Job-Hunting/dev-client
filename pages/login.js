import NavBar from "../components/navBar";
import LoginForm from "../components/LoginForm";
import Footer from "../components/footer";

function Login() {
  return (
    <div>
      <NavBar />
      <div className="hero">
        <LoginForm />
      </div>
      <Footer />

      <style jsx>{`
        .hero {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #3a7ff2;
          min-height: calc(100vh - 132px);
        }
      `}</style>
    </div>
  );
}

export default Login;
