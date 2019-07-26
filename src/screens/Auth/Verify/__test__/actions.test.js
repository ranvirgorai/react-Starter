import {
  makeLogin,
  makeLoginSuccess,
  makeLoginError,
  makeLoginRest,
  makeLoginRestSuccess,
  makeLoginRestError
} from "../actions";
import {
  MAKE_LOGIN,
  MAKE_LOGIN_SUCCESS,
  MAKE_LOGIN_ERROR,
  MAKE_LOGIN_RESET,
  MAKE_LOGIN_RESET_SUCCESS,
  MAKE_LOGIN_RESET_ERROR
} from "../constants";

describe("Login actions", () => {
  describe("Make Login", () => {
    test("Should type MAKE_LOGIN", () => {
      const data = { username: "abc", password: "123" };
      const expected = {
        type: MAKE_LOGIN,
        data
      };
      expect(makeLogin(data)).toEqual(expected);
    });
  });

  describe("Login Success", () => {
    test("Should type MAKE_LOGIN_SUCCESS", () => {
      const data = { username: "abc", password: "123" };
      const expected = {
        type: MAKE_LOGIN_SUCCESS,
        data
      };
      expect(makeLoginSuccess(data)).toEqual(expected);
    });
  });

  describe("Login Error", () => {
    test("Should type MAKE_LOGIN_ERROR", () => {
      const error = { username: "abc", password: "123" };
      const expected = {
        type: MAKE_LOGIN_ERROR,
        error
      };
      expect(makeLoginError(error)).toEqual(expected);
    });
  });
});

describe("Reset Login actions", () => {
  describe("Reset Login", () => {
    test("Should type MAKE_LOGIN_RESET", () => {
      const expected = {
        type: MAKE_LOGIN_RESET
      };
      expect(makeLoginRest()).toEqual(expected);
    });
  });

  describe("Reset login success", () => {
    test("Should have type MAKE_LOGIN_RESET_SUCCESS", () => {
      const expected = {
        type: MAKE_LOGIN_RESET_SUCCESS
      };
      expect(makeLoginRestSuccess()).toEqual(expected);
    });
  });

  describe("Reset login error", () => {
    test("Should type MAKE_LOGIN_RESET_ERROR", () => {
      const error = { username: "abc", password: "123" };
      const expected = {
        type: MAKE_LOGIN_RESET_ERROR,
        error
      };
      expect(makeLoginRestError(error)).toEqual(expected);
    });
  });
});
