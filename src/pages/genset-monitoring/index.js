import GensetMonitoring from "./GensetMonitoring";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    sideMenu: state.sideMenuComponent.sideMenuData,
  };
};

const gensetMonitoring = connect(mapStateToProps)(GensetMonitoring);

export { gensetMonitoring as GensetMonitoring };
