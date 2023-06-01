import "./support.css";
import { useContext } from "react";
import { Pagecontext } from "/src/Context";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ASupport() {
  const { mycart, setMycart } = useContext(Pagecontext);
  console.log(mycart);
  const [title4, settitle4] = useState("");
  const [title2, settitle2] = useState("");
  const [title1, settitle1] = useState("");
  const [title3, settitle3] = useState("");

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
        user_title: "Support",
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

  return (
    <div className="Reserve">
      <div className="Reserve_flex">
        <div className="support_frame">
          <h1 className="Support_title">Support</h1>
          <h1 className="Support_text">
            {" "}
            Certainly! As a medical analysis center, we are here to provide you
            with comprehensive support for all your healthcare needs. Our
            knowledgeable staff is available to answer any questions or concerns
            you may have about your test results or medical conditions. We
            understand that medical information can sometimes be overwhelming,
            so we are committed to offering clear explanations and guidance.
            Whether you require further clarification, assistance with treatment
            options, or recommendations for specialized care, we are here to
            support you every step of the way. Your health and well-being are
            our utmost priority, and we are dedicated to providing you with the
            support you need for a healthier life.
          </h1>
        </div>

        <div className="Reserve_frame2">
          <h1 className="Reserve_input_title">Get your Support </h1>
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

              <textarea
                className="Support_desc"
                placeholder="Your desc"
                name="desc"
                rows="10"
                onChange={handleChangetitle3}
                required
              ></textarea>

              <input className="Reserve_button" type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
