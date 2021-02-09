import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import HeaderUser from '../components/User/HeaderUser';
import LeftMenuUser from '../components/User/LeftMenuUser';
import DisplayMenu from '../components/User/DisplayMenu';
import Footer from '../components/Page/Footer';
import AlertsCard from '../components/Alerts/AlertsCard';
import AccountUserCard from '../components/AccountUser/AccountUserCard';
import ManageWorksCard from '../components/ManageWorks/ManageWorksCard';
import ManageMaterialsCard from '../components/ManageMaterials/ManageMaterialsCard';
import ManagePlantsCard from '../components/ManagePlants/ManagePlantsCard';
import GardenPlanPage from './GardenPlanPage';
import StatisticPage from './StatisticPage';
import FindContractorPage from './FindContractorPage';
import WateringPage from './WateringPage';
import ExpertPage from './ExpertPage';
import AddMaterialCard from '../components/AddMaterial/AddMaterialCard';
import AddPlantCard from '../components/AddPlant/AddPlantCard';
import PlanWorkCard from '../components/PlanWork/PlanWorkCard';
import Help from '../components/User/Help';
import WallUser from '../components/WallUser/WallUserCard';

const PageUser = () => {
  const { users, getUsers } = useContext(GlobalContext);

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let userImageBg = users
    .filter((user) => user.userLogged)
    .map((user) => user.userBackgroundImage);

  const userPageStyle = {
    backgroundImage: 'url(' + userImageBg + ')',
  };

  return (
    <BrowserRouter>
      <div className="userPage" style={userPageStyle}>
        <HeaderUser />
        <section className="userSection">
          <DisplayMenu />
          <LeftMenuUser />
          <Switch>
            <Route exact={true} path="/alerts" component={AlertsCard} />
            <Route exact={true} path="/account" component={AccountUserCard} />
            <Route
              exact={true}
              path="/manage-works"
              component={ManageWorksCard}
            />
            <Route
              exact={true}
              path="/manage-materials"
              component={ManageMaterialsCard}
            />
            <Route
              exact={true}
              path="/manage-plants"
              component={ManagePlantsCard}
            />
            <Route
              exact={true}
              path="/add-material"
              component={AddMaterialCard}
            />
            <Route exact={true} path="/plan" component={GardenPlanPage} />
            <Route exact={true} path="/statistic" component={StatisticPage} />
            <Route
              exact={true}
              path="/find-contractor"
              component={FindContractorPage}
            />
            <Route exact={true} path="/watering" component={WateringPage} />
            <Route exact={true} path="/expert" component={ExpertPage} />
            <Route exact={true} path="/add-plant" component={AddPlantCard} />
            <Route exact={true} path="/plan-work" component={PlanWorkCard} />
            <Route exact={true} path="/help" component={Help} />
            <Route exact={true} path="/posts" component={WallUser} />
          </Switch>
        </section>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default PageUser;
