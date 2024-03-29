import axios from "axios";
import { API } from "../../common/constants";

export const MASTER_CUSTOMER_DATA_REQUEST = "MASTER_CUSTOMER_DATA_REQUEST";
export const MASTER_CUSTOMER_DATA_SUCCESS = "MASTER_CUSTOMER_DATA_SUCCESS";
export const MASTER_CUSTOMER_DATA_FAILURE = "MASTER_CUSTOMER_DATA_FAILURE";

export const MASTER_CUSTOMER_POST_REQUEST = "MASTER_CUSTOMER_POST_REQUEST";
export const MASTER_CUSTOMER_POST_SUCCESS = "MASTER_CUSTOMER_POST_SUCCESS";
export const MASTER_CUSTOMER_POST_FAILURE = "MASTER_CUSTOMER_POST_FAILURE";

export const SET_ENTRIES = "SET_ENTRIES";
export const SET_SHOW_ENTRIES = "SET_SHOW_ENTRIES";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_PAGES = "SET_TOTAL_PAGES"
export const SET_SHOW_ADD_CUSTOMER = "SET_SHOW_ADD_CUSTOMER";
export const SET_DATA_ADD_CUSTOMER = "SET_DATA_ADD_CUSTOMER";
export const SET_SHOW_EDIT_CUSTOMER = "SET_SHOW_EDIT_CUSTOMER";
export const SET_DATA_EDIT_CUSTOMER = "SET_DATA_EDIT_CUSTOMER";
export const SET_CAN_DATA_EDIT_CUSTOMER = "SET_CAN_DATA_EDIT_CUSTOMER";

export const SET_SHOW_CUSTOMER_NAME_FILTER = "SET_SHOW_CUSTOMER_NAME_FILTER";
export const SET_CUSTOMER_NAME_FILTER = "SET_CUSTOMER_NAME_FILTER";
export const SET_SHOW_CITY_FILTER = "SET_SHOW_CITY_FILTER";
export const SET_CITY_FILTER = "SET_CITY_FILTER";
export const SET_SEARCH_ALL_FILTER = "SET_SEARCH_ALL_FILTER";
export const SET_CHECKED_DATA = "SET_CHECKED_DATA";
export const SET_SHOW_DELETE_FILTER = "SET_SHOW_DELETE_FILTER";

export const RESET = "RESET";

export const SET_SHOW_MODAL = "SET_SHOW_MODAL";
export const SET_MODAL_STATUS = "SET_MODAL_STATUS";
export const SET_MODAL_TEXT = "SET_MODAL_TEXT";
export const SET_MODAL_SUBMIT = "SET_MODAL_SUBMIT";

export const MODAL_RESET = "MODAL_RESET";

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

export const getMasterCustomerDataAction = (dispatchUseReducer, currentPage, totalEntries) => {
  return (dispatch) => {
    console.log("masterCustomerDataRequest");
    dispatch(masterCustomerDataRequest());
    axios
      .get(API.CUSTOMER_PAGGING + "Page=" + currentPage + "&PageSize=" + totalEntries)
      .then((response) => {
        dispatch(masterCustomerDataSuccess(response.data.data));
        setTotalPage(dispatchUseReducer, response.data.totalPageCount)
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(masterCustomerDataFailure(err.message));
      });
  };
};

