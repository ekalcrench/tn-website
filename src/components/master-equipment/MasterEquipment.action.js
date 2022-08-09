import axios from "axios";
import { API } from "../../common/constants";

export const MASTER_EQUIPMENT_DATA_REQUEST = "MASTER_EQUIPMENT_DATA_REQUEST";
export const MASTER_EQUIPMENT_DATA_FAILURE = "MASTER_EQUIPMENT_DATA_FAILURE";
export const MASTER_EQUIPMENT_GET_SUCCESS = "MASTER_EQUIPMENT_GET_SUCCESS";

export const SET_ENTRIES = "SET_ENTRIES";
export const SET_SHOW_ENTRIES = "SET_SHOW_ENTRIES";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
export const SET_SHOW_ADD_CUSTOMER = "SET_SHOW_ADD_CUSTOMER";
export const SET_DATA_ADD_CUSTOMER = "SET_DATA_ADD_CUSTOMER";
export const SET_SHOW_EDIT_CUSTOMER = "SET_SHOW_EDIT_CUSTOMER";
export const SET_DATA_EDIT_CUSTOMER = "SET_DATA_EDIT_CUSTOMER";
export const SET_CAN_DATA_EDIT_CUSTOMER = "SET_CAN_DATA_EDIT_CUSTOMER";

export const SET_SHOW_UNIT_CODE_FILTER = "SET_SHOW_UNIT_CODE_FILTER";
export const SET_SHOW_UNIT_MODEL_FILTER = "SET_SHOW_UNIT_MODEL_FILTER";
export const SET_SHOW_SERIAL_NUMBER_FILTER = "SET_SHOW_SERIAL_NUMBER_FILTER";
export const SET_SHOW_PLANT_CODE_FILTER = "SET_SHOW_PLANT_CODE_FILTER";
export const SET_SHOW_CUSTOMER_NAME_FILTER = "SET_SHOW_CUSTOMER_NAME_FILTER";
export const SET_UNIT_CODE_FILTER = "SET_UNIT_CODE_FILTER";
export const SET_UNIT_MODEL_FILTER = "SET_UNIT_MODEL_FILTER";
export const SET_SERIAL_NUMBER_FILTER = "SET_SERIAL_NUMBER_FILTER";
export const SET_PLANT_CODE_FILTER = "SET_PLANT_CODE_FILTER";
export const SET_CUSTOMER_NAME_FILTER = "SET_CUSTOMER_NAME_FILTER";
export const SET_CHECKED_DATA = "SET_CHECKED_DATA";
export const SET_SHOW_DELETE_FILTER = "SET_SHOW_DELETE_FILTER";

export const PAGE_RESET = "PAGE_RESET";
export const FILTER_RESET = "FILTER_RESET";

export const SET_SHOW_MODAL = "SET_SHOW_MODAL";
export const SET_MODAL_STATUS = "SET_MODAL_STATUS";
export const SET_MODAL_TEXT = "SET_MODAL_TEXT";
export const SET_MODAL_SUBMIT = "SET_MODAL_SUBMIT";

export const MODAL_RESET = "MODAL_RESET";

export const getMasterEquipmentData = (dispatch, currentPage, totalEntries) => {
  console.log("masterCustomerDataRequest");
  masterEquipmentDataRequest(dispatch);
  // axios
  //   .get(
  //     API.CUSTOMER_PAGGING + "Page=" + currentPage + "&PageSize=" + totalEntries
  //   )
  //   .then((response) => {
  //     masterEquipmentGetSuccess(dispatch, response.data.data);
  //     setTotalPage(dispatch, response.data.totalPageCount);
  //   })
  //   .catch((err) => {
  //     console.log(err.message);
  //     masterEquipmentDataFailure(dispatch, err.message);
  //   });
  axios
    .get(API.EQUIPMENT_FILTER)
    .then((response) => {
      console.log(response.data);
      masterEquipmentGetSuccess(dispatch, response.data);
      setTotalPage(dispatch, 1);
    })
    .catch((err) => {
      console.log(err.message);
      masterEquipmentDataFailure(dispatch, err.message);
    });
};

