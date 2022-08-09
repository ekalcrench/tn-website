import TnLocation from "./TnLocation";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    sideMenu: state.sideMenuComponent.sideMenuData,
  };
};

const tnLocation = connect(mapStateToProps)(TnLocation);

export { tnLocation as TnLocation };
