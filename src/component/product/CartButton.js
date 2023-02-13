import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";

const CartButton = ({ id,brand }) => {
  const { cartHandler,show} = useGlobalContext();
  return (
    <section className="cartHandler-section">
      <Link to='/cart'>
        <button className="cart-btn " onClick={() => cartHandler(id)}>
        <span> Add to cart</span> 
        </button>
      </Link>
    </section>
  );
};

export default CartButton;


// {show?`/home/${brand}/${id}`:'/cart'}