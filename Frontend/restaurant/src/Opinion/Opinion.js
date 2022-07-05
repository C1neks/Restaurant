import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Input, Label, RatingDiv } from "./Opinion.styles";
import { Button } from "../StyledComponents/Button";
import axios from "axios";
import { opinionService } from "../services/services";
const Opinion = ({
  userDetails,
  productId,
  usersVoted,
  getCategories,
  votesMade,
}) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [votes, setVotes] = useState(false);
  const [totalRating, settotalRating] = useState(null);
  const [isOrdered, setIsOrdered] = useState(0);
  // const isUserOrdered =  await userDetails.orders.length;

  const IsUserOrdered = async (userDetails) => {
    const isUserOrdered = userDetails.orders.length;
    setIsOrdered(isUserOrdered);
  };

  useEffect(() => {
    (async () => {
      await IsUserOrdered(userDetails);
    })();
  }, []);

  const userID = localStorage.getItem("userID");
  const getRating = async (id) => {
    const response = await opinionService.getRate(id);

    settotalRating(response.data.rating / response.data.numberOfRates);
  };

  const getVotesMade = async (id) => {
    const response = await opinionService.getRate(id);

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
      {votes !== true && isOrdered > 0 ? (
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
                  size={30}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </Label>
            );
          })}
          {rating !== null ? <h3>Your rate is {rating}</h3> : null}
          {totalRating !== null ? (
            <h3>
              <FaStar color={"orange"} size={30} />
              {totalRating.toFixed(1)}
            </h3>
          ) : (
            <h3>0 votes made</h3>
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
            <RatingDiv>
              <FaStar color={"orange"} size={30} />
              <p style={{ color: "white", "font-size": "2rem" }}>
                {totalRating.toFixed(1)}
              </p>
            </RatingDiv>
          ) : (
            <h3>Total rating is :</h3>
          )}
        </div>
      )}
    </div>
  );
};

export default Opinion;
