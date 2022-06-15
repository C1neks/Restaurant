import React from "react";
import { CategoryMainImage } from "./CategoryImage.styles";
import { ProductImage } from "../Image/Image.styles";
import { IMAGE_ENDPOINT } from "../constants";
import burger from "../images/burger.jpg";

const CategoryImage = ({ image }) => {
  return (
    <>
      {image !== "default" ? (
        <CategoryMainImage src={`${image}`} alt={"categoryimage"} />
      ) : (
        <CategoryMainImage src={`${burger}`} alt={"default"} />
      )}
    </>
  );
};

export default CategoryImage;
