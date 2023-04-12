import React from "react";
import makeupimg from "../../images/hero-img.svg";
import './hero.css'
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-info">
          <h1><span>GlowUp</span> A beauty care Home</h1>
          <p>
            I can’t sleep in my makeup…I have a full ritual I try to do every
            night, but if I’m not feeling it, I’ll usually take a wet paper
            towel and some makeup remover and just wipe my face really quick
          </p>
         <a href="/"> <button >Shop now</button></a>
    </div>
  <div className="hero-img">
    <img src={makeupimg} alt={'hero'}></img>
</div>
      </section>
    </>
  );
};

export default Hero;
