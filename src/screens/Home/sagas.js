import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';

import { AUTH_URL } from 'common/apiUrls';
import { getHomeFeedError, getHomeFeedSuccess } from './actions';
import { GET_HOME_FEED } from './constants';



export function* getHomeFeed(args) {
  const requestURL = `${AUTH_URL}/register`;
  try {
    const result = yield call(request, requestURL, {
      method: 'POST',
      body: args.data,
    });
    if (result.res && result.res.error) {
      // yield put(makeLoginError(result.res.message));
      yield put(getHomeFeedError(result));
    } else {
      // yield put(makeLoginSuccess(result.res));
      yield put(getHomeFeedSuccess(result));
    }
  } catch (err) {
    yield put(getHomeFeedError(err));
  }
}

export default function* getFarmsData() {
  yield takeLatest(GET_HOME_FEED, getHomeFeed);
}




// import { takeLatest } from 'redux-saga';
// import { take, call, put, fork, cancel } from 'redux-saga/effects';
// import { LOCATION_CHANGE } from 'react-router-redux';

// import { request } from 'utils/request';
// import { AUTH_URL } from 'containers/App/api-urls';

// import { LOGIN } from './constants';

// import { makeLoginSuccess, makeLoginError } from './actions';
// import { browserHistory } from 'react-router';

// export function* login(args) {
//   try {
//     const loginData = args.data;

//     const result = yield call(request, `${AUTH_URL}/register`, {
//       method: 'POST',
//       body: loginData,
//     });
//     if (result.action === 1) {
//       yield put(makeLoginSuccess(result));
//       browserHistory.push('/verify');
//     } else {
//       yield put(makeLoginError(result));
//     }
//   } catch (err) {
//     yield put(makeLoginError(err));
//   }
// }

// export function* LoginWatcher() {
//   yield fork(takeLatest, LOGIN, login);
// }

// export function* LoginService() {
//   const watcher = yield fork(LoginWatcher);
//   yield take(LOCATION_CHANGE);
//   yield cancel(watcher);
// }

// // All sagas to be loaded
// export default [LoginService];
