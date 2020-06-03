import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function GetUserLoggedId() {
  const { users } = useContext(GlobalContext);

  let userId = users
    .filter((user) => user.userLogged === true)
    .map((user) => user._id)[0];
  return userId;
}
