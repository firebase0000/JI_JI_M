import "./header.css";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <header className="nav_bar_main">
      <div className="nav_div">
        <p className="logo">HealthCheck</p>
      </div>
      <div className="nav_div">
        <p className="nav_a_page">
          <Link to={"/"}>home</Link>{" "}
        </p>
        <p className="nav_a_page">
          {" "}
          <Link to={"/Analysis"}>Analysis</Link>{" "}
        </p>
        <p className="nav_a_page">
          <Link to={"/Reserve"}>Reserve</Link>{" "}
        </p>

        <p className="nav_a_page">
          <Link to={"/Observer"}>Observer</Link>{" "}
        </p>
      </div>
    </header>
  );
}
