import ProgressBar from "../../components/progressBar";
import SkillsHighlights from "../../components/sections/skillsHighlights";
import Footer from "../../components/footer";

export default () => {
  return (
    <div>
      <ProgressBar progress={10} />

      <div className="hero">
        <SkillsHighlights />
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
