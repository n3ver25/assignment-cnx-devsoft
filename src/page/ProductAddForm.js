import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { productCreate } from "../actions";

const ProductAddForm = () => {
  const [initiaState] = useState({
    name: "",
    price: "",
    detail: "",
    file: "",
  });
  return (
    <Formik
      initialValues={initiaState}
      enableReinitialize
      onSubmit={(values) => {
        productCreate(values)
          .then((res) => {
            alert("Product has been add");
            window.location.href = "/";
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
            {/* {initiaState.file && (
              <div class="form-group pt-3">
                <img
                  src={URL.createObjectURL(initiaState.file)}
                  alt="file state"
                  class="img-thumbnail"
                  style={{ width: "200px" }}
                />
              </div>
            )}
            <input
              class="pt-3"
              id="file"
              name="file"
              type="file"
              onChange={(event) => {
                setInitiaState({
                  name: values.name,
                  price: values.price,
                  detail: values.detail,
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
  );
};

export default ProductAddForm;
