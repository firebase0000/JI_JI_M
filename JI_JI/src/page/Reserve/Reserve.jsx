import "./Reserve.css";
import { useContext } from "react";
import { Pagecontext } from "/src/Context";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Reserve() {
  const { mycart, setMycart } = useContext(Pagecontext);
  console.log(mycart);
  const [title4, settitle4] = useState("");
  const [title2, settitle2] = useState("");
  const [title1, settitle1] = useState("");
  const [title3, settitle3] = useState("");
  const [title5, settitle5] = useState("");

  const removeFromcart = (item) => {
    setMycart(mycart.filter((product) => product !== item));
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const product = mycart.map((cval) => cval.title);
    emailjs.send(
      "service_e5scbi6",
      "template_tzji0bb",
      {
        user_title: "Reserve",
        user_name: title1,
        user_famlyname: title2,
        user_email: title3,
        user_number: title4,
        user_product: product
      },
      "WWe2TYbTwImrgHTmP"
    );
  };
  const handleChangetitle1 = (event) => {
    settitle1(event.target.value);
  };
  const handleChangetitle2 = (event) => {
    settitle2(event.target.value);
  };
  const handleChangetitle3 = (event) => {
    settitle3(event.target.value);
  };
  const handleChangetitle4 = (event) => {
    settitle4(event.target.value);
  };
  const handleChangetitle5 = (event) => {
    settitle5(event.target.value);
  };

  return (
    <div className="Reserve">
      <div className="Reserve_flex">
        <div className="Reserve_frame">
          <h1 className="Reserve_title">Painless procedures</h1>
          <div className="Reserve_line"></div>
          <div className="Reserve_scroll">
            {mycart.map((cval) => {
              return (
                <div className="Reserve_card">
                  <h1 className="Reserve_card_text">{cval.titlea}</h1>
                  <h1 className="Reserve_card_text">{cval.prcea}</h1>

                  <h1
                    className="Reserve_icon"
                    onClick={() => removeFromcart(cval)}
                  >
                    x
                  </h1>
                </div>
              );
            })}
          </div>

          <div className="Reserve_line"></div>
          <h1 className="Reserve_title"> Total : 1276367</h1>
        </div>

        <div className="Reserve_frame2">
          <h1 className="Reserve_input_title">Get your Reserve </h1>
          <div class="container">
            <form className="container" ref={form} onSubmit={sendEmail}>
              <input
                placeholder="Your name.."
                className="Reserve_input"
                type="text"
                name="user_name"
                onChange={handleChangetitle1}
              />

              <input
                placeholder="Your name.."
                className="Reserve_input"
                type="text"
                name="user_famlyname"
                onChange={handleChangetitle2}
              />
              <input
                placeholder="Your name.."
                className="Reserve_input"
                type="text"
                name="user_email"
                onChange={handleChangetitle3}
              />
              <input
                placeholder="Your name.."
                className="Reserve_input"
                type="text"
                name="user_number"
                onChange={handleChangetitle4}
              />

              <input className="Reserve_button" type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
