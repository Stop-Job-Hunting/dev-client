import EducationItem from "../../../components/sections/educationItem";
import ProgressBar from "../../../components/progressBar";
import Footer from "../../../components/footer";

export default () => {
  return (
    <div>
      <ProgressBar progress={8} />

      <div className="hero">
        <EducationItem />
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
