import { call, put, takeLatest } from "redux-saga/effects";

import request from "utils/request";

import { AUTH_URL } from "common/apiUrls";
import { makeLoginSuccess, makeLoginError } from "./actions";
import { MAKE_LOGIN } from "./constants";
import { push } from "connected-react-router";
import { setUser } from "utils/auth";

export function* loginUser(args) {
  const requestURL = `${AUTH_URL}/register`;
  try {
    const result = yield call(request, requestURL, {
      method: "POST",
      body: args.data
    });
    if (result.action !== 1) {
      yield put(makeLoginError(result));
    } else {
      yield put(makeLoginSuccess(result));
      setUser(result.data);
      yield put(push("/verify"));
    }
  } catch (err) {
    yield put(makeLoginError(err));
  }
}

export default function* getFarmsData() {
  yield takeLatest(MAKE_LOGIN, loginUser);
}
