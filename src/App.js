import "./styles.css";
import { Twitter } from "./charactercounter";
import { Passwords } from "./passwords";
import { AlphaNumeric } from "./alphanumeric";
import { FontSizeDesign } from "./fontdesign";
import { LikeList } from "./likeinlist";
export default function App() {
  return (
    <div className="App">
      <Twitter />
      <hr />
      <Passwords />
      <hr />
      <AlphaNumeric />
      <hr />
      <FontSizeDesign />
      <hr />
      <LikeList />
    </div>
  );
}
