import ProgressBar from "../../../components/progressBar";
import WorkHighlights from "../../../components/sections/workHighlights";
import Footer from "../../../components/footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SERVERURL from "../../../constants";

export default () => {
  const router = useRouter();
  const { workhighlights } = router.query;

  const [state, setState] = useState("load");

  useEffect(() => {
    console.log("load work highlights");
    console.log(workhighlights);
    if (state === "load") {
      getAllWork();
    }
  });

  function getAllWork() {
    return fetch(`${SERVERURL}/works/all-work`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
      res.text().then((text) => {
        const allWorkItems = JSON.parse(text);

        if (workhighlights !== "new") {
          for (let i = 0; i < allWorkItems.length; i++) {
            if (allWorkItems[i]._id === `${workhighlights}`) {
              setState(allWorkItems[i]);
            }
          }
        } else {
          setState(allWorkItems[allWorkItems.length - 1]);
        }
      });
    });
  }

  return (
    <div>
      <ProgressBar progress={4} />
      ID of current work item: {state._id || ""}
      <div className="hero">
        <WorkHighlights />
      </div>
      <Footer />
      <style jsx>{`
        .hero {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 2em;
          min-height: 36em;
        }
      `}</style>
    </div>
  );
};
