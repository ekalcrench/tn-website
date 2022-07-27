import Home from "./Home";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    sideMenu: state.sideMenuComponent.sideMenuData,
  };
};

const home = connect(mapStateToProps)(Home);

export { home as Home };
