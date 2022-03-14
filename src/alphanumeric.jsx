import { useState } from "react";

export const AlphaNumeric = () => {
  const [number, setNumber] = useState("");
  const [msg, setMsg] = useState("enter detail");
  return (
    <>
      <h2>Aplhanumeric</h2>
      <input onChange={(e) => setNumber(e.target.value)} />
      <button
        onClick={() => {
          const num = number.match(/\d/g);
          return num ? setMsg("it works") : setMsg("Have atleast one number");
        }}
      >
        Check
      </button>
      <p>{msg}</p>
    </>
  );
};
