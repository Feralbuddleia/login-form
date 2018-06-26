import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "../../style/Account.css";

const Account = () => {
  return (
    <div className="account">
      <h1>Hi there! You have logged to the system successfully.</h1>
      <Button component={Link} to="/" variant="contained">
        back
      </Button>
    </div>
  );
};

export default Account;
