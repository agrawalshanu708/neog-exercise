import { useEffect, useState } from "react";

export const Twitter = () => {
  const [change, setChange] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  const space = change.split(" ").length - 1;

  useEffect(() => {
    change.length === 50 ? setIsDisable(true) : setIsDisable(false);
  });

  return (
    <>
      <h2>Maximun letter : 50</h2>
      <h3>Left : {50 - change.length}</h3>
      <textarea
        disabled={isDisable}
        onChange={(e) => setChange(e.target.value)}
      />

      <p>Total letter with space: {change.length}</p>
      <p>total letter without space :{change.length - space}</p>
      <p>Total words : {space}</p>
    </>
  );
};
