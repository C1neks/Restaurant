import React, { useContext, useEffect } from "react";
import Account from "./Account";
import { Redirect } from "react-router-dom";
import { LoggedContext } from "../App";
import { UserDetails } from "../models/models";

interface Props {
  userDetails: UserDetails;
  getUserDetails: (id: string | null) => void;
}

const AccountPage: React.FC<Props> = ({ userDetails, getUserDetails }) => {
  const context = useContext(LoggedContext);

  useEffect(() => {
    (async () => {
      await getUserDetails(localStorage.getItem("userID"));
    })();
  }, []);

  return (
    <>
      {context.logged ? (
        <Account userDetails={userDetails} />
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default AccountPage;
