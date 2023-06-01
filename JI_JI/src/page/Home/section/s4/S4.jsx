import colmd6 from "./img_s4/colmd6.png";
import img_s4_f2 from "./img_s4/img_s4_f2.png";
import icon from "./img_s4/icon.png";
import icon1 from "./img_s4/icon1.png";
import icon2 from "./img_s4/icon2.png";
import icon3 from "./img_s4/icon3.png";

import "./S4.css";

export default function S4() {
  return (
    <div className="s4">
      <div className="Our_Information">
        <div className="Our_Information_fram">
          <div className="Our_Information_line"></div>
          <h1 className="Our_Information_title">Our Information</h1>
          <div className="Our_Information_inf_flex">
            <img className="Our_Information_inf_icon" src={icon2} alt="" />{" "}
            <h1 className="Our_Information_inf_text">email@gmail.com</h1>
          </div>
          <div className="Our_Information_inf_flex">
            <img className="Our_Information_inf_icon" src={icon} alt="" />{" "}
            <h1 className="Our_Information_inf_text">06 76 60 20 35</h1>
          </div>
          <div className="Our_Information_inf_flex">
            <img className="Our_Information_inf_icon" src={icon3} alt="" />{" "}
            <h1 className="Our_Information_inf_text">@instagram</h1>
          </div>
          <div className="Our_Information_inf_flex">
            <img className="Our_Information_inf_icon" src={icon1} alt="" />{" "}
            <h1 className="Our_Information_inf_text">facebook</h1>
          </div>
          <div>
            <img class="Our_Information_img2" src={img_s4_f2} alt="" />
          </div>
        </div>
        <div className="Our_Information_fram">
          <img class="Our_Information_img1" src={colmd6} alt="" />
        </div>
      </div>
    </div>
  );
}
