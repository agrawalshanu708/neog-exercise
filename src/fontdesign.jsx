import { useState } from "react";

export const FontSizeDesign = () => {
  const [size, setSize] = useState(8);

  return (
    <>
      <h2>Font-size design</h2>
      <p style={{ fontSize: `${size}px` }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        cent
      </p>
      <button onClick={() => setSize((size) => size + 8)}>+8px</button>
      <button onClick={() => setSize((size) => size - 8)}>-8px</button>
      <button onClick={() => setSize(10)}>Clear</button>
    </>
  );
};
