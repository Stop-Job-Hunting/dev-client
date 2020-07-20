import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();

  return (
    <div className="footerContainer">
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
        <div
          className="linkItem"
          onClick={() => {
            router.push("/contact");
          }}
        >
          Contact
        </div>
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
      `}</style>
    </div>
  );
}

export default Footer;
