import MasterEquipment from "./MasterEquipment";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    sideMenu: state.sideMenuComponent.sideMenuData,
  };
};

const masterEquipment = connect(mapStateToProps)(MasterEquipment);

export { masterEquipment as MasterEquipment };
