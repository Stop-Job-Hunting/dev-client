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
          Proven to increase response rates by up to 200%.
        </div>
        <div className="templateContainer">
          <div className="imageContainer">
            <img src="/assets/templatePlaceholder.png" width="220px" />
          </div>
          <div className="imageContainer">
            <img src="/assets/templatePlaceholder.png" width="220px" />
          </div>
          <div className="imageContainer">
            <img src="/assets/templatePlaceholder.png" width="220px" />
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .hero {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 610px;
          margin-top: -25px;
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
        .templateContainer {
          display: flex;
          margin-top: 25px;
        }
        .imageContainer {
          margin: 5px;
        }
        img:hover {
          outline: 2px solid #3a7ff2;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
