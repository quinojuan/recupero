import React from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "./BackButton";

export const PhotoDetails = ({ data }) => {
  const { id } = useParams();

  let newData = data.filter((item) => item.id == id);

  console.log(newData);
  return (
    <>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        {newData[0].description}
      </h2>
      {newData[0].additionalPhotos.length > 0 ? (
        newData[0].additionalPhotos.map((photo, index) => (
          <div style={{
            display: "flex",
            justifyContent: "center",
          }}>
            <img
              style={{
                width: "60%",
                margin: "10px auto"
              }}
              key={index}
              src={photo}
              alt={`Foto adicional ${index + 1}`}
            />
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
