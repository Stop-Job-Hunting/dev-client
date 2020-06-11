import SlateEditor from "./slateEditor";

function highlightsEditor() {
  return (
    <div className="componentContainer">
      <div className="recommendationContainer">recommendations go here</div>
      <div className="slateContainer">
        <SlateEditor />
      </div>

      <style jsx>{`
        .componentContainer {
          display: flex;
          border: 1px solid #eee;
          padding: 20px 20px 20px 0;
          box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.16);
        }
        .slateContainer {
          width: 340px;
        }
        .recommendationContainer {
          background-color: #f6f8fa;
          margin-right: 20px;
          width: 340px;
          margin-top: -20px;
          margin-bottom: -20px;
          min-height: 440px;
          padding: 20px;
          z-index: -1;
        }
      `}</style>
    </div>
  );
}

export default highlightsEditor;
