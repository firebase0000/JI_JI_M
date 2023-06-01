import "./Card_analysis.css";
import { useContext } from "react";
import { Pagecontext } from "/src/Context";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import db from "/src/firebase";
import { onSnapshot, collection } from "firebase/firestore";
export default function Card_analysis({ item }) {
  const [analysis, setanalysis] = useState([
    { name: "Loading...", id: "initial" }
  ]);

  useEffect(
    () =>
      onSnapshot(collection(db, "analysis"), (snapshot) =>
        setanalysis(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  console.log(analysis);
  const { mycart, setMycart } = useContext(Pagecontext);
  const addItem = (item) => {
    let found = mycart.some((ele) => ele.id === item.id);
    if (!found) {
      setMycart([...mycart, { ...item }]);
    }
  };
  console.log(mycart);
  return (
    <>
      {analysis.map((cval) => {
        return (
          <div className="Card_analysis">
            <div className="card_item">
              <div className="card_item_flex">
                <h1 className="card_item_title_color">
                  {" "}
                  <Link to={`/products/${cval.id}`}>{cval.titlea}</Link>
                </h1>
                <h1 className="card_item_title">{cval.title2a}</h1>
                <p className="card_item_text">{cval.desca}</p>
                <div className="card_item_prix_flex1">
                  <h1 className="card_item_prix">{cval.prcea}DA</h1>
                  <div className="card_item_prix_flex2">
                    <h1 className="card_item_time">{cval.timea}h</h1>
                  </div>
                </div>
              </div>

              <button
                className="card_item_button"
                onClick={() => addItem(cval)}
              >
                {" "}
                Reserve{" "}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
