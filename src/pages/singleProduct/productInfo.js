import React, { useEffect, useState } from "react";
import './productInfo.css'
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import CartButton from "../../component/product/CartButton";
import Loading from "../../component/Loading";
import image_loader from "../../images/image-not-found.svg";
import Error from "../error/Error";

const image_placeholder =
  "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

const ProductInfo = () => {
  const { id, brand } = useParams();
  
  const [detail, setDetail] = useState({
    name: "Name",
    price: 0,
    image_link: image_loader,
    description: "",
    rating: "",
    product_type: "Type",
   
  });

const [loading, setLoading] = useState(true);
const [isError,setIsError] = useState(false);

  const getData = async () => {
    const url = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`;
    setLoading(true);
    try {
      let response = await fetch(url);
      let data = await response.json();
      const newDetail = await data.find((item) => item.id === parseInt(id));
      const { name, price, image_link, description, rating, product_type } =
        newDetail;
      setDetail({
        name,
        price,
        image_link,
        description,
        rating,
        product_type,
        ...newDetail,
      });
      setLoading(false);
    } catch (e) {
      console.log(e);
      setIsError(true)
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [id,brand]);

  if (loading) {
   return <main style={{ height: 'calc(100vh - 200px)',display:"flex" ,justifyContent:'center',alignItems:'center'}}><Loading/></main>
  
  } else if(isError){
    return <main style={{ height: 'calc(100vh - 200px)',display:"flex" ,justifyContent:'center',alignItems:'center'}}><Error/></main>
  }
  else {
    const { image_link } = detail;
    return (
      <main>
        <article className="productDetail-main">
          <section className="product-img">
            <img src={image_link || image_placeholder} alt={detail.name}></img>
          </section>

          <div className="vl"></div>

          <section className="detail-main">
            <div className="type-tag">{detail.product_type}</div>
            <h3>{detail.name.replace("Maybelline", "")}</h3>
            <p>{detail.description}</p>
            <div className="info">
              <div>
                Rating :
                {detail.rating?          <span>
                  {[...Array(Math.floor(detail.rating))].map((i, index) => (
                    <FaStar key={index} className="rating-star" />
                  ))}
                </span>:<span>None</span>}
      
              </div>
              <p>$ {detail.price}</p>
            </div>
            <CartButton id={id} brand={brand}/>
          </section>
        </article>
        <div className="back-cot">
        <Link to="/"    className="back-btn" >
        Go Back
        </Link>
        </div>
  
      </main>
    );
  }
};

export default ProductInfo;
