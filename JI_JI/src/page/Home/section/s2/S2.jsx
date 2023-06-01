import "./S2.css";
import Sub_page1 from "./sub_page/Sub_page1";
import Sub_page2 from "./sub_page/Sub_page2";
import Sub_page3 from "./sub_page/Sub_page3";
import Sub_bottom from "./Sub_bottom";

import React, { useState } from "react";

export default function S2() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
    console.log(`Clicked item with ID ${itemId}`);
  };
  let content;
  switch (selectedItem) {
    case "Book":
      content = <Sub_page1 />;
      break;
    case "Health":
      content = <Sub_page2 />;
      break;
    case "Queries":
      content = <Sub_page3 />;
      break;
    default:
      content = <Sub_page1 />;
  }
  return (
    <div className="S2">
      <div>{content}</div>
      <div>
        <Sub_bottom onItemClick={handleItemClick} />
      </div>
    </div>
  );
}
