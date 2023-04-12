import React, { useState, useEffect, useRef } from "react";
import { GiLipstick } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {FaUserCircle} from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
import "./navbar.css";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const navRef = useRef(null);
  const { totalItem } = useGlobalContext();

  const scrollHandler = () => {
    const sticky = navRef.current.getBoundingClientRect().top;
    if (window.pageYOffset > sticky) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <>
      <nav
        className={`${isScrolling ? "navbar sticky" : "navbar"}`}
        ref={navRef}
      >
        <h3>
          <Link to='/' className="logo-link">
          <GiLipstick />
          GlowUp</Link>

        </h3>
        <div className="nav-links">
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <AiOutlineShoppingCart className="cart-icon" />
            <div className="cart-amount">{totalItem}</div>
          </Link>

        <FaUserCircle className="user-icon"/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
