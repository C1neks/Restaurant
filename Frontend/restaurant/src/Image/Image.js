import React from "react";
import { ProductImage } from "./Image.styles";
import burger from "../images/burger.jpg";
import { IMAGE_ENDPOINT } from "../constants";

const Image = ({ image }) => {
  return (
    <>
      {image !== "default" ? (
        <ProductImage src={`${IMAGE_ENDPOINT}/${image}`} alt={"productimage"} />
      ) : (
        <ProductImage src={`${burger}`} alt={"default"} />
      )}
    </>
  );
};

export default Image;
