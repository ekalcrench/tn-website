import SideMenuComponent from "./SideMenuComponent";
import {
  setCurrentComponentAction,
  setJobExecutionAction,
} from "./SideMenuComponent.action";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    sideMenu: state.sideMenuComponent.sideMenuData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentComponent: (data) => dispatch(setCurrentComponentAction(data)),
    setJobExecution: () => dispatch(setJobExecutionAction()),
  };
};

const sideMenuComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenuComponent);

export { sideMenuComponent as SideMenuComponent };
