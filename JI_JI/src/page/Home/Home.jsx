import "./Home.css";

import S1 from "./section/s1/S1";
import S2 from "./section/s2/S2";
import S3 from "./section/s3/S3";
import S4 from "./section/s4/S4";
import S5 from "./section/s5/S5";

export default function Home() {
  return (
    <div className="Home">
      <S1 />
      <S2 />
      <S3 />
      <S4 />
      <S5 />
    </div>
  );
}
