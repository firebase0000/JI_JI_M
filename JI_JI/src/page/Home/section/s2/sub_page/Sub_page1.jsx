import "./Sub_page.css";
import { Link } from "react-router-dom";

export default function Sub_page1({ onItemClick }) {
  return (
    <div className="Sub_page">
      <div className="line_red_effect"></div>
      <h1 className="title_red_effect">A Domicile</h1>
      <p className="text_red_effect">
        des analyses médicale a domicile , pour votre confort et votre
        tranquillité . Cliquez ici <Link to={"/Server"}>Server</Link>
      </p>
    </div>
  );
}
