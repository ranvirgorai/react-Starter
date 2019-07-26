import { call, put, takeLatest } from "redux-saga/effects";
import request from "utils/request";
import { AUTH_URL } from "common/apiUrls";
import { verifyOtpSuccess, verifyOtpError } from "./actions";
import { VERIFY_OTP } from "./constants";
import { setUser } from "utils/auth";

export function* verifyOtp(args) {
  const requestURL = `${AUTH_URL}/login`;
  try {
    const result = yield call(request, requestURL, {
      method: "POST",
      body: args.data
    });
    if (result.res && result.res.error) {
      yield put(verifyOtpError(result));
    } else {
      setUser(result.result);
      yield put(verifyOtpSuccess(result));
    }
  } catch (err) {
    yield put(verifyOtpError(err));
  }
}

export default function* getOtpData() {
  yield takeLatest(VERIFY_OTP, verifyOtp);
}
