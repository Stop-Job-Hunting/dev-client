import NavBar from "../../components/navBar";
import HighlightsEditor from "../../components/highlightsEditor";

export default () => {
  return (
    <div>
      <NavBar />

      <div className="hero">
        <HighlightsEditor />
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
