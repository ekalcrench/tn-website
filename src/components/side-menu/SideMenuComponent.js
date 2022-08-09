import "./SideMenuComponent.scss";
import { TNPortalMaintenance } from "../../assets/imgs";
import { AssignmentIcon, AssignmentIconActive, IconGensetMonitoring, IconGensetMonitoringActive } from "../../assets/icons";
import { Component_Name } from "../../common/constants";

export default function SideMenuComponent(props) {

  return (
    <div
      className="side-menu"
    >
      {/* Logo */}
      <div>
        <img
          src={TNPortalMaintenance}
          alt="logo"
          className="tn-portal-maintenance"
        />
      </div>
      <div>
        {/* Genset Monitoring */}
        <div
          className={
            props.sideMenu.currentComponent === Component_Name.GENSET_MONITORING
              ? "side-menu-list side-menu-list-active"
              : "side-menu-list"
          }
          onClick={() =>
            props.setCurrentComponent(Component_Name.GENSET_MONITORING)
          }
        >
          <img
            src={
              props.sideMenu.currentComponent ===
              Component_Name.GENSET_MONITORING
                ? IconGensetMonitoringActive
                : IconGensetMonitoring
            }
            alt="assignment-icon"
            className="list-icon-genset-monitoring"
          />
          <div className="list-text">{Component_Name.GENSET_MONITORING}</div>
        </div>
        {/* Job Creation */}
        <div className="side-menu-list side-menu-list-inactive">
          <img
            src={AssignmentIcon}
            alt="assignment-icon"
            className="list-icon"
          />
          <div className="list-text">Job Creation</div>
        </div>
        {/* Job Execution */}
        <div>
          {/* tombol */}
          <div
            className="side-menu-list"
            onClick={() => props.setJobExecution()}
          >
            <img
              src={AssignmentIcon}
              alt="assignment-icon"
              className="list-icon"
            />
            <div className="list-text">Job Execution</div>
          </div>
          {/* content */}
          <div
            className={
              props.sideMenu.jobExecutionMenu
                ? "dropdown-block"
                : "dropdown-none"
            }
          >
            <div className="side-menu-list side-menu-list-inactive">
              <img
                src={AssignmentIcon}
                alt="assignment-icon"
                className="list-icon"
              />
              <div className="list-text">Jobs</div>
            </div>
            <div className="side-menu-list side-menu-list-inactive">
              <img
                src={AssignmentIcon}
                alt="assignment-icon"
                className="list-icon"
              />
              <div className="list-text">Report</div>
            </div>
          </div>
        </div>
        {/* Performance */}
        <div className="side-menu-list side-menu-list-inactive">
          <img
            src={AssignmentIcon}
            alt="assignment-icon"
            className="list-icon"
          />
          <div className="list-text">Performance</div>
        </div>
        {/* Maintenance History */}
        <div className="side-menu-list side-menu-list-inactive">
          <img
            src={AssignmentIcon}
            alt="assignment-icon"
            className="list-icon"
          />
          <div className="list-text">Maintenance History</div>
        </div>
        {/* Master Customer */}
        <div
          className={
            props.sideMenu.currentComponent === Component_Name.MASTER_CUSTOMER
              ? "side-menu-list side-menu-list-active"
              : "side-menu-list"
          }
          onClick={() =>
            props.setCurrentComponent(Component_Name.MASTER_CUSTOMER)
          }
        >
          <img
            src={
              props.sideMenu.currentComponent === Component_Name.MASTER_CUSTOMER
                ? AssignmentIconActive
                : AssignmentIcon
            }
            alt="assignment-icon"
            className="list-icon"
          />
          <div className="list-text">{Component_Name.MASTER_CUSTOMER}</div>
        </div>
        {/* Master Equipment */}
        <div
          className={
            props.sideMenu.currentComponent === Component_Name.MASTER_EQUIPMENT
              ? "side-menu-list side-menu-list-active"
              : "side-menu-list"
          }
          onClick={() =>
            props.setCurrentComponent(Component_Name.MASTER_EQUIPMENT)
          }
        >
          <img
            src={
              props.sideMenu.currentComponent === Component_Name.MASTER_EQUIPMENT
                ? AssignmentIconActive
                : AssignmentIcon
            }
            alt="assignment-icon"
            className="list-icon"
          />
          <div className="list-text">{Component_Name.MASTER_EQUIPMENT}</div>
        </div>
        {/* TN Location */}
        <div
          className={
            props.sideMenu.currentComponent === Component_Name.TN_LOCATION
              ? "side-menu-list side-menu-list-active"
              : "side-menu-list"
          }
          onClick={() =>
            props.setCurrentComponent(Component_Name.TN_LOCATION)
          }
        >
          <img
            src={
              props.sideMenu.currentComponent === Component_Name.TN_LOCATION
                ? AssignmentIconActive
                : AssignmentIcon
            }
            alt="assignment-icon"
            className="list-icon"
          />
          <div className="list-text">{Component_Name.TN_LOCATION}</div>
        </div>
      </div>
    </div>
  );
}
