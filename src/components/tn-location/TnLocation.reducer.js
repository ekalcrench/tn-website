import {
  TN_LOCATION_DATA_REQUEST,
  TN_LOCATION_DATA_FAILURE,
  TN_LOCATION_GET_SUCCESS,
  SET_DATA_ADD_LOCATION,
  SET_DATA_EDIT_LOCATION,
  SET_ENTRIES,
  SET_SHOW_ENTRIES,
  SET_CURRENT_PAGE,
  SET_TOTAL_PAGES,
  SET_SHOW_ADD_LOCATION,
  SET_SHOW_EDIT_LOCATION,
  SET_CAN_DATA_EDIT_LOCATION,
  SET_SHOW_PLANT_CODE_FILTER,
  SET_SHOW_PLANT_NAME_FILTER,
  SET_PLANT_CODE_FILTER,
  SET_PLANT_NAME_FILTER,
  SET_CHECKED_DATA,
  SET_SHOW_DELETE_FILTER,
  PAGE_RESET,
  SET_SHOW_MODAL,
  SET_MODAL_STATUS,
  SET_MODAL_TEXT,
  SET_MODAL_SUBMIT,
  MODAL_RESET,
  FILTER_RESET,
} from "./TnLocation.action";

export const initialStateData = {
  dataGet: null,
  dataPost: null,
  dataEdit: null,
  dataAdd: null,
  plantCodeFilter: "",
  plantNameFilter: "",
  error: null,
  loading: false,
};

export const initialStatePage = {
  showEntries: false,
  totalEntries: 5,
  currentPage: 1,
  totalPage: 1,
  showAddLocation: false,
  showEditLocation: false,
  canDataEditLocation: false,
  showPlantCodeFilter: false,
  showPlantNameFilter: false,
  checkedData: [],
  showDeleteFilter: false,
};

export const initialStateModal = {
  showModal: false,
  modalStatus: "",
  modalText: "",
  modalSubmit: false,
};

export const TnLocationDataReducer = (state, action) => {
  console.log("TnLocationDataReducer");
  switch (action.type) {
    case TN_LOCATION_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TN_LOCATION_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case TN_LOCATION_GET_SUCCESS:
      return {
        ...state,
        dataGet: action.payload,
        error: null,
        loading: false,
      };
    case SET_DATA_ADD_LOCATION:
      return {
        ...state,
        dataAdd: action.payload,
      };
    case SET_DATA_EDIT_LOCATION:
      return {
        ...state,
        dataEdit: action.payload,
      };
    case SET_PLANT_CODE_FILTER:
      return {
        ...state,
        plantCodeFilter: action.payload,
      };
    case SET_PLANT_NAME_FILTER:
      return {
        ...state,
        plantNameFilter: action.payload,
      };
    case FILTER_RESET:
      return {
        ...state,
        plantCodeFilter: "",
        plantNameFilter: "",
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};

export const TnLocationPageReducer = (state, action) => {
  console.log("TnLocationPageReducer");
  switch (action.type) {
    case SET_ENTRIES:
      return {
        ...state,
        totalEntries: action.payload,
      };
    case SET_SHOW_ENTRIES:
      return {
        ...state,
        showEntries: !state.showEntries,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPage: action.payload,
      };
    case SET_SHOW_ADD_LOCATION:
      return {
        ...state,
        showAddLocation: !state.showAddLocation,
      };
    case SET_SHOW_EDIT_LOCATION:
      return {
        ...state,
        showEditLocation: action.payload,
      };
    case SET_CAN_DATA_EDIT_LOCATION:
      return {
        ...state,
        canDataEditLocation: !state.canDataEditLocation,
      };
    case SET_SHOW_PLANT_CODE_FILTER:
      return {
        ...state,
        showPlantCodeFilter: !state.showUnitCodeFilter,
      };
    case SET_SHOW_PLANT_NAME_FILTER:
      return {
        ...state,
        showPlantNameFilter: !state.showUnitModelFilter,
      };
    case SET_CHECKED_DATA:
      console.log(action.payload);
      return {
        ...state,
        checkedData: action.payload,
      };
    case SET_SHOW_DELETE_FILTER:
      return {
        ...state,
        showDeleteFilter: action.payload,
      };
    case PAGE_RESET:
      return {
        ...state,
        showEntries: false,
        showAddLocation: false,
        showEditLocation: false,
        canDataEditLocation: false,
        showPlantCodeFilter: false,
        showPlantNameFilter: false,
        checkedData: [],
        showDeleteFilter: false,
      };
    default:
      return state;
  }
};

export const TnLocationModalReducer = (state, action) => {
  switch (action.type) {
    case SET_SHOW_MODAL:
      return {
        ...state,
        showModal: action.payload,
      };
    case SET_MODAL_STATUS:
      return {
        ...state,
        modalStatus: action.payload,
      };
    case SET_MODAL_TEXT:
      return {
        ...state,
        modalText: action.payload,
      };
    case SET_MODAL_SUBMIT:
      return {
        ...state,
        modalSubmit: action.payload,
      };
    case MODAL_RESET:
      return {
        ...state,
        showModal: false,
        modalStatus: "",
        modalText: "",
        modalSubmit: false,
      };
    default:
      return state;
  }
};
