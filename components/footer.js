import { useRouter } from "next/router";
import Head from "next/head";

function Footer() {
  const router = useRouter();

  return (
    <div className="footerContainer">
      <Head>
        <div
          dangerouslySetInnerHTML={{
            __html: `
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-167272769-3"></script>
                <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', 'UA-167272769-3');
                </script>
                `,
          }}
        ></div>
      </Head>

      {/* <ScriptTag type="text/javascript" src="./ga.js" /> */}
      <div className="linkItemContainer">
        Copyright © 2020 StopJobHunting.com &nbsp;| &nbsp;
        <div
          className="linkItem"
          onClick={() => {
            router.push("/privacy-policy");
          }}
        >
          Privacy Policy
        </div>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="https://stopjobhunting.com/contact">
          <div
            className="linkItem"
            // onClick={() => {
            //   router.push("/contact");
            // }}
          >
            Contact
          </div>
        </a>
      </div>

      <style jsx>{`
        .footerContainer {
          width: 100%;
          background-color: #444;
          color: white;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 60px;
        }
        .linkItemContainer {
          display: flex;
        }
        .linkItem {
          cursor: pointer;
        }
        .linkItem:hover {
          text-decoration: underline;
        }
        a {
          color: white;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default Footer;
