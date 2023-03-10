import React from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Item: React.FC = () => {
  const {
    data: Items,
    isLoading,
    isError,
    refetch,
  } = useQuery(["item"], () => {
    return Axios.get("http://localhost:1337/api/items").then((res) => res.data);
  });

  if (isLoading) return <h1>loading...</h1>;

  return (
    <div className="">
      <button onClick={refetch}>refresh</button>
      {!isError ? <div>Items:-</div> : <div>Something went wrong</div>}
      {Items?.data.map((item: object) => {
        return <div>{item.attributes.name}</div>;
      })}
    </div>
  );
};

export default Item;
