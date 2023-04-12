import React from "react";
import './error.css'
import errorImg from '../../images/error.svg'

const Error = ()=>{
  
return <div className="error-main">
 
  <img src={errorImg} alt="ERROR"/>
  <h1>Something went wrong </h1>
<h3>Please reload the page</h3>
 
  
</div>
}

export default Error;