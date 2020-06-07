function WorkItem(props) {
  return (
    <>
      <div className="workContainer">
        <div className="indexContainer">1</div>
        <div className="contentContainer">
          <strong>
            {props.item.position}, {props.item.company}
          </strong>
          &nbsp; |&nbsp; {props.item.city}, {props.item.state} &nbsp;|&nbsp;{" "}
          {props.item.startDate} - {props.item.endDate}
        </div>
        <div className="iconContainer">X Edit !</div>
      </div>
      <style jsx>{`
        .workContainer {
          margin-bottom: 10px;
          display: flex;
          width: 75%;
          min-height: 100px;
          flex-direction: row;
          border: 1px solid #e8ecf0;
        }
        .indexContainer {
          background-color: #ffa600;
          width: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
        }
        .iconContainer {
          min-width: 100px;
          padding: 20px 10px 20px 10px;
          display: flex;
          justify-content: center;
        }
        .contentContainer {
          padding: 20px 10px 20px 10px;
          width: 100%;
          display: flex;
          font-size: 16px;
        }
      `}</style>
    </>
  );
}

export default WorkItem;
