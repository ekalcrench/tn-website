import axios from "axios";
import { API } from "../../common/constants";

export const MASTER_CUSTOMER_DATA_REQUEST = "MASTER_CUSTOMER_DATA_REQUEST";
export const MASTER_CUSTOMER_DATA_SUCCESS = "MASTER_CUSTOMER_DATA_SUCCESS";
export const MASTER_CUSTOMER_DATA_FAILURE = "MASTER_CUSTOMER_DATA_FAILURE";

export const SET_ENTRIES = "SET_ENTRIES";
export const SHOW_ENTRIES = "SHOW_ENTRIES";
export const SET_CURRENT_PAGES = "SET_CURRENT_PAGES";
export const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
export const SHOW_ADD_CUSTOMER = "SHOW_ADD_CUSTOMER";
export const SHOW_EDIT_CUSTOMER = "SHOW_EDIT_CUSTOMER";

export const MASTER_CUSTOMER_POST_REQUEST = "MASTER_CUSTOMER_POST_REQUEST";
export const MASTER_CUSTOMER_POST_SUCCESS = "MASTER_CUSTOMER_POST_SUCCESS";
export const MASTER_CUSTOMER_POST_FAILURE = "MASTER_CUSTOMER_POST_FAILURE";

export const masterCustomerDataRequest = () => {
  return {
    type: MASTER_CUSTOMER_DATA_REQUEST,
  };
};

export const masterCustomerDataSuccess = (data) => {
  return {
    type: MASTER_CUSTOMER_DATA_SUCCESS,
    payload: data,
  };
};

export const masterCustomerDataFailure = (data) => {
  return {
    type: MASTER_CUSTOMER_DATA_FAILURE,
    payload: data,
  };
};

export const getMasterCustomerDataAction = () => {
  return (dispatch) => {
    console.log("masterCustomerDataRequest");
    dispatch(masterCustomerDataRequest());
    axios
      .get(API.MASTER_CUSTOMER)
      .then((response) => {
        console.log(response.data);
        dispatch(masterCustomerDataSuccess(response.data));
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(masterCustomerDataFailure(err.message));
      });
  };
};

export const setEntriesAtion = (data) => {
  return {
    type: SET_ENTRIES,
    payload: data,
  };
};

export const showEntriesAction = () => {
  return {
    type: SHOW_ENTRIES,
  };
};

export const setCurrentPageAction = (data) => {
  return {
    type: SET_CURRENT_PAGES,
    payload: data,
  };
};

export const setTotalPagesAction = (data) => {
  return {
    type: SET_TOTAL_PAGES,
    payload: data,
  };
};

export const showAddCustomerAction = () => {
  return {
    type: SHOW_ADD_CUSTOMER,
  };
};

export const showEditCustomerAction = () => {
  return {
    type: SHOW_EDIT_CUSTOMER,
  };
};