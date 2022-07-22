export const SET_CURRENT_COMPONENT = "SET_CURRENT_COMPONENT";
export const SET_CURRENT_MENU = "SET_CURRENT_MENU";

export const setCurrentComponentAction = (data) => {
  return {
    type: SET_CURRENT_COMPONENT,
    payload: data,
  };
};

export const setCurrentMenuAction = (data) => {
  return {
    type: SET_CURRENT_MENU,
    payload: data,
  };
};
