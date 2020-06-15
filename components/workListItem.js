import { Edit, Trash, Move } from "react-feather";
import SERVERURL from "../constants";
import { useRouter } from "next/router";

function WorkListItem(props) {
  const router = useRouter();

  function deleteItem() {
    fetch(`${SERVERURL}/works/delete/${props.item._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  }

  return (
    <>
      <div className="workContainer" key={`${props.item._id}`}>
        <div className="indexContainer">1</div>
        <div className="contentContainer">
          <strong>
            {props.item.position}, {props.item.company}
          </strong>
          &nbsp; |&nbsp; {props.item.city}, {props.item.state} &nbsp;|&nbsp;{" "}
          {props.item.startDate} - {props.item.endDate}
        </div>
        <div className="iconContainer">
          <div className="singleIconContainer">
            <Edit color="#444" size={18} />
          </div>
          <div
            className="singleIconContainer"
            onClick={() => {
              deleteItem();
              window.location.reload(false);
            }}
          >
            <Trash color="#444" size={18} />
          </div>
        </div>
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
        .workContainer:hover {
          border: 1px solid #ffa600;
        }
        .indexContainer {
          background-color: #ffa600;
          width: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
          cursor: default;
        }
        .iconContainer {
          min-width: 50px;
          padding: 20px 20px 20px 20px;
          display: flex;
          justify-content: space-between;
        }
        .contentContainer {
          padding: 20px 20px 20px 20px;
          width: 100%;
          display: flex;
          font-size: 16px;
          cursor: default;
        }
        .singleIconContainer {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default WorkListItem;
