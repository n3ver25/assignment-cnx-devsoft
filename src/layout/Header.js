/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

const Header = () => {
  return (
    <div className="container p-0">
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-success p-3">Store</h1>
        </div>
        <div className="col-md-6 d-flex align-items-center  justify-content-end flex-wrap">
          <ul className="text-md-right p-3 mb-0 d-flex align-items-center justify-content-end flex-wrap">
            <li className="list-inline-item title">
              <a className="text-info" href="/">
                หน้าหลัก
              </a>
            </li>
            <li className="list-inline-item title">|</li>
            <li className="list-inline-item title">
              <a className="text-info" href="/products">
                สินค้า
              </a>
            </li>
            <li className="list-inline-item title">|</li>
            <li className="list-inline-item title">
              <a className="text-info" href="/database">
                โครงสร้าง Database
              </a>
            </li>
            <li className="list-inline-item title">|</li>
            <li className="list-inline-item title">
              <a className="text-info" href="/css">
                Css
              </a>
            </li>
            <li className="list-inline-item title">|</li>
            <li className="list-inline-item title">
              <a className="text-info" href="/cnx">
                CNX devsoft
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
