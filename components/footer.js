function Footer() {
  return (
    <div className="footerContainer">
      <div className="linkItemContainer">
        <div className="linkItem">Contact</div> &nbsp;&nbsp;|&nbsp;&nbsp;
        <div className="linkItem">Privacy Policy</div> &nbsp;&nbsp;|&nbsp;&nbsp;
        <div className="linkItem">Service Agreement</div>
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
