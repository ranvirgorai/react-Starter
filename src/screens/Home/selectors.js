import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the login state domain
 */

const selectHomeFeedDomain = state => state.login || initialState; // .get('login', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Login
 */

const selectHomeFeed = () =>
  createSelector(
    selectHomeFeedDomain,
    subState => subState.toJS(),
  );

export default selectHomeFeed;
export { selectHomeFeed };

// import { createSelector } from 'reselect';
// import {
//   LOGIN,
// } from './constants';

// /**
//  * Direct selector to the login state domain
//  */
// const selectLoginDomain = () => (state) => state.get('login');

// const selectLoginSession = () => createSelector(
//   selectLoginDomain(),
//   (substate) => substate.getIn([LOGIN, 'session'])
// );
// const selectStatus = () => createSelector(
//   selectLoginDomain(),
//   (substate) => ({
//     loading: substate.getIn([LOGIN, 'status', 'loading']),
//     error: substate.getIn([LOGIN, 'status', 'error']),
//   })
// );
// export {
//   selectLoginSession,
//   selectStatus,
// };
