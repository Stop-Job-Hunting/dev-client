import ProgressBar from "../../../components/progressBar";
import WorkItem from "../../../components/sections/WorkItem";
import Footer from "../../../components/footer";

export default () => {
  return (
    <div>
      <ProgressBar progress={6} />

      <div className="hero">
        <WorkItem />
      </div>
      <Footer />
      <style jsx>{`
        .hero {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          // padding-top: 2em;
          min-height: calc(100vh - 132px);
        }
      `}</style>
    </div>
  );
};
