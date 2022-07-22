import SideMenuComponent from "./SideMenuComponent";
import { setCurrentComponentAction, setCurrentMenuAction } from "./SideMenuComponent.action";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    sideMenu: state.sideMenuComponent.sideMenuData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentComponent: (data) => dispatch(setCurrentComponentAction(data)),
    setCurrentMenu: (data) => dispatch(setCurrentMenuAction(data)),
  };
};

const sideMenuComponent = connect(mapStateToProps,mapDispatchToProps)(SideMenuComponent);

export { sideMenuComponent as SideMenuComponent };
