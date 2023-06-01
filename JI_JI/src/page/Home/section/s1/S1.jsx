import Frame1 from "../../photo/Frame1.png";
import "./S1.css";
import { Link } from "react-router-dom";

export default function S1() {
  return (
    <div className="Home_s1">
      <div>
        <div className="f1_Frame">
          <h1 className="welcome">welcome</h1>
          <h1 className="Your">
            Your Comprehensive Medical Analysis Platform"
          </h1>
          <h1 className="Get">Get the best medical services</h1>
        </div>
        <div className="f1_button_p">
          <button className="f1_button1">
            {" "}
            <Link to={"/Analysis"}>Analysis</Link>{" "}
          </button>
          <button className="f1_button2">
            {" "}
            <Link to={"/Observer"}>Observer</Link>{" "}
          </button>
        </div>
      </div>
      <div className="img1_p">
        <img className="img1" src={Frame1} alt="" />
      </div>
    </div>
  );
}
