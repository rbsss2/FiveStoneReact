import React from "react";
import MainBusinessItem from "./MainBusinessItem";
function MainBusinessList({ data }) {
  return (
    <ul className="business">
      {data.map((item) => (
        <MainBusinessItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default MainBusinessList;
