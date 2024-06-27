import React, { useState } from "react";

const Item = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      type: "Connector",
      maker: "JST",
      number: 500,
      name: "",
    },
  ]);

  return (
    <>
      <div>
        {items.map((list) => {
          return (
            <>
              <li key={list.id}>{list.maker}</li>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Item;
