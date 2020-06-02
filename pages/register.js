import NavBar from "../components/navBar";
import UserPassForm from "../components/UserPassForm";

function Register() {
  return (
    <div>
      <NavBar />
      <div className="hero">
        <UserPassForm />
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

export default Register;
