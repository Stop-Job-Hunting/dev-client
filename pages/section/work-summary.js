import ProgressBar from "../../components/progressBar";
import WorkSummary from "../../components/sections/workSummary";
import Footer from "../../components/footer";

export default () => {
  return (
    <div>
      <ProgressBar progress={6} />

      <div className="hero">
        <WorkSummary />
      </div>
      <Footer />

      <style jsx>{`
        .hero {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: calc(100vh - 132px);
        }
      `}</style>
    </div>
  );
};
