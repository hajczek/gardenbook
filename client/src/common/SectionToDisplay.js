import React, { useContext, useEffect, Suspense } from "react";
import { GlobalContext } from "./../context/GlobalState";
import PageCard from "../components/Page/PageCard";
import PageUser from "../components/User/PageUser";

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
      {/* Display user page if length of logged array is 1 */}
      {logged.length === 1 ? (
        <PageUser key="PageUser" />
      ) : (
        <PageCard key="PageCard" />
      )}
    </>
  );
};

export default SectionToDisplay;
