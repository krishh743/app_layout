import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {Stack} from "@mui/material";
import {Directions} from "@mui/icons-material";

function Header() {
  return (
    <div className="AppHeader">
      <h1>krishna</h1>
      <div className="HeaderContent">
        <Stack direction="row" alignItems="center" spacing={1}>
          <AccountCircleIcon sx={{fontSize: "50px", color: "blue"}} />
          <span>Login</span>
        </Stack>
      </div>
    </div>
  );
}
export default Header;
