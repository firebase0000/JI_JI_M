import "./admin.css";
import { onSnapshot, collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "/src/firebase";
import Addimg from "../addimg/Addimg";
export default function Admin() {
  const [clients, setclients] = useState([
    { name: "Loading...", id: "initial" }
  ]);

  useEffect(
    () =>
      onSnapshot(collection(db, "clients"), (snapshot) =>
        setclients(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  const [message, setMessage] = useState("");
  const [message1, setMessage1] = useState("");
  const [title, settitle] = useState("");
  const [title2, settitle2] = useState("");
  const [prce, setprce] = useState("");
  const [time, settime] = useState("");
  const [desc, setdesc] = useState("");

  const handleNew2 = async () => {
    const titlea = title;
    const title2a = title2;
    const prcea = prce;
    const timea = time;
    const desca = desc;

    const collectionRef = collection(db, "analysis");
    const payload = { titlea, title2a, prcea, timea, desca };
    const docRef = await addDoc(collectionRef, payload);
    console.log("The new ID is: " + docRef.id);
  };
  const handleChangetitle = (event) => {
    settitle(event.target.value);
  };
  const handleChangetitle2 = (event) => {
    settitle2(event.target.value);
  };
  const handleChangeprce = (event) => {
    setprce(event.target.value);
  };
  const handleChangetime = (event) => {
    settime(event.target.value);
  };
  const handleChangedesc = (event) => {
    setdesc(event.target.value);
  };

  const handleNew = async () => {
    const name = message;
    const email = message1;
    const id = "__";
    const url = "__";

    const collectionRef = collection(db, "clients");
    const payload = { name, email, id, url };
    const docRef = await addDoc(collectionRef, payload);
    console.log("The new ID is: " + docRef.id);
  };
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleChange1 = (event) => {
    setMessage1(event.target.value);
  };

  return (
    <div className="Admin_ultra">
      <div className="Admin">
        <div className="admin_fram1">
          <h1>add analysis</h1>
          <div className="admin_fram1_flex">
            <input
              className="admin_fram1_input"
              placeholder="title "
              type="text"
              value={title}
              onChange={handleChangetitle}
            />
            <input
              className="admin_fram1_input"
              placeholder="title2 "
              type="text"
              value={title2}
              onChange={handleChangetitle2}
            />
            <input
              className="admin_fram1_input"
              placeholder="prce "
              type="text"
              value={prce}
              onChange={handleChangeprce}
            />
            <input
              className="admin_fram1_input"
              placeholder="time "
              type="text"
              value={time}
              onChange={handleChangetime}
            />

            <textarea
              className="admin_fram1_input2"
              placeholder="Your desc"
              class="form-control"
              name="desc"
              rows="10"
              value={desc}
              onChange={handleChangedesc}
              required
            ></textarea>
            <button className="admin_fram1_button" onClick={handleNew2}>
              add analysis
            </button>
          </div>
        </div>
        <div>
          <div className="admin_fram2">
            <h1>add re</h1>
            <div className="admin_fram1_flex2">
              <input
                placeholder="name"
                className="admin_fram1_input"
                type="text"
                name="name"
                value={message}
                onChange={handleChange}
              />
              <input
                placeholder="email "
                className="admin_fram1_input"
                type="text"
                name="email"
                value={message1}
                onChange={handleChange1}
              />
              <button
                className="add_resolet_clint_button_test"
                onClick={handleNew}
              >
                test
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="add_resolet_clint_section">
        <div className="add_resolet_clint_bar">
          <h1 className="add_resolet_clint_text">name</h1>
          <h1 className="add_resolet_clint_text"> id</h1>
          <h1 className="add_resolet_clint_text"> add image</h1>
          <h1 className="add_resolet_clint_text"> button</h1>
        </div>{" "}
        <Addimg />
      </div>
    </div>
  );
}
