import EducationItem from "../../components/sections/educationItem";
import Footer from "../../components/footer";
import ProgressBar from "../../components/progressBar";

export default () => {
  return (
    <div>
      <ProgressBar progress={6} />

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
