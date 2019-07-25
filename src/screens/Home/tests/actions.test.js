import { getHomeFeed, getHomeFeedSuccess, getHomeFeedError } from "../actions";
import {
  GET_HOME_FEED,
  GET_HOME_FEED_SUCCESS,
  GET_HOME_FEED_ERROR
} from "../constants";

describe("Home actions", () => {
  describe("Get home feed", () => {
    it("has a type of GET_HOME_FEED", () => {
      const data = { hello: "world" };
      const expected = {
        type: GET_HOME_FEED,
        data
      };
      expect(getHomeFeed(data)).toEqual(expected);
    });
  });
  describe("Get home feed success", () => {
    it("has a type of GET_HOME_FEED_SUCCESS", () => {
      const data = { hello: "world" };
      const expected = {
        type: GET_HOME_FEED_SUCCESS,
        data
      };
      expect(getHomeFeedSuccess(data)).toEqual(expected);
    });
  });
  describe("Get home feed error", () => {
    it("has a type of GET_HOME_FEED_ERROR", () => {
      const error = { hello: "world" };
      const expected = {
        type: GET_HOME_FEED_ERROR,
        error
      };
      expect(getHomeFeedError(error)).toEqual(expected);
    });
  });
});
