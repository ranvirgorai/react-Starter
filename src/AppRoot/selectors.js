import { createSelector } from "reselect";
import { initialState } from "./reducer";

const logoutDomain = state => state.logout || initialState; 
const loginDomain = state => state.login || initialState; 
const verifyDomain = state => state.verify || initialState; 

/**
 * Other specific selectors
 */

/**
 * Default selector used by Login
 */

const selectLogoutData = () =>
  createSelector(
    logoutDomain,
    subState => subState.toJS()
  );

const selectLoginData = () =>
  createSelector(
    loginDomain,
    subState => subState.toJS()
  );
const selectVerifyData = () =>
  createSelector(
    verifyDomain,
    subState => subState.toJS()
  );


export { selectLogoutData, selectLoginData, selectVerifyData };
