import React from "react";
import "../components/Gallery.css";
import { Link } from "react-router-dom";

const Gallery = ({ data }) => {
  const filteredData = data.filter((item) => item.available == true);
  return (
    <>
      <h2 className="title">JUAN JOSÉ CASTELLI</h2>
      <h3 className="title">Artículos a la venta</h3>
      <div className="gallery">
        {filteredData.map((item) => (
          <div key={item.id} className="card">
            <div className="marco">
              <Link key={item.id} to={`/photo/${item.id}`}>
                <img src={item.image} alt={item.title} />
              </Link>
            </div>
            <div className="details">
              <p className="title">{item.title}</p>
              <p className="price">$ {item.price} {item.title.includes("canal") ? "" : "c/u"} </p>
              <p className="description">{item.description}</p>
              <p className="quantity">Unidades disponibles: <span>{item.quantity}</span></p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