export const getFilterMasterEquipmentData = (
  dispatch,
  data1,
  data2,
  data3,
  data4,
  data5
) => {
  console.log(data1, data2, data3, data4, data5);
  // if (data.length > 4) {
  masterEquipmentDataRequest(dispatch);
  axios
    .get(API.EQUIPMENT_FILTER + data1 + data2 + data3 + data4 + data5)
    .then((response) => {
      console.log(response.data);
      masterEquipmentGetSuccess(dispatch, response.data);
    })
    .catch((err) => {
      console.log(err.message);
      masterEquipmentDataFailure(dispatch, err.message);
    });
  // }
};

export const postMasterEquipmentData = (data) => {
  console.log("postMasterEquipmentData");
  console.log(data);
  axios
    .post(API.EQUIPMENT, data)
    .then(() => {
      console.log("berhasil post");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const deleteMasterEquipmentData = (equipmentId) => {
  console.log("deleteMasterEquipmentData");
  axios
    .delete(API.EQUIPMENT + "?customerId=" + equipmentId)
    .then(() => {
      console.log("berhasil delete");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const putMasterEquipmentData = (data) => {
  console.log("putMasterCustomerData");
  axios
    .put(API.EQUIPMENT, data)
    .then(() => {
      console.log("berhasil put");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const masterEquipmentDataRequest = (dispatch) => {
  dispatch({
    type: MASTER_EQUIPMENT_DATA_REQUEST,
  });
};

export const masterEquipmentDataFailure = (dispatch, data) => {
  dispatch({
    type: MASTER_EQUIPMENT_DATA_FAILURE,
    payload: data,
  });
};

export const masterEquipmentGetSuccess = (dispatch, data) => {
  dispatch({
    type: MASTER_EQUIPMENT_GET_SUCCESS,
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

export const setTotalPage = (dispatch, data) => {
  dispatch({
    type: SET_TOTAL_PAGES,
    payload: data,
  });
};

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
  console.log("sini");
  dispatch({
    type: SET_DATA_EDIT_CUSTOMER,
    payload: data,
  });
};

export const setShowUnitCodeFilter = (dispatch) => {
  dispatch({
    type: SET_SHOW_UNIT_CODE_FILTER,
  });
};

export const setShowUnitModelFilter = (dispatch) => {
  dispatch({
    type: SET_SHOW_UNIT_MODEL_FILTER,
  });
};

export const setShowSerialNumberFilter = (dispatch) => {
  dispatch({
    type: SET_SHOW_SERIAL_NUMBER_FILTER,
  });
};

export const setShowPlantCodeFilter = (dispatch) => {
  dispatch({
    type: SET_SHOW_PLANT_CODE_FILTER,
  });
};

export const setShowCustomerNameFilter = (dispatch) => {
  dispatch({
    type: SET_SHOW_CUSTOMER_NAME_FILTER,
  });
};

export const setUnitCodeFilter = (dispatch, data) => {
  dispatch({
    type: SET_UNIT_CODE_FILTER,
    payload: data,
  });
};

export const setUnitModelFilter = (dispatch, data) => {
  dispatch({
    type: SET_UNIT_MODEL_FILTER,
    payload: data,
  });
};

export const setSerialNumberFilter = (dispatch, data) => {
  dispatch({
    type: SET_SERIAL_NUMBER_FILTER,
    payload: data,
  });
};

export const setPlantCodeFilter = (dispatch, data) => {
  dispatch({
    type: SET_PLANT_CODE_FILTER,
    payload: data,
  });
};

export const setCustomerNameFilter = (dispatch, data) => {
  dispatch({
    type: SET_CUSTOMER_NAME_FILTER,
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
