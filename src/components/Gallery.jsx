import React from "react";
import "../components/Gallery.css";

const Gallery = ({ data }) => {
  return (
    <>
      <h2 className="title">Artículos a la venta</h2>
      <div className="gallery">
        {data.map((item) => (
          <div key={item.id} className="card">
            <div className="marco">
              <img src={item.image} alt={item.description} />
            </div>
            <div className="details">
              <p className="description">{item.description}</p>
              <p className="price">$ {item.price}</p>
              <p className="quantity">Unidades disponibles: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
