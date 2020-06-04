import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export let userId;
const GetUserLoggedId = () => {
  const { users } = useContext(GlobalContext);

  // Handle for id of logged user
  userId = users
    .filter((user) => user.userLogged === true)
    .map((user) => user._id)[0];
};
