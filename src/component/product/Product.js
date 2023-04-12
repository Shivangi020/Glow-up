import React from "react";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";
import {BsArrowRightCircle} from 'react-icons/bs'
import './Product.css'



const Product = () => {
  const { filter  } = useGlobalContext();

  return (
    <article className="main">


      <h2>Checkout our collections</h2>
      
      <section className="product-container">
        {filter.map((product) => {
          const { id, brand, name, price, image_link } = product;
          const name_modify = name.replace("Maybelline", "");

          return (
            <Link key={id} className="product"   to={`/home/${brand}/${id}`}>
             <div style={{width:'100%' ,display:'flex',justifyContent:'center'}} className="main-product-image"><img src={image_link } alt={name}></img></div> 

              <div className="product-info">
                <h5>{name_modify} </h5>
                <div className="price">
                  <p>${price}</p>
                </div>
              </div>
              <div className="see-more"> <span>details</span><BsArrowRightCircle className="BsArrowRightCircle"/></div>
            </Link>
          );
        })}
      </section>
    </article>
  );
};

export default Product;
