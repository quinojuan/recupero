import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./BackButton.css"

export const BackButton = () => {
  const location = useLocation();
  const previousPath = location.state?.from || "/";

  return (
    <Link to={previousPath}>
      <button className="button-19">Volver</button>
    </Link>
  );
};
