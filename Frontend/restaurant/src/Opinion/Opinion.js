import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Input, Label } from "./Opinion.styles";
import { Button } from "../StyledComponents/Button";
import axios from "axios";
import { opinionService } from "../services/services";
const Opinion = ({ productId, usersVoted, getCategories, votesMade }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [votes, setVotes] = useState(false);
  const [totalRating, settotalRating] = useState(null);

  const userID = localStorage.getItem("userID");
  const getRating = async (id) => {
    const response = await opinionService.getRate(id);

    console.log(response);
    settotalRating(response.data.rating / response.data.numberOfRates);
  };

  const getVotesMade = async (id) => {
    const response = await opinionService.getRate(id);
    console.log("RESPOO", response);
    setVotes(response.data.ratedByCurrentUser);
  };

  const addRating = async (id, rating) => {
    const body = {
      voter: userID,
      rating: rating,
    };

    await opinionService.addRating(id, body);
    setRating(null);
    getCategories();
  };

  useEffect(() => {
    (async () => {
      await getRating(productId);
    })();
  }, [rating]);

  useEffect(() => {
    (async () => {
      await getVotesMade(productId);
    })();
  }, [rating]);

  return (
    <div>
      {votes !== true ? (
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
      ) : (
        <div>
          {totalRating != null ? (
            <h3>Total rating is :{totalRating.toFixed(1)}</h3>
          ) : (
            <h3>Total rating is :</h3>
          )}
        </div>
      )}
    </div>
  );
};

export default Opinion;
