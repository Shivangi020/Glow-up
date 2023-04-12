import React from "react";
import { useState, useEffect, useContext } from "react";

const Appcontext = React.createContext();

const AppProvider = ({ children }) => {
  const [brand, setBrand] = useState("maybelline");
  const [price, setPrice] = useState(50);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalItem, setTotalItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isError, setIsError] = useState({ error: false, errorType: "" });
  const [show, setShow] = useState(false);

  // * GETTING DATA
  const getData = async () => {
    setIsLoading(true);
    try {
      let response = await fetch(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&price_less_than=${price}`
      );
      let data = await response.json();
      setProducts(data);
      setFilter(data);
      setIsLoading(false);
    } catch (e) {
      setIsError({ ...isError, error: true, errorType: e });
      console.log(e);
      setIsLoading(false);
    }
  };

  // * CATEGORY CLICK HANDLER
  const clickHandler = (item) => {
    console.log(item);
    const filterData = products.filter((product) => {
      return product.product_type === item.toLowerCase();
    });
    if (item === "All") {
      setFilter(products);
    } else {
      setFilter(filterData);
    }
  };

  // * BRAND CLICK HANDLER
  const clickHandlerBrand = (item) => {
    setBrand(item);
  };

  // * PRICE FILTER HANDLER
  const priceHandler = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
    console.log(price);
  };

  // * GETTING ITEMS FOR  CART
  const getItem = (id) => {
    const addedItem = products
      .filter((item) => item.id === parseInt(id))
      .map((i) => {
        return { ...i, amount: 1 };
      });
      return addedItem[0];

  };

  // * HANDLING CART BUTTON
  const cartHandler = (id) => {
  const newProduct = getItem(parseInt(id));
    if (cartList.find((item) => item.id === newProduct.id)) {
    
      alert("This product is already in your cart")
      setCartList([...cartList])
    } else{
    setCartList([...cartList, newProduct]);
  };
  }
  // * CLEAR CART
  const clearCart = () => {
    setCartList([]);
  };

  // * REMOVE ITEM FROM CART
  const remove = (id) => {
    const newCart = cartList.filter((i) => i.id !== parseInt(id));
    setCartList(newCart);
  };

  // * INCREASE AMOUNT
  const increase = (id) => {
    let tempCart = cartList.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setCartList(tempCart);
  };

  // * DECREASE AMOUNT
  const decrease = (id) => {
    const tempItem = cartList
      .map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    setCartList(tempItem);
  };

  const menuShow =()=>{
    setShow(!show)
    console.log('working')
  }
  // * USE  EFFECT
  useEffect(() => {
    getData();
  }, [brand, price]);

  useEffect(() => {
    let { totalItem, totalPrice } = cartList.reduce(
      (acc, item) => {
        const { amount, price } = item;
        const newprice = parseFloat((price * amount).toFixed(2));
        acc.totalItem += amount;
        acc.totalPrice += newprice;
        return acc;
      },
      {
        totalItem: 0,
        totalPrice: 0,
      }
    );

    totalPrice = parseFloat(totalPrice).toFixed(2);

    setTotalItem(totalItem);
    setTotalPrice(totalPrice);
  }, [cartList]);

  return (
    <Appcontext.Provider
      value={{
        filter,
        clickHandler,
        isLoading,
        getData,
        products,
        isError,
        totalItem,
        cartHandler,
        cartList,
        remove,
        increase,
        decrease,
        totalPrice,
        clickHandlerBrand,
        clearCart,
        price,
        priceHandler,
        menuShow,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Appcontext);
};

export default AppProvider;
