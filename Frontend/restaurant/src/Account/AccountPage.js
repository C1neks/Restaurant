import React, { useContext, useEffect } from "react";
import Account from "./Account";
import { Redirect } from "react-router-dom";
import { LoggedContext } from "../App";

const AccountPage = ({ userDetails, getUserDetails }) => {
  const context = useContext(LoggedContext);
  useEffect(() => getUserDetails(userDetails._id), []);

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
