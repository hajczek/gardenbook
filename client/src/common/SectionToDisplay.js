import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./../context/GlobalState";
import PageCard from "../views/PageCard";
import PageUser from "../views/PageUser";

const SectionToDisplay = () => {
  const { users, getUsers } = useContext(GlobalContext);

  // Get users from database
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Define array for logged users
  let logged = [];

  // Filter logged user
  users
    .filter((user) => user.userLogged === true)
    .map((userLogged) => logged.push(userLogged));

  return (
    <>
      {/* Display user page if length of logged array is not equal 0 */}
      {logged.length > 0 ? (
        <PageUser key="PageUser" />
      ) : (
        <PageCard key="PageCard" />
      )}
    </>
  );
};

export default SectionToDisplay;
