const SERVERURL =
  process.env.NODE_ENV === "production"
    ? "https://sjh-server.herokuapp.com"
    : "http://localhost:3001";

export default SERVERURL;
