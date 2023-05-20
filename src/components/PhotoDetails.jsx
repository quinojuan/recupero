import React from "react";
import { useParams } from "react-router-dom";

export const PhotoDetails = ({ data }) => {
  const { id } = useParams();

  let newData = data.filter((item) => item.id == id);

  console.log(newData);
  return (
    <div>
      <h2>Detalles de la foto {id}</h2>
      {newData[0].additionalPhotos.length > 0 ? (
        newData[0].additionalPhotos.map((photo, index) => (
          <img key={index} src={photo} alt={`Foto adicional ${index + 1}`} />
        ))
      ) : (
        <h3>"No hay fotos adicionales"</h3>
      )}
    </div>
  );
};
