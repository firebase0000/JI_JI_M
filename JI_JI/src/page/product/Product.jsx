import "./product.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Pagecontext } from "/src/Context";
import db from "/src/firebase";
import { onSnapshot, collection } from "firebase/firestore";
import Frame1 from "/src/page/Home/photo/Frame1.png";

export default function Product({ cval }) {
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
  const { productId } = useParams();
  const Product = analysis.find((pro) => pro.id === productId);

  console.log(Product);
  const { mycart, setMycart } = useContext(Pagecontext);
  const addItem = (item) => {
    let found = mycart.some((ele) => ele.title === item.title);

    if (!found) {
      setMycart([...mycart, { ...item }]);
    }
  };
  return (
    <div className="product">
      {Product && (
        <div className="product_flex">
          <div class="product_img_div">
            <img class="product_img" src={Frame1} alt="" />
          </div>
          <div class="product_info_cont">
            <h1 class="product_title"> {Product.titlea}</h1>
            <div className="product_flex_flex">
              <h1 class="product_prix">{Product.prcea} </h1>
              <h1 class="product_min">{Product.timea}h </h1>
            </div>
            <h1 class="product_desc">{Product.desca}</h1>
            <button class="product_button" onClick={() => addItem(Product)}>
              add to card
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
