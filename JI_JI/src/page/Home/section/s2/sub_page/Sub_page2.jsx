import "./Sub_page.css";
import { Link } from "react-router-dom";

export default function Sub_page2() {
  return (
    <div className="Sub_page">
      <div className="line_red_effect"></div>
      <h1 className="title_red_effect">Support</h1>
      <p className="text_red_effect">
        un support dédié a votre disposition pour vous aider en cas de probléme
        et facilliter votre contact avec notre laboratoire Cliquez ici{" "}
        <Link to={"/Support"}>Support</Link>
      </p>
    </div>
  );
}
