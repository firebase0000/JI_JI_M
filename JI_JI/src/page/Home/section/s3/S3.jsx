import Card_analysis from "../../../Card_analysis/Card_analysis";
import { Item } from "../../../Card_analysis/Data";
import { Link } from "react-router-dom";

import "./S3.css";

export default function S3() {
  return (
    <div className="S3">
      <h1 className="s3_title">Title</h1>
      <div className="s3_center">
        <div className="S3_Card_analysis_flex">
          <Card_analysis />
        </div>
      </div>
    </div>
  );
}
