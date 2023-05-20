import React, { useState } from "react";

export const ImageCard = () => {
  const [additionalPhotos, setAdditionalPhotos] = useState([]);

  const handleImageClick = () => {
    const photos = [
      "https://i.ibb.co/hKk52WW/IMG-20230504-WA0046.jpg",
      "https://i.ibb.co/ys5WxVg/IMG-20230504-WA0047.jpg",
      "https://i.ibb.co/Fq5pCDD/IMG-20230504-WA0052.jpg",
    ];
    setAdditionalPhotos(photos);
  };

  return (
    <div className="card">
      <h3>Title card</h3>
      <img
        src="https://i.ibb.co/ScM4G70/Aire-acondicionado-philco.jpg"
        alt="aire acondicionado"
      />
      <div className="additional-photos">
        {additionalPhotos.map((photo, index) => (
          <img key={index} src={photo} alt={`Foto adicional ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};
