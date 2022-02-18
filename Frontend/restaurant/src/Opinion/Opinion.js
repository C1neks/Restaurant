import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Input, Label } from "./Opinion.styles";
import { Button } from "../StyledComponents/Button";
import axios from "axios";
const Opinion = ({ productId }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [totalRating,settotalRating]= useState(null)
  const getRating = (id)=>{
    axios
      .get(`http://localhost:4000/products/${id}`)
      .then((response) => {
        settotalRating(response.data.data.rating/response.data.data.numberOfRates)

      });
  }
  const addRating = (id, rating) => {
    const body = {
      rating: rating,
      numberOfRates: 1,
    };
    axios
      .patch(`http://localhost:4000/products/${id}`, body)
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <Label>
            <Input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              color={ratingValue <= (hover || rating) ? "orange" : "gray"}
              size={25}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </Label>
        );
      })}
      <h3>Rating is {rating}</h3>
      {getRating(productId)}
      <h3>Total rating is :{totalRating}</h3>
      <h3>{productId}</h3>
      <Button onClick={() => addRating(productId, rating)}>
        Rate our dish
      </Button>
    </div>
  );
};

export default Opinion;
