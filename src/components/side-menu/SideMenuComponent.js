import "./SideMenuComponent.scss";
import { DcaLogo } from "../../assets/imgs";
import { AssignmentIcon } from "../../assets/icons";
import { Component_Name, Side_Menu } from "../../common/constants";
import { useWindowDimensions } from "../../helper/window-size";

export default function SideMenuComponent(props) {
  const { height } = useWindowDimensions();

  console.log(props.sideMenu);

  return (
    <div
      className={height > 540 ? "side-menu" : "side-menu side-menu-fix-height"}
    >
      <div>
        <img src={DcaLogo} alt="logo" className="dca-logo" />
      </div>
      <div>
        <div>
          {/* tombol */}
          <div
            className="side-menu-list"
            onClick={() => props.setCurrentMenu(Side_Menu.GENSET_MONITORING)}
          >
            <img
              src={AssignmentIcon}
              alt="assignment-icon"
              className="list-icon"
            />
            <div className="list-text">Genset Monitoring</div>
          </div>
          {/* content */}
          <div
            className={
              props.sideMenu.currentMenu === Side_Menu.GENSET_MONITORING
                ? "dropdown-block"
                : "dropdown-none"
            }
          >
            <div
              className={
                props.sideMenu.currentComponent === Component_Name.GENSET_DATA
                  ? "side-menu-list side-menu-list-active"
                  : "side-menu-list"
              }
              onClick={() =>
                props.setCurrentComponent(Component_Name.GENSET_DATA)
              }
            >
              <img
                src={AssignmentIcon}
                alt="assignment-icon"
                className="list-icon"
              />
              <div className="list-text">Genset Data</div>
            </div>
            <div
              className={
                props.sideMenu.currentComponent ===
                Component_Name.GENSET_DASHBOARD
                  ? "side-menu-list side-menu-list-active"
                  : "side-menu-list"
              }
              onClick={() =>
                props.setCurrentComponent(Component_Name.GENSET_DASHBOARD)
              }
            >
              <img
                src={AssignmentIcon}
                alt="assignment-icon"
                className="list-icon"
              />
              <div className="list-text">Genset Dashboard</div>
            </div>
          </div>
        </div>
        <div>
          {/* tombol */}
          <div
            className="side-menu-list"
            onClick={() => props.setCurrentMenu(Side_Menu.FC_MONITORING)}
          >
            <img
              src={AssignmentIcon}
              alt="assignment-icon"
              className="list-icon"
            />
            <div className="list-text">FC Monitoring</div>
          </div>
        </div>
      </div>
    </div>
  );
}
