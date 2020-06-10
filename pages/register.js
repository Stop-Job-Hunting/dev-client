import NavBar from "../components/navBar";
import UserPassForm from "../components/UserPassForm";
import Footer from "../components/footer";

function Register() {
  return (
    <div>
      <NavBar />
      <div className="hero">
        <UserPassForm />
      </div>
      <Footer />
      <style jsx>{`
        .hero {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #3a7ff2;
          height: 37em;
        }
      `}</style>
    </div>
  );
}

export default Register;
