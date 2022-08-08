import {
  MASTER_EQUIPMENT_DATA_REQUEST,
  MASTER_EQUIPMENT_DATA_FAILURE,
  MASTER_EQUIPMENT_GET_SUCCESS,
  SET_DATA_ADD_CUSTOMER,
  SET_DATA_EDIT_CUSTOMER,
  SET_ENTRIES,
  SET_SHOW_ENTRIES,
  SET_CURRENT_PAGE,
  SET_TOTAL_PAGES,
  SET_SHOW_ADD_CUSTOMER,
  SET_SHOW_EDIT_CUSTOMER,
  SET_CAN_DATA_EDIT_CUSTOMER,
  SET_SHOW_UNIT_CODE_FILTER,
  SET_SHOW_UNIT_MODEL_FILTER,
  SET_SHOW_SERIAL_NUMBER_FILTER,
  SET_SHOW_PLANT_CODE_FILTER,
  SET_SHOW_CUSTOMER_NAME_FILTER,
  SET_UNIT_CODE_FILTER,
  SET_UNIT_MODEL_FILTER,
  SET_SERIAL_NUMBER_FILTER,
  SET_PLANT_CODE_FILTER,
  SET_CUSTOMER_NAME_FILTER,
  SET_CHECKED_DATA,
  SET_SHOW_DELETE_FILTER,
  PAGE_RESET,
  SET_SHOW_MODAL,
  SET_MODAL_STATUS,
  SET_MODAL_TEXT,
  SET_MODAL_SUBMIT,
  MODAL_RESET,
  FILTER_RESET,
} from "./MasterEquipment.action";

export const initialStateData = {
  dataGet: null,
  dataPost: null,
  dataEdit: null,
  dataAdd: null,
  unitCodeFilter: "",
  unitModelFilter: "",
  serialNumberFilter: "",
  plantCodeFilter: "",
  customerNameFilter: "",
  error: null,
  loading: false,
};

export const initialStatePage = {
  showEntries: false,
  totalEntries: 5,
  currentPage: 1,
  totalPage: 1,
  showAddCustomer: false,
  showEditCustomer: false,
  canDataEditCustomer: false,
  showUnitCodeFilter: false,
  showUnitModelFilter: false,
  showSerialNumberFilter: false,
  showPlantCodeFilter: false,
  showCustomerNameFilter: false,
  checkedData: [],
  showDeleteFilter: false,
};

export const initialStateModal = {
  showModal: false,
  modalStatus: "",
  modalText: "",
  modalSubmit: false,
};

export const MasterEquipmentDataReducer = (state, action) => {
  console.log("MasterEquipmentDataReducer");
  switch (action.type) {
    case MASTER_EQUIPMENT_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MASTER_EQUIPMENT_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case MASTER_EQUIPMENT_GET_SUCCESS:
      return {
        ...state,
        dataGet: action.payload,
        error: null,
        loading: false,
      };
    case SET_DATA_ADD_CUSTOMER:
      return {
        ...state,
        dataAdd: action.payload,
      };
    case SET_DATA_EDIT_CUSTOMER:
      return {
        ...state,
        dataEdit: action.payload,
      };
    case SET_UNIT_CODE_FILTER:
      return {
        ...state,
        unitCodeFilter: action.payload,
      };
    case SET_UNIT_MODEL_FILTER:
      return {
        ...state,
        unitModelFilter: action.payload,
      };
    case SET_SERIAL_NUMBER_FILTER:
      return {
        ...state,
        serialNumberFilter: action.payload,
      };
    case SET_PLANT_CODE_FILTER:
      return {
        ...state,
        plantCodeFilter: action.payload,
      };
    case SET_CUSTOMER_NAME_FILTER:
      return {
        ...state,
        customerNameFilter: action.payload,
      };
    case FILTER_RESET:
      return {
        ...state,
        unitCodeFilter: "",
        unitModelFilter: "",
        serialNumberFilter: "",
        plantCodeFilter: "",
        customerNameFilter: "",
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};

export const MasterEquipmentPageReducer = (state, action) => {
  console.log("MasterEquipmentPageReducer");
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
    case SET_SHOW_ADD_CUSTOMER:
      return {
        ...state,
        showAddCustomer: !state.showAddCustomer,
      };
    case SET_SHOW_EDIT_CUSTOMER:
      return {
        ...state,
        showEditCustomer: action.payload,
      };
    case SET_CAN_DATA_EDIT_CUSTOMER:
      return {
        ...state,
        canDataEditCustomer: !state.canDataEditCustomer,
      };
    case SET_SHOW_UNIT_CODE_FILTER:
      return {
        ...state,
        showUnitCodeFilter: !state.showUnitCodeFilter,
      };
    case SET_SHOW_UNIT_MODEL_FILTER:
      return {
        ...state,
        showUnitModelFilter: !state.showUnitModelFilter,
      };
    case SET_SHOW_SERIAL_NUMBER_FILTER:
      return {
        ...state,
        showSerialNumberFilter: !state.showSerialNumberFilter,
      };
    case SET_SHOW_PLANT_CODE_FILTER:
      return {
        ...state,
        showPlantCodeFilter: !state.showPlantCodeFilter,
      };
    case SET_SHOW_CUSTOMER_NAME_FILTER:
      return {
        ...state,
        showCustomerNameFilter: !state.showCustomerNameFilter,
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
        totalEntries: 5,
        currentPage: 1,
        showAddCustomer: false,
        showEditCustomer: false,
        canDataEditCustomer: false,
        dataEditCustomer: null,
        showUnitCodeFilter: false,
        showUnitModelFilter: false,
        showSerialNumberFilter: false,
        showPlantCodeFilter: false,
        showCustomerNameFilter: false,
        checkedData: [],
        showDeleteFilter: false,
      };
    default:
      return state;
  }
};

export const MasterEquipmentModalReducer = (state, action) => {
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
