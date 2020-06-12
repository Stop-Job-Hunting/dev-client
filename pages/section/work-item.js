import NavBar from "../../components/navBar";
import WorkHistory from "../../components/workhistory";
import WorkItem from "../../components/sections/workItem";

export default () => {
  return (
    <div>
      <NavBar />

      <div className="hero">
        <WorkItem />
      </div>
      <style jsx>{`
        .hero {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 2em;
          height: 45em;
        }
      `}</style>
    </div>
  );
};
