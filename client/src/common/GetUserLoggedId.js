import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function GetUserLoggedId() {
  const { users } = useContext(GlobalContext);

  // Handle for id of logged user
  let userId = users
    .filter((user) => user.userLogged === true)
    .map((user) => user._id)[0];
  return userId;
}
