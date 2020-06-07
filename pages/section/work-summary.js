import Heading from "../../components/heading";

import NavBar from "../../components/navBar";
import WorkSummary from "../../components/workSummary";

export default () => {
  return (
    <div>
      <NavBar />

      <div className="hero">
        <WorkSummary />
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
