import React from "react";
import "./cart.css";
import { useGlobalContext } from "../../component/Context";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { FaMinus, FaPlus } from "react-icons/fa";

const Cart = React.memo(() => {
  const { cartList, remove, increase, decrease, totalPrice, clearCart } =
    useGlobalContext();

  if (cartList.length === 0) {
    return (
      <div className="cart-empty-section">
        <h1>Your cart is empty</h1>
        <Link to="/">
          <button className="cont-shopping">Go to Home</button>
        </Link>
      </div>
    );
  } else {
    return (
      <section className="cart-section">
        <header>
          <h4 className="cart-section-title">Your Cart</h4>
          <button className="cont-shopping" onClick={clearCart}>
            Clear cart
          </button>
        </header>
        <article className="cart-info">
          <p>Products</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Remove</p>
          <p>Total</p>
        </article>
        <hr />
        <section style={{ maxHeight: "700px", overflowY: "scroll" }}>
          {cartList.map((item) => {
            const { id, name, image_link, price, amount } = item;

            return (
              <article className="cart-info" key={id}>
                <div className="cart-im">
                  <img src={image_link} alt={name}></img>
                  <p>{name}</p>
                </div>
                <p>$ {price}</p>
                <div className="quantity">
                  <FaMinus
                    onClick={() => decrease(id)}
                    style={{ cursor: "pointer" }}
                  />{" "}
                  <span>{amount}</span>{" "}
                  <FaPlus
                    onClick={() => increase(id)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="remove">
                  <ImCross className="imcross" onClick={() => remove(id)} />
                </div>
                <p>$ {(price * amount).toFixed(2)}</p>
              </article>
            );
          })}
        </section>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              Total <span>$ {totalPrice}</span>
            </h4>
          </div>
          <div className="cont-shopping-link">
            <Link to="/">
              <button className="cont-shopping">Continue Shopping</button>
            </Link>
          </div>
        </footer>
      </section>
    );
  }
});

export default Cart;
