import NavBar from "../../components/navBar";
import SkillsHighlights from "../../components/sections/skillsHighlights";
import Footer from "../../components/footer";

export default () => {
  return (
    <div>
      <NavBar />

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
          padding-top: 2em;
          min-height: 36em;
        }
      `}</style>
    </div>
  );
};
