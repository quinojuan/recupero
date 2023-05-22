import React from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "./BackButton";
import "./PhotoDetails.css";

export const PhotoDetails = ({ data }) => {
  const { id } = useParams();

  let newData = data.filter((item) => item.id == id);

  return (
    <>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        {newData[0].title}
      </h2>
      {newData[0].additionalPhotos.length > 0 ? (
        newData[0].additionalPhotos.map((photo, index) => (
          <div key={index} className="contenedor">
            <img key={index} src={photo} alt={`Foto adicional ${index + 1}`} />
          </div>
        ))
      ) : (
        <h3
          style={{
            color: "red",
            textAlign: "center",
          }}
        >
          No hay fotos adicionales
        </h3>
      )}
      <BackButton />
    </>
  );
};
