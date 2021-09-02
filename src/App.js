import { useState } from "react";
import "./styles.css";

function Check() {
  const [value, setValue] = useState(false);
  function isOn() {
    setValue(!value);
    console.log(value);
  }
  return (
    <div>
      <h1>chandra</h1>
      <button onClick={isOn}>BUTTON</button>
      {value ? <h1>ON</h1> : <h1>off</h1>}
    </div>
  );
}
export default function App() {
  return (
    <>
      <Check />
    </>
  );
}
