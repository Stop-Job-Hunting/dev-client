function SlateButton() {
  return (
    <div>
      <div className="buttonContainer">Next</div>
      <style jsx>{`
        .buttonContainer {
          position: absolute;
          background-color: #ffa600;
          margin-top: 290px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2.2em;
          width: 5em;
          padding-left: 0.5em;
          padding-right: 0.5em;
          border: 4px solid #ffa600;
          background-color: #ffa600;
          color: white;
          font-weight: bold;
          cursor: pointer;
          margin-bottom: 45px;
        }
      `}</style>
    </div>
  );
}

export default SlateButton;
