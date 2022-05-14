import React from "react";

const ProductCard = ({ detail }) => {
  const binaryData = [];
  binaryData.push(detail?.file);
  return (
    <>
      <div className="card m-2 col-6" style={{ width: " 12rem" }}>
        {/* <img
          src={URL.createObjectURL(
            new Blob(binaryData, { type: "application/zip" })
          )}
          alt="file state"
          class="img-thumbnail"
          style={{ width: "200px" }}
        /> */}
        <div className="card-body">
          <p className="card-text">{detail?.name}</p>
          <p className="card-text">Detail : {detail?.detail}</p>
          <p className="card-text">Price : {detail?.price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
