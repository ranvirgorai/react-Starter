import React from "react";
import { Redirect } from "react-router-dom";
import { push } from "connected-react-router";

export function isLoggedIn() {
  return !!localStorage.getItem("token");
}
export function setLoggedIn(token) {
  localStorage.setItem("token", token);
}
export function getToken() {
  return localStorage.getItem("token");
}
export function getUserId() {
  return localStorage.getItem("userId");
}
export function setLoggedInUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("firstTime", user.firstTime);
}
export function getLoggedInUser() {
  const data = localStorage.getItem("user");
  return JSON.parse(data);
}
export function isUserFirstTime() {
  return localStorage.getItem("firstTime");
}
export function setLoggedInUserLevel(userLevel) {
  localStorage.setItem("userLevel", userLevel);
}
export function getLoggedInUserLevel() {
  return localStorage.getItem("userLevel");
}
export function authRedirect(userLevel = null, firstTime = null) {
  let path = "/dashboard";
  if (!userLevel) {
    resetUser();
    path = "/";
    return push(path);
  }
  if (userLevel === -1) {
    path = "/register/complete";
  } else {
    path = "/dashboard";
  }
  return push(path);
}

export function resetUser() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLevel");
  localStorage.removeItem("firstTime");
  localStorage.removeItem("user");
}

export function setUser(user) {
  if (user.token) {
    localStorage.setItem("token", user.token);
  }
  if (user.isFirstTime) {
    localStorage.setItem("firstTime", user.firstTime);
  }
  if (user.level) {
    localStorage.setItem("userLevel", user.level);
  }
  if (user.userId) {
    localStorage.setItem("userId", user.userId);
  }
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
}

export function defaultRedirection() {
  if (!getToken() && !getUserId()) {
    return <Redirect to="/login" />;
  } else if (!getToken() && getUserId()) {
    return <Redirect to="/verify" />;
  } else {
    return null;
  }
}
