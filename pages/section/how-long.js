import NavBar from "../../components/navBar";
import Footer from "../../components/footer";

export default () => {
  return (
    <div>
      <NavBar />

      <div className="hero">
        <div className="headerTitle">How long have you been working?</div>
        <div className="subHeader">
          We'll find the best template for your experience level.
        </div>
        <div className="expButtonContainer">
          <div className="buttonItem">0-3 Years</div>
          <div className="buttonItem">3-5 Years</div>
          <div className="buttonItem">5-10 Years</div>
          <div className="buttonItem">10+ Years</div>
        </div>
      </div>
      <div className="fillSpace"></div>
      <Footer />
      <style jsx>{`
        .hero {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 450px;
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
        .expButtonContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 25px;
        }
        .buttonItem {
          height: 50px;
          width: 140px;
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #444;
          font-weight: bold;
          border: 5px solid #ffa600;
          font-size: 18px;
          cursor: pointer;
          margin: 5px;
        }
        .buttonItem:hover {
          background-color: #ffa600;
          color: white;
        }
        .fillSpace {
          height: 130px;
        }
      `}</style>
    </div>
  );
};
