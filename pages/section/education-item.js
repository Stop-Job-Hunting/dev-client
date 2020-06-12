import EducationItem from "../../components/sections/educationItem";

import NavBar from "../../components/navBar";

export default () => {
  return (
    <div>
      <NavBar />

      <div className="hero">
        <EducationItem />
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
