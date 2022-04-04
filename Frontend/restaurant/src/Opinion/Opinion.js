import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Input, Label } from "./Opinion.styles";
import { Button } from "../StyledComponents/Button";
import axios from "axios";
const Opinion = ({ productId }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [totalRating, settotalRating] = useState(null);
  const getRating = (id) => {
    axios.get(`http://localhost:4000/products/${id}`).then((response) => {
      settotalRating(
        response.data.data.rating / response.data.data.numberOfRates
      );
    });
  };

  const addRating = (id, rating) => {
    const body = {
      rating: rating,
      numberOfRates: 1,
    };
    axios
      .patch(`http://localhost:4000/products/rating/${id}`, body)
      .then((response) => {});
    setRating(null);
  };

  useEffect(() => getRating(productId), [rating]);

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
      {rating != null ? <h3>Your rate is {rating}</h3> : null}
      {totalRating != null ? (
        <h3>Total rating is :{totalRating.toFixed(1)}</h3>
      ) : (
        <h3>Total rating is :</h3>
      )}
      {rating === null ? null : (
        <Button onClick={() => addRating(productId, rating)}>
          Rate our dish
        </Button>
      )}
    </div>
  );
};

export default Opinion;
