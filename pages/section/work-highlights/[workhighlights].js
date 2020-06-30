import ProgressBar from "../../../components/progressBar";
import WorkHighlights from "../../../components/sections/workHighlights";
import Footer from "../../../components/footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SERVERURL from "../../../components/constants";

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
      <div className="hero">
        <WorkHighlights workId={state._id} />
      </div>
      <Footer />
      <style jsx>{`
        .hero {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 2em;
          min-height: calc(100vh - 132px);
        }
      `}</style>
    </div>
  );
};
