import "./Observer.css";
import Component1 from "./Component1.png";
import {
  onSnapshot,
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "/src/firebase";

export default function Observer() {
  const [clients, setclients] = useState([
    { name: "Loading...", id: "initial" }
  ]);
  const [search, setsearch] = useState([{ name: "Loading...", id: "initial" }]);
  useEffect(
    () =>
      onSnapshot(collection(db, "clients"), (snapshot) =>
        setclients(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  const handleQuerysearch = async () => {
    const userInputsearch = prompt("Enter color name");

    const collectionRef = collection(db, "clients");
    const q = query(collectionRef, where("id", "==", userInputsearch));
    const snapshot = await getDocs(q);

    setsearch(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(clients);
  };

  console.log(clients);
  console.log(search);

  return (
    <div className="Observer_hight">
      <div className="Observer_spacer"></div>
      <div className="Observer">
        <div class="Observer_space">
          <img class="Observer_img" src={Component1} alt="" />
          <div class="buttonIn">
            <input class="Observerinput" type="text" id="enter" />
            <button
              class="Observerbutton"
              id="clear"
              onClick={handleQuerysearch}
            >
              send
            </button>
          </div>
          {search?.map((client) => (
            <div>
              <div className="a_text">
                <img src={client.url} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
