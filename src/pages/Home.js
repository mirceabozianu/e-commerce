import React, { useState, useEffect } from "react";
import CardList from "../components/Card/CardList";

const Home = () => {
  const [data, setData] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => setData(json));
    }, []);

  
  return <CardList items={data} />;
};

export default Home;
