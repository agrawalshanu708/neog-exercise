import { useState } from "react";

export const Passwords = () => {
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState("ENTER DETAILS");
  return (
    <>
      <input onChange={(e) => setPass(e.target.value)} /> <br />
      <input onChange={(e) => setConfirm(e.target.value)} />
      <button
        onClick={() => {
          pass === confirm
            ? setMsg("Yahh, its match")
            : setMsg("Noo, check again");
        }}
      >
        check
      </button>
      <p>{msg}</p>
    </>
  );
};
