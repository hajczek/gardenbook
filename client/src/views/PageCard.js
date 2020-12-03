import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Page/Header';
import Info from '../components/Page/Info';
import Footer from '../components/Page/Footer';

import UserLogin from '../components/Page/UserLogin';
import UserRegistration from '../components/Page/UserRegistration';
import GardensCommunity from '../components/Page/MoreInfoComponents/GardensCommunity';
import GardenerAdvices from '../components/Page/MoreInfoComponents/GardenerAdvices';
import UsefulTools from '../components/Page/MoreInfoComponents/UsefulTools';
import DataMagazine from '../components/Page/MoreInfoComponents/DataMagazine';
import GardenPlan from '../components/Page/MoreInfoComponents/GardenPlan';
import FindContractor from '../components/Page/MoreInfoComponents/FindContractor';
import Regulations from '../components/Page/Regulations';
// import NotFound from "./NotFound";

// import { useIntl } from 'react-intl';

const PageCard = () => {
  // const intl = useIntl();
  return (
    <BrowserRouter>
      <div className="contentPage">
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Info} />
          <Route exact={true} path="/zaloguj" component={UserLogin} />
          <Route
            exact={true}
            path="/zarejestruj"
            component={UserRegistration}
          />
          <Route exact={true} path="/regulamin" component={Regulations} />
          <Route
            exact={true}
            path="/spolecznosc-ogrodnikow"
            component={GardensCommunity}
          />
          <Route
            exact={true}
            path="/porady-experta"
            component={GardenerAdvices}
          />
          <Route
            exact={true}
            path="/przydatne-narzedzia"
            component={UsefulTools}
          />
          <Route exact={true} path="/baza-danych" component={DataMagazine} />
          <Route exact={true} path="/projekt-ogrodu" component={GardenPlan} />
          <Route
            exact={true}
            path="/znajdz-wykonawce"
            component={FindContractor}
          />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default PageCard;
