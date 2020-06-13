import ProgressBar from "../../components/progressBar";
import WorkSummary from "../../components/sections/workSummary";

export default () => {
  return (
    <div>
      <ProgressBar progress={4} />

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
