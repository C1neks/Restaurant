import React from "react";
import { ProductImage } from "./Image.styles";
import burger from "../images/burger.jpg";
import { IMAGE_ENDPOINT } from "../constants";

const Image = ({ image }) => {
  return (
    <>
      {image !== "default" ? (
        <ProductImage src={`${image}`} alt={"productimage"} />
      ) : (
        <ProductImage src={`${burger}`} alt={"default"} />
      )}
    </>
  );
  // return <ProductImage src={`${burger}`} alt={"default"} />;
};

export default Image;
