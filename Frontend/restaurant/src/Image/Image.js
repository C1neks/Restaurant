import React from "react";
import { ProductImage, TestImg } from "./Image.styles";
import burger from "../images/burger.jpg";

import { IMAGE_ENDPOINT } from "../constants";

const Image = ({ image }) => {
  return (
    <>
      {image !== "default" ? (
        <TestImg image={image} />
      ) : (
        <ProductImage src={`${burger}`} alt={"default"} />
      )}
    </>
  );
};

export default Image;
