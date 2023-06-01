import "./Analysis.css";
import Component1 from "./Component1.png";
import Card_analysis from "./../Card_analysis/Card_analysis";

export default function Analysis() {
  return (
    <div className="Analysis">
      <h1 className="Analysis_title">Analysis</h1>
      <div className="Analysis_background">
        <img className="Analysis_background" src={Component1} alt="" />
        <input className="Analysis_search" type="text" />
      </div>
      <div className="Analysis_card">
        <Card_analysis />)
      </div>
    </div>
  );
}
