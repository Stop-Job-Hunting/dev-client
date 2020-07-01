const SERVERURL =
  process.env.NODE_ENV === "production"
    ? "https://api.stopjobhunting.com"
    : "http://localhost:3001";

export default SERVERURL;
