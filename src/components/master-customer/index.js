import MasterCustomer from "./MasterCustomer";
import { connect } from "react-redux";
import {
  getMasterCustomerDataAction,
  setEntriesAtion,
  showEntriesAction,
  setCurrentPageAction,
  setTotalPagesAction,
  showAddCustomerAction,
  showEditCustomerAction
} from "./MasterCustomer.action";

const mapStateToProps = (state) => {
  return {
    sideMenu: state.sideMenuComponent.sideMenuData,
    masterCustomerData: state.masterCustomerComponent.masterCustomerData,
    masterCustomerPage: state.masterCustomerComponent.masterCustomerPage,
    masterCustomerPost: state.masterCustomerComponent.masterCustomerPost,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMasterCustomerData: () => dispatch(getMasterCustomerDataAction()),
    setEntries: (data) => dispatch(setEntriesAtion(data)),
    showEntries: () => dispatch(showEntriesAction()),
    setCurrentPage: (data) => dispatch(setCurrentPageAction(data)),
    setTotalPages: (data) => dispatch(setTotalPagesAction(data)),
    showAddCustomer: () => dispatch(showAddCustomerAction()),
    showEditCustomer: () => dispatch(showEditCustomerAction()),
  };
};

const masterCustomer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MasterCustomer);

export { masterCustomer as MasterCustomer };
