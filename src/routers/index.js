/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Login from 'screens/Auth/Login/Loadable';
import Home from 'screens/Home/Loadable';
import MyNavbar from 'components/MyNavbar';
//import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  //max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 0px;
  flex-direction: column;
`;

const AppWorkspace = styled.div`
  margin: 60px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center
`;

export default function AppRoot(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <MyNavbar currentPathname={"/"} />
      {/* <AppRoute /> */}
      <AppWorkspace>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="" component={()=><div>Not Found</div>} />
      </Switch>
      </AppWorkspace>
      {/* <Footer /> */}
      {/* <GlobalStyle /> */}
    </AppWrapper>
  );
}
