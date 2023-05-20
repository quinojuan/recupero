import React from "react";
import { useParams } from "react-router-dom";

export const PhotoDetails = () => {
  const { id } = useParams();

  const additionalPhotos = [
    "https://i.ibb.co/hKk52WW/IMG-20230504-WA0046.jpg",
    "https://i.ibb.co/ys5WxVg/IMG-20230504-WA0047.jpg",
    "https://i.ibb.co/Fq5pCDD/IMG-20230504-WA0052.jpg",
  ];

  return (
    <div>
      <h2>Detalles de la foto {id}</h2>
      {additionalPhotos.map((photo, index) => {
        <img key={index} src={photo} alt={`Foto adicional ${index + 1}`} />;
      })}
    </div>
  );
};
