import MasterCustomer from "./MasterCustomer";
import { connect } from "react-redux";
import { getMasterCustomerDataAction, getFilterMasterCustomerDataAction } from "./MasterCustomer.action";

const mapStateToProps = (state) => {
  return {
    sideMenu: state.sideMenuComponent.sideMenuData,
    masterCustomerData: state.masterCustomerComponent.masterCustomerData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMasterCustomerData: () => dispatch(getMasterCustomerDataAction()),
    getFilterMasterCustomerData: (data, status) => dispatch(getFilterMasterCustomerDataAction(data, status)),
  };
};

const masterCustomer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MasterCustomer);

export { masterCustomer as MasterCustomer };
