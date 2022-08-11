import axios from "axios";
import { API } from "../../common/constants";

export const TN_LOCATION_DATA_REQUEST = "TN_LOCATION_DATA_REQUEST";
export const TN_LOCATION_DATA_FAILURE = "TN_LOCATION_DATA_FAILURE";
export const TN_LOCATION_GET_SUCCESS = "TN_LOCATION_GET_SUCCESS";
export const SET_SHOW_ADD_LOCATION = "SET_SHOW_ADD_LOCATION";
export const SET_DATA_ADD_LOCATION = "SET_DATA_ADD_LOCATION";
export const SET_SHOW_EDIT_LOCATION = "SET_SHOW_EDIT_LOCATION";
export const SET_DATA_EDIT_LOCATION = "SET_DATA_EDIT_LOCATION";
export const SET_CAN_DATA_EDIT_LOCATION = "SET_CAN_DATA_EDIT_LOCATION";

export const SET_ENTRIES = "SET_ENTRIES";
export const SET_SHOW_ENTRIES = "SET_SHOW_ENTRIES";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";

export const SET_SHOW_PLANT_CODE_FILTER = "SET_SHOW_PLANT_CODE_FILTER";
export const SET_SHOW_PLANT_NAME_FILTER = "SET_SHOW_PLANT_NAME_FILTER";
export const SET_PLANT_CODE_FILTER = "SET_PLANT_CODE_FILTER";
export const SET_PLANT_NAME_FILTER = "SET_PLANT_NAME_FILTER";
export const SET_CHECKED_DATA = "SET_CHECKED_DATA";
export const SET_SHOW_DELETE_FILTER = "SET_SHOW_DELETE_FILTER";

export const PAGE_RESET = "PAGE_RESET";
export const FILTER_RESET = "FILTER_RESET";

export const SET_SHOW_MODAL = "SET_SHOW_MODAL";
export const SET_MODAL_STATUS = "SET_MODAL_STATUS";
export const SET_MODAL_TEXT = "SET_MODAL_TEXT";
export const SET_MODAL_SUBMIT = "SET_MODAL_SUBMIT";

export const MODAL_RESET = "MODAL_RESET";

export const getTnLocationData = (dispatchData, dispatchPage, currentPage, totalEntries) => {
  console.log("getTnLocationData");
  tnLocationDataRequest(dispatchData);
  axios
    .get(
      API.LOCATION_PAGGING + "Page=" + currentPage + "&PageSize=" + totalEntries
    )
    .then((response) => {
      setTotalPage(dispatchPage, response.data.totalPageCount);
      tnLocationGetSuccess(dispatchData, response.data.data);
    })
    .catch((err) => {
      console.log(err.message);
      tnLocationDataFailure(dispatchData, err.message);
    });
};

export const getFilterTnLocationData = (dispatch, data1, data2) => {
  console.log(data1, data2);
  // if (data.length > 4) {
  tnLocationDataRequest(dispatch);
  axios
    .get(API.LOCATION_FILTER + data1 + data2)
    .then((response) => {
      console.log(response.data);
      tnLocationGetSuccess(dispatch, response.data);
    })
    .catch((err) => {
      console.log(err.message);
      tnLocationDataFailure(dispatch, err.message);
    });
  // }
};

export const postTnLocationData = (data) => {
  console.log("postTnLocationData");
  console.log(data);
  axios
    .post(API.LOCATION, data)
    .then(() => {
      console.log("berhasil post");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const deleteTnLocationData = (id) => {
  console.log("deleteTnLocationData");
  axios
    .delete(API.LOCATION + "?id=" + id)
    .then(() => {
      console.log("berhasil delete");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const putTnLocationData = (data) => {
  console.log("putTnLocationData");
  axios
    .put(API.LOCATION, data)
    .then(() => {
      console.log("berhasil put");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const tnLocationDataRequest = (dispatch) => {
  dispatch({
    type: TN_LOCATION_DATA_REQUEST,
  });
};

export const tnLocationDataFailure = (dispatch, data) => {
  dispatch({
    type: TN_LOCATION_DATA_FAILURE,
    payload: data,
  });
};

export const tnLocationGetSuccess = (dispatch, data) => {
  dispatch({
    type: TN_LOCATION_GET_SUCCESS,
    payload: data,
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

const setTotalPage = (dispatch, data) => {
  dispatch({
    type: SET_TOTAL_PAGES,
    payload: data,
  });
};

export const setShowAddLocation = (dispatch) => {
  dispatch({
    type: SET_SHOW_ADD_LOCATION,
  });
};

export const setDataAddLocation = (dispatch, data) => {
  dispatch({
    type: SET_DATA_ADD_LOCATION,
    payload: data,
  });
};

export const setShowEditLocation = (dispatch, data) => {
  dispatch({
    type: SET_SHOW_EDIT_LOCATION,
    payload: data,
  });
};

export const setCanDataEditLocation = (dispatch) => {
  dispatch({
    type: SET_CAN_DATA_EDIT_LOCATION,
  });
};

export const setDataEditLocation = (dispatch, data) => {
  console.log("setDataEditLocation");
  dispatch({
    type: SET_DATA_EDIT_LOCATION,
    payload: data,
  });
};

export const setShowPlantCodeFilter = (dispatch) => {
  dispatch({
    type: SET_SHOW_PLANT_CODE_FILTER,
  });
};

export const setShowPlantNameFilter = (dispatch) => {
  dispatch({
    type: SET_SHOW_PLANT_NAME_FILTER,
  });
};

export const setPlantCodeFilter = (dispatch, data) => {
  dispatch({
    type: SET_PLANT_CODE_FILTER,
    payload: data,
  });
};

export const setPlantNameFilter = (dispatch, data) => {
  dispatch({
    type: SET_PLANT_NAME_FILTER,
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

export const pageReset = (dispatch) => {
  dispatch({
    type: PAGE_RESET,
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

export const filterReset = (dispatch) => {
  dispatch({
    type: FILTER_RESET,
  });
};
