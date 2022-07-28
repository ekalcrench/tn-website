import { combineReducers } from "@reduxjs/toolkit";
import {
  MASTER_CUSTOMER_DATA_REQUEST,
  MASTER_CUSTOMER_DATA_SUCCESS,
  MASTER_CUSTOMER_DATA_FAILURE,
  SET_ENTRIES,
  SHOW_ENTRIES,
  SET_CURRENT_PAGES,
  SET_TOTAL_PAGES,
  SHOW_ADD_CUSTOMER,
  SHOW_EDIT_CUSTOMER,
  MASTER_CUSTOMER_POST_REQUEST,
  MASTER_CUSTOMER_POST_SUCCESS,
  MASTER_CUSTOMER_POST_FAILURE,
} from "./MasterCustomer.action";

const initialStateData = {
  data: null,
  error: null,
  loading: false,
};

const initialStatePage = {
  showEntries: false,
  totalEntries: 5,
  currentPage: 1,
  totalPage: 1,
  showAddCustomer: false,
  showEditCustomer: false,
};

const initialStatePost = {
  CustomerCode: "",
  CustomerName: "",
  Address: "",
  City: "",
  ZipCode: null,
  Country: "",
  ContactPersonName: "",
  ContactPersonEmail: "",
  PhoneNumber: "",
  FaxNumber: null,
  Remark: "",
};

const MasterCustomerDataReducer = (state = initialStateData, action) => {
  switch (action.type) {
    case MASTER_CUSTOMER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MASTER_CUSTOMER_DATA_SUCCESS:
      return {
        data: action.payload,
        error: null,
        loading: false,
      };
    case MASTER_CUSTOMER_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const MasterCustomerPageReducer = (state = initialStatePage, action) => {
  switch (action.type) {
    case SET_ENTRIES:
      return {
        ...state,
        totalEntries: action.payload,
      };
    case SHOW_ENTRIES:
      return {
        ...state,
        showEntries: !state.showEntries,
      };
    case SET_CURRENT_PAGES:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPage: action.payload,
      };
    case SHOW_ADD_CUSTOMER:
      return {
        ...state,
        showAddCustomer: !state.showAddCustomer,
      };
    case SHOW_EDIT_CUSTOMER:
      return {
        ...state,
        showEditCustomer: !state.showEditCustomer,
      };
    default:
      return state;
  }
};

const MasterCustomerPostReducer = (state = initialStatePost, action) => {
  switch (action.type) {
    case MASTER_CUSTOMER_POST_REQUEST:
      return {
        ...state,
        Loading: true,
      };
    default:
      return state;
  }
};

const MasterCustomerReducer = combineReducers({
  masterCustomerData: MasterCustomerDataReducer,
  masterCustomerPage: MasterCustomerPageReducer,
  masterCustomerPost: MasterCustomerPostReducer,
});

export { MasterCustomerReducer };
