import React from "react";
import Category from "./Category";
import { category, brand } from "./data";
import "./filter.css";
import { useGlobalContext } from "../Context";
import { AiOutlineMenuFold } from "react-icons/ai";
import {ImCross} from 'react-icons/im'

function Filter() {
  const { clickHandlerBrand, clickHandler, price, priceHandler } =
    useGlobalContext();
  const [show, setShow] = React.useState(false);

  return (
    <>
      <AiOutlineMenuFold
        className="menu-icon"
        onClick={() => {
          setShow(!show);
        }}
      />
      <div className={`${show ? "other other-show" : "other"}`}>
        <div className="filter-wrapper">
          <section className="product-heading">
            <h3>FILTER</h3>
            <ImCross
        className="cross-icon"
        onClick={() => {
          setShow(!show);
        }}
      />
          </section>
          <Category type={category} typeName="CATEGORY" action={clickHandler} />
          <Category type={brand} action={clickHandlerBrand} typeName="BRAND" />
          <section>
            <h4>PRICE</h4>
            <div className="container">
              <div className="slider">
                <input type="range" min="0" max="100" onChange={priceHandler} />
                <output id="rangevalue">$ {price}</output>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Filter;
