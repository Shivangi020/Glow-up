import React, { useEffect, useState } from "react";
import { SiFacebook, SiPinterest, SiTelegram } from "react-icons/si";
import './footer.css'
const Footer = () => {
  const [date,setDate] = useState(2022)

  useEffect(()=>{
const newDate = new Date().getFullYear()
setDate(newDate)
  },[])
  
  return (
    <footer>
      <section className="footer-main footer">
        <div className="social">
          <p>Find us on</p>
          <SiFacebook className="socail-icon" />
          <SiPinterest className="socail-icon" />
          <SiTelegram className="socail-icon" />
        </div>
        <div className="creator">Copyright © {date} Shivangi Singh</div>
      </section>
    </footer>
  );
};

export default Footer;
