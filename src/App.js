import Footer from "./component/footer/Footer";
import Hero from "./component/hero/Hero";
import Navbar from "./component/navbar/Navbar";
import ProductCot from "./component/product/ProductCot";
import ProductInfo from "./pages/singleProduct/productInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./pages/cartPage/Cart";
import Filter from "./component/filter/filter";
import { useGlobalContext } from "./component/Context";

function App() {
  const { show } = useGlobalContext();

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <div className="main-cot">
                  <Filter />
                  <ProductCot />
                </div>
              </div>
            }
          ></Route>
          <Route path="/home/:brand/:id" element={<ProductInfo />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
