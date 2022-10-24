import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Input, Label, RatingDiv, RatingSign } from "./Opinion.styles";
import { Button } from "../StyledComponents/Button";
import axios from "axios";
import { opinionService } from "../services/services";
import { UserDetails } from "../models/models";

interface Props {
  userDetails: UserDetails;
  productId: number;
  getCategories: () => void;
}

const Opinion: React.FC<Props> = ({
  userDetails,
  productId,
  getCategories,
}) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [votes, setVotes] = useState<boolean>(false);
  const [totalRating, settotalRating] = useState<number>(0);
  const [isOrdered, setIsOrdered] = useState<number>(0);

  const IsUserOrdered = async (userDetails: UserDetails) => {
    const isUserOrdered = userDetails.orders.length;
    setIsOrdered(isUserOrdered);
  };

  useEffect(() => {
    (async () => {
      await IsUserOrdered(userDetails);
    })();
  }, []);

  const userID = localStorage.getItem("userID");
  const getRating = async (id: number) => {
    const response = await opinionService.getRate(id);

    settotalRating(response.data.rating / response.data.numberOfRates);
  };

  const getVotesMade = async (id: number) => {
    const response = await opinionService.getRate(id);

    setVotes(response.data.ratedByCurrentUser);
  };

  const addRating = async (id: number, rating: number) => {
    const body = {
      voter: userID,
      rating: rating,
    };

    await opinionService.addRating(id, body);
    setRating(0);
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
                  onMouseLeave={() => setHover(0)}
                />
              </Label>
            );
          })}
          {rating !== null ? <h3>Your rate is {rating}</h3> : null}
          {totalRating !== null ? (
            <RatingDiv>
              <FaStar color={"orange"} size={30} />
              <RatingSign>0 votes</RatingSign>
            </RatingDiv>
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
              <RatingSign>{totalRating.toFixed(1)}</RatingSign>
            </RatingDiv>
          ) : (
            <>
              <h3>Total rating is :</h3>
              <p>costam</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Opinion;
