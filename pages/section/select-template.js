import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
import ProgressBar from "../../components/progressBar";
import SERVERURL from "../../components/constants";

export default () => {
  const router = useRouter();

  function addTemplate(template) {
    console.log("going to put template", template);
    return fetch(`${SERVERURL}/basics/update`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(template),
    });
  }

  function commitData(template) {
    return fetch(`${SERVERURL}/basics/new-basic`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(template),
    });
  }
  return (
    <div>
      <ProgressBar progress={2} />

      <div className="hero">
        <div className="headerTitle">
          Select A Recruiter Recommended Template!
        </div>
        <div className="subHeader">
          Proven to increase response rates by up to 200%.
        </div>
        <div className="templateContainer">
          <div
            className="imageContainer"
            onClick={() => {
              commitData({
                template: `-t node_modules/jsonresume-theme-macchiato`,
              });
              console.log("template: jsonresume-theme-macchiato");
              router.push("/section/heading");
            }}
          >
            <img src="/assets/templatePlaceholder.png" width="220px" />
          </div>
          {/* jsonresume-theme-macchiato, jsonresume-theme-paper is good */}
          <div
            className="imageContainer"
            onClick={() => {
              commitData({
                template: `-t node_modules/jsonresume-theme-print-flexbox`,
              });
              console.log("template: jsonresume-theme-print-flexbox");
              // commitData({ template: `jsonresume-theme-print-flexbox` });
              router.push("/section/heading");
            }}
          >
            <img src="/assets/templatePlaceholder.png" width="220px" />
          </div>
          <div
            className="imageContainer"
            onClick={() => {
              commitData({
                template: `-t node_modules/jsonresume-theme-stackoverflow`,
              });
              console.log(
                "template: -t node_modules/jsonresume-theme-stackoverflow"
              );
              router.push("/section/heading");
            }}
          >
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
          min-height: calc(100vh - 132px);
        }
        .headerTitle {
          font-size: 28px;
          font-weight: bold;
          color: #3a7ff2;
          cursor: default;
        }
        .subHeader {
          font-size: 18px;
          margin-top: 10px;
          cursor: default;
        }
        .templateContainer {
          display: flex;
          margin-top: 34px;
        }
        .imageContainer {
          margin: 8px;
        }
        img:hover {
          outline: 2px solid #3a7ff2;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
