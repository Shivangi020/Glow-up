import React from "react";

import { useGlobalContext } from "../Context";
import Error from "../../pages/error/Error";
import Loading from "../Loading";
import Product from "./Product";

const ProductCot = ()=>{
const {isLoading,isError} = useGlobalContext()

if(isLoading){
    return <Loading/>
}else if(isError.error){
    return <Error  />
}else{
    return <Product/>
}


}
export default ProductCot;