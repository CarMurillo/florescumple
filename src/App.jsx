import React from "react";
import './App.css'

const Flowers = () => {
  return (
    <div className="bg-custom">
      <div className="greetings">
        <span>H</span>
        <span>o</span>
        <span>l</span>
        <span>a</span>
        <span>!</span>
      </div>
      <div className="description">
        <span>ESTE DETALLE ES PARA TI :</span>
      </div>
      <div className="button">
        <button className="botones">
          <a href="/src/flower.html" style={{ color: "#fff" }}>CLICK AQUÍ</a>
        </button>
      </div>
    </div>
  );
};

export default Flowers;