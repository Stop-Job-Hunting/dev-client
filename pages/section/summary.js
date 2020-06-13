import ProgressBar from "../../components/progressBar";
import Summary from "../../components/sections/summary";
import Footer from "../../components/footer";

export default () => {
  return (
    <div>
      <ProgressBar progress={10} />

      <div className="hero">
        <Summary />
      </div>
      <Footer />
      <style jsx>{`
        .hero {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 2em;
          min-height: 36em;
        }
      `}</style>
    </div>
  );
};
