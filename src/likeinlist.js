import { useEffect, useState } from "react";

export const LikeList = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([
    "Lorem Ipsum is simply dummy text of the printing",
    "Lorem Ipsum is simply dummy text of the printing",
    "Lorem Ipsum is simply dummy text of the printing",
    "Lorem Ipsum is simply dummy text of the printing",
    "Lorem Ipsum is simply dummy text of the printing"
  ]);

  const clickHnadler = (index) => {
    list.map((item, ind) => (ind === index ? setCount(count + 1) : item));
  };

  return (
    <>
      <h2>Like in list</h2>
      <ul>
        {list.map((item, index) => (
          <div key={index}>
            <li>{item}</li>
            <button onClick={() => clickHnadler(index)}>Like</button>
            {count}
          </div>
        ))}
      </ul>
    </>
  );
};
