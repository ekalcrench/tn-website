export const LOGIN_ACTION = "LOGIN_ACTION";
export const LOGOUT_ACTION = "LOGOUT_ACTION";

export const requestLogin = (users) => {
  return {
    type: LOGIN_ACTION,
    payload: users
  };
};

export const requestLogout = () => {
  return {
    type: LOGOUT_ACTION,
  };
};
