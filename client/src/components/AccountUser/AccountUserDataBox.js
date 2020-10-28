import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import AccountUserDataEdit from "./AccountUserDataEdit";
import translate from "../../i18n/translate";

const AccountUserDataBox = () => {
  const { users, getUsers } = useContext(GlobalContext);
  const [editData, setEditData] = useState(false);
  const [userId, setUserId] = useState();

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return editData === false ? (
    <div className="user-right-box">
      <h2>{translate("your-data")}</h2>
      {users
        .filter((user) => user.userLogged === true)
        .map((data) => (
          <>
            <p key="user-data">
              <span key={data.userName}>{translate("name-term")}: </span>{" "}
              {data.userName}
              <br />
              <span key={data.userEmail}>Email (login):</span> {data.userEmail}
              <br />
              {/* <span>Aktualne hasło:</span> {data.userPass}
          <br /> */}
              <span key={data.userTel}>{translate("phone-term")}: </span>{" "}
              {data.userTel}
              <br />
              <span key={data.userPlace}>
                {translate("garden-localization")}:
              </span>{" "}
              {data.userPlace}
              <br />
              <span key="bg">{translate("path-to-bg")}: </span>{" "}
              {data.userBackgroundImage.slice(0, 30)} ...
            </p>
            <h2>{translate("app-sets")}</h2>
            <p key="user-func">
              <span>{translate("work-planner")}: </span>
              {data.accountSets.workPlanner === false
                ? translate("off-term")
                : translate("on-term")}
              <br />
              <span>{translate("garden-plan")}: </span>
              {data.accountSets.gardenPlan === false
                ? translate("off-term")
                : translate("on-term")}
              <br />
              <span>{translate("statistic-term")}: </span>
              {data.accountSets.gardenStatistic === false
                ? translate("off-term")
                : translate("on-term")}
              <br />
              <span>{translate("function-history-title")}: </span>
              {data.accountSets.gardenHistory === false
                ? translate("off-term")
                : translate("on-term")}
              <br />
              <span>{translate("contractors-search")}: </span>
              {data.accountSets.searchWorkers === false
                ? translate("off-term")
                : translate("on-term")}
              <br />
            </p>
            <button
              onClick={(e) => {
                setEditData(true);
                setUserId(data._id);
              }}
            >
              <FontAwesomeIcon id="edit-plant" icon={faEdit} />{" "}
              {translate("change-term")}
            </button>
          </>
        ))}
    </div>
  ) : (
    <AccountUserDataEdit userid={userId} />
  );
};

export default AccountUserDataBox;
