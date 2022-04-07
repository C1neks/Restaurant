import React from "react";
import { ProductImage } from "./Image.styles";
import burger from "../images/burger.jpg";

const Image = ({ image }) => {
  return (
    <>
      {image !== "default" ? (
        <ProductImage
          src={`http://localhost:4000/static/${image}`}
          alt={"productimage"}
        />
      ) : (
        <ProductImage src={`${burger}`} alt={"default"} />
      )}
    </>
  );
};

export default Image;
