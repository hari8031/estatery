import React, { useState } from "react";
import { Card, Filter } from "../../components";
const Header = () => {
  const [items, setItems] = useState([]);

  const handleItem = (items) => {
    setItems(items);
  };
  return (
    <section className="px-[164px] py-[64px]">
      <div className=" px-[64px]">
        <h1 className="text-5xl font-bold ">Search properties to rent</h1>
      </div>
      <div className=" px-[64px]">
        <Filter handleItem={handleItem} />
      </div>
      <ul className=" px-[64px] flex flex-wrap justify-center mt-[64px] gap-[32px]">
        {items.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </ul>
    </section>
  );
};

export default Header;
