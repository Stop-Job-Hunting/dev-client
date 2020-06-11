import ProgressBar from "../../components/progressBar";

export default () => {
  return (
    <div>
      <ProgressBar />

      <div className="hero">Education Section</div>
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
