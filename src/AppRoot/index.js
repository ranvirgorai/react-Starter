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
import {  defaultRedirection, resetUser } from "utils/auth";
import GlobalStyle from '../../global-styles';

export default function AppRoot(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React Starter"
        defaultTitle="React Starter"
      >
        <meta name="description" content="A React Starter application" />
      </Helmet>
      <MyNavbar currentPathname={"/"}  onLogout={resetUser}/>
      {/* <AppRoute /> */}
      <AppWorkspace>
        <Switch>
          <Route exact path="/" component={()=><h1>Dashboard</h1>} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/verify" component={Verify} />
          <Route path="" component={() => <div>Not Found</div>} />
        </Switch>
        {defaultRedirection("root")}
      </AppWorkspace>
      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}
