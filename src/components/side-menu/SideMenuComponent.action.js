export const SET_CURRENT_COMPONENT = "SET_CURRENT_COMPONENT";
export const SET_JOB_EXECUTION_MENU = "SET_JOB_EXECUTION_MENU";

export const setCurrentComponentAction = (data) => {
  return {
    type: SET_CURRENT_COMPONENT,
    payload: data,
  };
};

export const setJobExecutionAction = () => {
  return {
    type: SET_JOB_EXECUTION_MENU,
  };
};
