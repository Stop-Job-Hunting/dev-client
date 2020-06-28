import ProgressBar from "../../components/progressBar";
import Footer from "../../components/footer";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();

  return (
    <div>
      <ProgressBar progress={-1} />

      <div className="hero">
        <div className="headerTitle">How long have you been working?</div>
        <div className="subHeader">
          We'll find the best template for your experience level.
        </div>
        <div className="expButtonContainer">
          <div
            className="buttonItem"
            onClick={() => {
              router.push("/section/select-template");
            }}
          >
            0-3 Years
          </div>
          <div
            className="buttonItem"
            onClick={() => {
              router.push("/section/select-template");
            }}
          >
            3-5 Years
          </div>
          <div
            className="buttonItem"
            onClick={() => {
              router.push("/section/select-template");
            }}
          >
            5-10 Years
          </div>
          <div
            className="buttonItem"
            onClick={() => {
              router.push("/section/select-template");
            }}
          >
            10+ Years
          </div>
        </div>
      </div>
      {/* <div className="fillSpace"></div> */}
      <Footer />
      <style jsx>{`
        .hero {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - 132px);
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
          color: #3a7ff2;
          font-weight: bold;
          border: 5px solid #3a7ff2;
          font-size: 18px;
          cursor: pointer;
          margin: 5px;
        }
        .buttonItem:hover {
          background-color: #3a7ff2;
          color: white;
        }
        .fillSpace {
          height: 130px;
        }
      `}</style>
    </div>
  );
};
