import React, { useState } from "react";
import CardList from "../components/CardList";

const Home = () => {
  const [data, setData] = useState([]);
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => setData([...json]));

  
  return <CardList items={data} />;
};

export default Home;
