import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { productsFetchOne, productUpdate } from "../actions";
import { Formik, Form, Field } from "formik";

const ProductEditForm = () => {
  const [products, setProducts] = useState(null);

  const { params } = useRouteMatch("/product/:id");
  const id = params.id;
  const onlyId = id.substring(1);
  useEffect(() => {
    productsFetchOne(onlyId).then((res) => {
      setProducts(res.data);
    });
  });
  return (
    <div className="container">
      <Formik
        initialValues={products}
        enableReinitialize
        onSubmit={(values) => {
          productUpdate(values).then((res) => {
            alert("Product has been add");
            window.location.href = '/';
          })
          .catch((error) => alert(error));
        }}
      >
        {() => (
          <Form>
            <div className="container">
              <div class="form-group">
                <label htmlFor="name">Name Product</label>
                <Field class="form-control" id="name" name="name" />
              </div>
              <div class="form-group">
                <label htmlFor="detail">Detail Product</label>
                <Field class="form-control" id="detail" name="detail" />
              </div>
              <div class="form-group">
                <label htmlFor="email">Price</label>
                <Field
                  class="form-control"
                  id="price"
                  name="price"
                  type="number"
                />
              </div>
              {products?.file && (
                <div class="form-group pt-3">
                  {/* <img
                    src={URL.createObjectURL(products.file)}
                    alt="file state"
                    class="img-thumbnail"
                    style={{ width: "200px" }}
                  /> */}
                </div>
              )}
              {/* <input
                class="pt-3"
                id="file"
                name="file"
                type="file"
                onChange={(event) => {
                  setProducts({
                    name: values.name,
                    price: values.price,
                    detail: values.detail,
                    id:values.id,
                    file: event.currentTarget.files[0],
                  });
                }}
              /> */}
              <div class="form-group pt-3">
                <button type="submit" class="btn btn-primary mt-3">
                  Submit
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductEditForm;
