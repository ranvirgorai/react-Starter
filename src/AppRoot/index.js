/**
 * App
 * contain code that should be seen on all pages. (e.g. navigation bar)
 * This component is the skeleton around the actual pages, and should only
 *
 */

import React from "react";
import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";
import Login from "screens/Auth/Login/Loadable";
import Verify from "screens/Auth/Verify/Loadable";
import Home from "screens/Home/Loadable";
import MyNavbar from "components/MyNavbar";
import { AppWorkspace, AppWrapper } from "./styles";
import { defaultRedirection, isLoggedIn } from "utils/auth";
import GlobalStyle from "global-styles";
import { connect } from "react-redux";
import { compose } from "redux";
import injectReducer from "utils/injectReducer";
import injectSaga from "utils/injectSaga";
import { triggerLogout } from "./actions";
import {
  selectLogoutData,
  selectLoginData,
  selectVerifyData
} from "./selectors";
import { createStructuredSelector } from "reselect";
import saga from "./sagas";
import reducer from "./reducer";

function AppRoot(props) {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - React Starter" defaultTitle="React Starter">
        <meta name="description" content="A React Starter application" />
      </Helmet>
      <MyNavbar
        currentPathname={"/"}
        onLogout={props.triggerLogout}
        isLoggedIn={isLoggedIn()}
      />
      <AppWorkspace>
        <Switch>
          <Route exact path="/" component={() => <h1>Dashboard</h1>} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/verify" component={Verify} />
          <Route path="" component={() => <div>Not Found</div>} />
        </Switch>
        {defaultRedirection("root")}
      </AppWorkspace>
      <GlobalStyle />
    </AppWrapper>
  );
}

const mapStateToProps = createStructuredSelector({
  logoutData: selectLogoutData(),
  loginData: selectLoginData(),
  verifyData: selectVerifyData()
});

function mapDispatchToProps(dispatch) {
  return {
    triggerLogout: data => {
      dispatch(triggerLogout(data));
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "logout", reducer });
const withSaga = injectSaga({ key: "logout", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(AppRoot);
