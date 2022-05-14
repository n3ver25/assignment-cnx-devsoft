import React, { useEffect, useState } from "react";
import { productsFetch } from "../actions";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    productsFetch().then((res) => {
      console.log("res", res.data);
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="container">
      <div>HOME PAGE</div>
      <div className="d-flex flex-wrap">
        {products == null ? null : products.map((value) => <ProductCard detail={value} />)}
      </div>
    </div>
  );
};

export default HomePage;
