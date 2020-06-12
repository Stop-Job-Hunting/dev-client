import NavBar from "../../components/navBar";
import Footer from "../../components/footer";

export default () => {
  return (
    <div>
      <NavBar />

      <div className="hero">
        <div className="headerTitle">
          Top Templates For Your Experience Level!
        </div>
        <div className="subHeader">
          Proven to increase response rate by up to 200%.
        </div>
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
        .headerTitle {
          font-size: 28px;
          font-weight: bold;
          color: #3a7ff2;
        }
        .subHeader {
          font-size: 18px;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};
