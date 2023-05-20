import React from "react";
import { Link, useLocation } from "react-router-dom";

export const BackButton = () => {
  const location = useLocation();
  const previousPath = location.state?.from || "/";

  return (
    <Link to={previousPath}>
      <button>Volver</button>
    </Link>
  );
};
