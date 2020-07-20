import NavBar from "../components/navBar";
import Footer from "../components/footer";

function PrivacyPolicy() {
  return (
    <div>
      <NavBar />
      <div className="pageContainer">
        <div className="contentContainer">
          <h2>Who We Are</h2>
          <div>Our website address is: https://stopjobhunting.com.</div>
          &nbsp;
          <div>
            This privacy policy (“policy”) will help you understand how Stop Job
            Hunting (“us”, “we”, “our”) uses and protects the data you provide
            to us when you visit and use stopjobhunting.com (“website”,
            “service”).
          </div>
          &nbsp;
          <div>
            We reserve the right to change this policy at any given time, of
            which you will be promptly updated. If you want to make sure that
            you are up to date with the latest changes, we advise you to
            frequently visit this page.
          </div>
          <h3>What User Data We Collect</h3>
          &nbsp;
          <div>
            When you visit the website, we may collect the following data:
          </div>
          &nbsp;
          <div>
            <ul>
              <li>Your IP address.</li>
              <li>Your contact information and email address.</li>
              <li>Other information such as interests and preferences.</li>
              <li>
                Data profile regarding your online behavior on our website.
              </li>
            </ul>
          </div>
          <h3>Why We Collect Your Data</h3>
          <div>We are collecting your data for several reasons:</div>
          &nbsp;
          <div>
            <ul>
              <li>To better understand your needs.</li>
              <li>To improve our services and products.</li>
              <li>
                To send you promotional emails containing the information we
                think you will find interesting.
              </li>
              <li>
                To contact you to fill out surveys and participate in other
                types of market research.
              </li>
              <li>
                To customize our website according to your online behavior and
                personal preferences.
              </li>
            </ul>
          </div>
          &nbsp;
          <h3>Safeguarding And Securing Your Data</h3>
          &nbsp;
          <div>
            Stop Job Hunting is committed to securing your data and keeping it
            confidential. Stop Job Hunting has done all in its power to prevent
            data theft, unauthorized access, and disclosure by implementing the
            latest technologies and software, which help us safeguard all the
            information we collect online.
          </div>
          <h3>Our Cookie Policy</h3>
          <div>
            Once you agree to allow our website to use cookies, you also agree
            to use the data it collects regarding your online behavior (analyze
            web traffic, web pages you spend the most time on, and websites you
            visit). The data we collect by using cookies is used to customize
            our website to your needs and to server you relevant advertisements.
            After we use the data for statistical analysis, the data is
            completely removed from our systems. Please note that cookies don’t
            allow us to gain control of your computer in any way. They are
            strictly used to monitor which pages you find useful and which you
            do not so that we can provide a better experience for you. If you
            want to disable cookies, you can do it by accessing the settings of
            your internet browser. (Provide links for cookie settings for major
            internet browsers).
          </div>
          &nbsp;
          <h3>Restricting The Collection Of Your Personal Data</h3>
          &nbsp;
          <div>
            Stop Job Hunting will not lease, sell or distribute your personal
            information to any third parties, unless we have your permission. We
            might do so if the law forces us. Your personal information will be
            used when we need to send you promotional materials if you agree to
            this privacy policy.
          </div>
          &nbsp;
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .pageContainer {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: calc(100vh - 132px);
        }
        .contentContainer {
          display: flex;
          width: 80%;
          margin-top: 40px;
          flex-direction: column;
          margin-bottom: 40px;
        }
      `}</style>
    </div>
  );
}

export default PrivacyPolicy;
