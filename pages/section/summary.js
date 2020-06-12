import NavBar from "../../components/navBar";
import Summary from "../../components/sections/summary";
import Footer from "../../components/footer";

export default () => {
  return (
    <div>
      <NavBar />

      <div className="hero">
        <Summary />
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
