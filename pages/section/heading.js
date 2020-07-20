import Heading from "../../components/sections/heading";
import ProgressBar from "../../components/progressBar";

import Footer from "../../components/footer";

export default () => {
  return (
    <div>
      <ProgressBar progress={4} />

      <div className="hero">
        <Heading />
      </div>
      <Footer />
      <style jsx>{`
        .hero {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 2em;
          min-height: calc(100vh - 132px);
        }
      `}</style>
    </div>
  );
};
