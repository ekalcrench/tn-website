import MasterCustomer from "./MasterCustomer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    sideMenu: state.sideMenuComponent.sideMenuData,
  };
};

const masterCustomer = connect(mapStateToProps)(MasterCustomer)

export { masterCustomer as MasterCustomer };
