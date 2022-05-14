import React, { useEffect, useState } from "react";
import { productDelete, productsFetch } from "../actions";

const Product = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    productsFetch().then((res) => setProducts(res.data));
  }, []);

  const deleteProduct = (id) => {
    productDelete(id)
      .then((res) => {
        alert("Delete success");
        productsFetch().then((res) => setProducts(res.data));
      })
      .caches((error) => alert("error"));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>สินค้า</h1>
        </div>
        <div className="col-6  d-flex align-items-center justify-content-end ">
          <a
            type="button"
            className="btn btn-primary text-white"
            href="/product"
          >
            เพิ่มสินค้า
          </a>
        </div>
      </div>
      <div className="col-12 col-md-10 m-auto">
        <table class="table ">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">Detail</th>
              <th scope="col">Price</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            {products == null
              ? null
              : products.map((value) => (
                  <tr>
                    <th scope="row">{value?.id}</th>
                    <td>{value?.name}</td>
                    <td>{value?.detail}</td>
                    <td>{value?.price}</td>
                    <td>
                      <a
                        type="button"
                        className="btn btn-primary text-white mr-3"
                        href={`/product/:${value.id}`}
                      >
                        แก้ไข
                      </a>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteProduct(value.id)}
                      >
                        นำออก
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