export const getFilterMasterCustomerDataAction = (data, status) => {
  return (dispatch) => {
    console.log(data, status)
    if (data.length > 4) {
      console.log(data, status)
      axios
        .get(API.CUSTOMER_FILTER + status + "=" + data)
        .then((response) => {
          console.log(response.data);
          dispatch(masterCustomerDataSuccess(response.data));
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else if (status.length === 2) {
      axios
        .get(
          API.CUSTOMER_FILTER +
            status[0] +
            "=" +
            data[0] +
            "&" +
            status[1] +
            "=" +
            data[1]
        )
        .then((response) => {
          console.log(response.data);
          dispatch(masterCustomerDataSuccess(response.data));
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
};

export const postMasterCustomerData = (data) => {
  console.log("postMasterCustomerData");
  axios
    .post(API.CUSTOMER, data)
    .then(() => {
      console.log("berhasil post");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const deleteMasterCustomerData = (custCode) => {
  console.log("deleteMasterCustomerData");
  axios
    .delete(API.CUSTOMER + "?customerId=" + custCode)
    .then(() => {
      console.log("berhasil delete");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const putMasterCustomerData = (data) => {
  console.log("putMasterCustomerData");
  axios
    .put(API.CUSTOMER, data)
    .then(() => {
      console.log("berhasil put");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const setEntries = (dispatch, data) => {
  dispatch({
    type: SET_ENTRIES,
    payload: data,
  });
};

export const setShowEntries = (dispatch) => {
  dispatch({
    type: SET_SHOW_ENTRIES,
  });
};

export const setCurrentPage = (dispatch, data) => {
  dispatch({
    type: SET_CURRENT_PAGE,
    payload: data,
  });
};

export const setTotalPage = (dispatch, data) => {
  dispatch({
    type: SET_TOTAL_PAGES,
    payload: data
  })
}

export const setShowAddCustomer = (dispatch) => {
  dispatch({
    type: SET_SHOW_ADD_CUSTOMER,
  });
};

export const setDataAddCustomer = (dispatch, data) => {
  dispatch({
    type: SET_DATA_ADD_CUSTOMER,
    payload: data,
  });
};

export const setShowEditCustomer = (dispatch, data) => {
  dispatch({
    type: SET_SHOW_EDIT_CUSTOMER,
    payload: data,
  });
};

export const setCanDataEditCustomer = (dispatch) => {
  dispatch({
    type: SET_CAN_DATA_EDIT_CUSTOMER,
  });
};

export const setDataEditCustomer = (dispatch, data) => {
  dispatch({
    type: SET_DATA_EDIT_CUSTOMER,
    payload: data,
  });
};

export const setShowCustomerNameFilter = (dispatch) => {
  dispatch({
    type: SET_SHOW_CUSTOMER_NAME_FILTER,
  });
};

export const setCustomerNameFilter = (dispatch, data) => {
  dispatch({
    type: SET_CUSTOMER_NAME_FILTER,
    payload: data,
  });
};

export const setShowCityFilter = (dispatch) => {
  dispatch({
    type: SET_SHOW_CITY_FILTER,
  });
};

export const setCityFilter = (dispatch, data) => {
  dispatch({
    type: SET_CITY_FILTER,
    payload: data,
  });
};

export const setSearchAllFilter = (dispatch, data) => {
  dispatch({
    type: SET_SEARCH_ALL_FILTER,
    payload: data,
  });
};

export const setCheckedData = (dispatch, data) => {
  dispatch({
    type: SET_CHECKED_DATA,
    payload: data,
  });
};

export const setShowDeleteFilter = (dispatch, data) => {
  dispatch({
    type: SET_SHOW_DELETE_FILTER,
    payload: data,
  });
};

export const reset = (dispatch) => {
  dispatch({
    type: RESET,
  });
};

export const setShowModal = (dispatch, data) => {
  dispatch({
    type: SET_SHOW_MODAL,
    payload: data,
  });
};

export const setModalStatus = (dispatch, data) => {
  dispatch({
    type: SET_MODAL_STATUS,
    payload: data,
  });
};

export const setModalText = (dispatch, data) => {
  dispatch({
    type: SET_MODAL_TEXT,
    payload: data,
  });
};

export const setModalSubmit = (dispatch, data) => {
  dispatch({
    type: SET_MODAL_SUBMIT,
    payload: data,
  });
};

export const modalReset = (dispatch) => {
  dispatch({
    type: MODAL_RESET,
  });
};
