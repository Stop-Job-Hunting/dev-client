import { useState, useEffect } from 'react';
import SERVERURL from "../constants";

let mappedWork;
function WorkSummary() {
  const [state, setState] = useState([{}])

  useEffect(() => {
    getAllWork()
  })

  function getAllWork() {
    return fetch(`${SERVERURL}/resumes/all-work`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include"
    }).then((res) => {
      res.text().then((text) => {
        setState(JSON.parse(text))
        mappedWork = state.map(item => {
          if (item.company) {
            return (
              <div>
                <div> {item._id}</div>
                <div> {item.company}</div>
                <div> {item.position}</div>
                <div> {item.city}</div>
                <div> {item.state}</div>
                <div> {item.startDate}</div>
                <div> {item.endData}</div>
              </div>
            )
          }

        })
        // console.log(JSON.parse(text))
      })
    });
  }

  return (
    <>
      {mappedWork}
    </>
  )
}
export default WorkSummary