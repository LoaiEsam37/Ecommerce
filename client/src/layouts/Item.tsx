import React from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Item = () => {
  const { data } = useQuery(["item"], () => {
    return Axios.get("http://localhost:1337/api/items").then((res) => res.data);
  });
  console.log(data["data"]);
  return (
    <div className="h1">
      Items:
      {data.data.map((item, index) => {
        return <div>{item.attributes.name}</div>;
      })}
    </div>
  );
};

export default Item;
