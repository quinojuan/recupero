import React from "react";
import "../components/Gallery.css";
import { Link } from "react-router-dom";

const Gallery = ({ data }) => {
  const filteredData = data.filter((item) => item.available == true);
  return (
    <>
      <h2 className="title">Artículos a la venta</h2>
      <div className="gallery">
        {filteredData.map((item) => (
          <div key={item.id} className="card">
            <div className="marco">
              <Link key={item.id} to={`/photo/${item.id}`}>
                <img src={item.image} alt={item.description} />
              </Link>
            </div>
            <div className="details">
              <p className="description">{item.description}</p>
              <p className="price">$ {item.price} c/u </p>
              <p className="quantity">Unidades disponibles: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
