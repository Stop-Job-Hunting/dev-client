import ProgressBar from "../../components/progressBar";
import WorkHighlights from "../../components/sections/workHighlights";
import Footer from "../../components/footer";

export default () => {
  return (
    <div>
      <ProgressBar progress={4} />

      <div className="hero">
        <WorkHighlights />
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
