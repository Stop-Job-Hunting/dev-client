import SlateEditor from "./slateEditor";

function highlightsEditor() {
  return (
    <div>
      <div className="slateContainer">
        <SlateEditor />
      </div>
      <style jsx>{`
        .slateContainer {
          width: 800px;
        }
      `}</style>
    </div>
  );
}

export default highlightsEditor;
