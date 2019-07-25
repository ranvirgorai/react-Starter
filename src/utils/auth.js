import browserHistory from 'utils/history'

export function isLoggedIn() {
  return !!localStorage.getItem('token');
}
export function setLoggedIn(token) {
  localStorage.setItem('token', token);
}
export function getToken() {
  return localStorage.getItem('token');
}
export function setLoggedInUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('first_time', user.firstTime);
}
export function getLoggedInUser() {
  const data = localStorage.getItem('user');
  return JSON.parse(data);
}
export function isUserFirstTime() {
  return localStorage.getItem('first_time');
}
export function setLoggedInCorporate(corporate) {
  localStorage.setItem('corporate', JSON.stringify(corporate));
}
export function getLoggedInCorporate() {
  const data = localStorage.getItem('corporate');
  return JSON.parse(data);
}
export function setLoggedInUserLevel(userLevel) {
  localStorage.setItem('user_level', userLevel);
}
export function getLoggedInUserLevel() {
  return localStorage.getItem('user_level');
}
export function authRedirect(userLevel = null, firstTime = null) {
  let path = '/dashboard';
  if (!userLevel) {
    resetUser();
    path = '/';
    return browserHistory.push(path);
  }
  if (userLevel === -1) {
    path = '/register/complete';
  } else {
    path = '/dashboard';
  }
  return browserHistory.push(path);
}

export function resetUser() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('user_level');
  localStorage.removeItem('first_time');
}
