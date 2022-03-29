import React, { useContext } from "react";
import Account from "./Account";
import { Redirect } from "react-router-dom";
import { ItemsContext } from "../App";

const AccountPage = ({ userDetails }) => {
  const context = useContext(ItemsContext);
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
