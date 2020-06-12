import NavBar from "../../components/navBar";

export default () => {
  return (
    <div>
      <NavBar />

      <div className="hero">Ready to download your resume?</div>

      <style jsx>{`
        .hero {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #f2f2f2;
          height: 300px;
        }
      `}</style>
    </div>
  );
};
