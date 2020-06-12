import NavBar from "../../components/navBar";
import EduSummary from "../../components/sections/eduSummary";

export default () => {
  return (
    <div>
      <NavBar />

      <div className="hero">
        <EduSummary />
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 2em;
          height: 45em;
        }
      `}</style>
    </div>
  );
};
