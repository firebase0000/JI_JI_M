import React from "react";
import "./S2.css";
import fixed1 from "./fixed1.png";
import fixed from "./fixed.png";
import fixed2 from "./fixed2.png";

function Sub_bottom({ onItemClick }) {
  const handleItemClick = (event) => {
    const itemId = event.target.dataset.id;
    onItemClick(itemId);
  };

  return (
    <div className="sub_bottom">
      <div className="card_sub_bottom" data-id="Book" onClick={handleItemClick}>
        <img className="icon_sub_bottom" src={fixed1} alt="" />
        <h1 class="title_sub_bottom">Domicile</h1>
        <div className="line_sub_bottom"></div>
        <h1 className="text_sub_bottom">
          des analyses médicale a domicile , pour votre confort et votre
          tranquillité .
        </h1>
      </div>
      <div
        className="card_sub_bottom"
        data-id="Health"
        onClick={handleItemClick}
      >
        <img className="icon_sub_bottom" src={fixed} alt="" />
        <h1 class="title_sub_bottom">Support</h1>
        <div className="line_sub_bottom"></div>
        <h1 className="text_sub_bottom">
          un support dédié a votre disposition pour vous aider en cas de
          probléme{" "}
        </h1>
      </div>
      <div
        className="card_sub_bottom"
        data-id="Queries"
        onClick={handleItemClick}
      >
        <img className="icon_sub_bottom" src={fixed2} alt="" />
        <h1 class="title_sub_bottom">time</h1>
        <div className="line_sub_bottom"></div>
        <p className="text_sub_bottom">
          du samedi au jeudi: 08.00 -- 18.00 . . . . . . . . . du Vendredi: 8 -
          12
        </p>
      </div>
    </div>
  );
}

export default Sub_bottom;
