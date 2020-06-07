import { useState, useEffect } from 'react';
import SERVERURL from "../constants";

// let mappedWork;

function WorkSummary() {
  const [state, setState] = useState([])

  useEffect(() => {

    if (state.length < 1) {
      getAllWork()
    }

  })

  function getAllWork() {
    return fetch(`${SERVERURL}/works/all-work`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include"
    }).then((res) => {
      res.text().then((text) => {
        setState(JSON.parse(text))
      })
    });
  }

  let mappedWork = state.map(item => {
    if (item.company) {
      return (
        <div key={item._id}>
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

  return (
    <>
      {mappedWork}
      <button onClick={() => console.log(mappedWork)}>log state</button>
    </>
  )
}
export default WorkSummary