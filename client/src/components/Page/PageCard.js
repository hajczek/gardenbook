import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Info from "./Info";
import UserLogin from "./UserLogin";
import UserRegistration from "./UserRegistration";
import Regulations from "./Regulations";
import MoreInfo from "./MoreInfo";
import Footer from "./Footer";
// import UserRegistration from "./UserRegistration";
// import UserLogin from "./UserLogin";

const PageCard = () => {
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
          {/* <Route component={NotFoundPage} /> */}
        </Switch>
        <MoreInfo />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default PageCard;
