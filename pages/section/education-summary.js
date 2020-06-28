import ProgressBar from "../../components/progressBar";
import EduSummary from "../../components/sections/eduSummary";
import Footer from "../../components/footer";

export default () => {
  return (
    <div>
      <ProgressBar progress={6} />

      <div className="hero">
        <EduSummary />
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
