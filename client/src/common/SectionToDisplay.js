import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./../context/GlobalState";
import PageCard from "../components/Page/PageCard";
import PageUser from "../components/User/PageUser";

const SectionToDisplay = () => {
  const { users, getUsers } = useContext(GlobalContext);

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {users.map((data) =>
        data.userLogged === true ? (
          <PageUser key="PageUser" />
        ) : (
          <PageCard key="PageCard" />
        )
      )}
    </>
  );
};

export default SectionToDisplay;
