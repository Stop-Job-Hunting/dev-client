function Footer() {
  return (
    <div className="footerContainer">
      <div>Contact | Privacy Policy | Terms Of Service</div>

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
      `}</style>
    </div>
  );
}

export default Footer;
