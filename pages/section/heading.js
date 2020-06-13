import Heading from "../../components/sections/heading";
import ProgressBar from "../../components/progressBar";

import NavBar from "../../components/navBar";

export default () => {
  return (
    <div>
      <ProgressBar progress={2} />

      <div className="hero">
        <Heading />
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
