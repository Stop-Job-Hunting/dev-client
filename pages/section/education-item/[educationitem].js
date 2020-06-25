import EducationItem from "../../../components/sections/educationItem";
import ProgressBar from "../../../components/progressBar";

export default () => {
  return (
    <div>
      <ProgressBar progress={6} />

      <div className="hero">
        <EducationItem />
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
