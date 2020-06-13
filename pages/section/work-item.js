import ProgressBar from "../../components/progressBar";
import WorkItem from "../../components/sections/workItem";

export default () => {
  return (
    <div>
      <ProgressBar progress={4} />

      <div className="hero">
        <WorkItem />
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
