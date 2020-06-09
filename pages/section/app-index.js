import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import { Phone, Mail } from "react-feather";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();

  return (
    <>
      <NavBar />
      <div className="appIndexContainer">
        <div className="body">
          <div className="leftContainer">
            <div className="leftContentContainer">
              <div className="titleContainer">Build A Better Resume</div>

              <div className="leftSubItemContainer">
                <div className="leftListItemContainer">
                  <img src="/assets/ione.png" width="60px"></img>
                  <div className="leftListItem">
                    Select a recruiter recommended template.
                  </div>
                </div>

                <div className="leftListItemContainer">
                  <img src="/assets/itwo.png" width="60px"></img>
                  <div className="leftListItem">
                    Enter your info with expert suggested content.
                  </div>
                </div>

                <div className="leftListItemContainer">
                  <img src="/assets/ithree.png" width="60px"></img>
                  <div className="leftListItem">
                    Download your resume and get more interviews!
                  </div>
                </div>

                <div
                  className="createResumeButton"
                  onClick={() => {
                    router.push("/builder");
                  }}
                >
                  Create My Resume
                </div>
              </div>
            </div>
          </div>
          <div className="rightContainer">
            <div className="rightContentContainer">
              <div className="rightTitleContainer">
                Questions? Contact a recruiter, we love to help!
              </div>
              <div className="rightItemContainer">
                <Phone color="#3a7ff2" size={28} />
                <div className="contactContainer">+1 (800) 839-8322</div>
              </div>
              <div className="rightItemContainer">
                <Mail color="#FFA600" size={28} />
                <div className="contactContainer">
                  recruiting@stopjobhunting.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <style jsx>{`
          .body {
            width: 100%;
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row-reverse;
          }
          .appIndexContainer {
            display: flex;
            flex-flow: column;
            height: 41em;
          }
          .leftContainer {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 100%;
            height: 38em;
          }
          .rightContainer {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            background-color: #f9f9f9;
            height: 38em;
            z-index: -1;
          }
          .leftContentContainer {
            padding: 15px;
          }
          .titleContainer {
            font-size: 40px;
            font-weight: bold;
            margin-bottom: 20px;
          }
          .leftListItemContainer {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .leftListItem {
            font-size: 20px;
            font-weight: 100;
            margin-left: 10px;
          }
          .leftSubItemContainer {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .createResumeButton {
            width: 200px;
            height: 50px;
            background-color: #ce9eec;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 18px;
            cursor: pointer;
            margin-top: 20px;
          }
          .createResumeButton:hover {
            opacity: 0.7;
            cursor: pointer;
          }
          .rightTitleContainer {
            font-size: 24px;
            margin-bottom: 12px;
          }
          .rightContentContainer {
            padding: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .rightItemContainer {
            display: flex;
            margin-top: 10px;
            align-items: center;
            justify-content: center;
          }
          .contactContainer {
            margin-left: 10px;
            font-size: 18px;
            font-weight: bold;
          }

          @media only screen and (max-width: 730px) {
            .body {
              flex-direction: column;
            }
            .leftContainer {
              height: 30em;
            }
            .rightContainer {
              height: 20em;
            }
          }
        `}</style>
      </div>
    </>
  );
};
