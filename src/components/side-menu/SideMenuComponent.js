import "./SideMenuComponent.scss";
import { DcaLogo } from "../../assets/imgs";
import { AssignmentIcon, SettingsIcon } from "../../assets/icons";

export default function SideMenuComponent() {
  return (
    <div className="side-menu">
      <div>
        <img src={DcaLogo} alt="logo" className="dca-logo" />
      </div>
      <div>
        <div className="side-menu-list">
          <img
            src={AssignmentIcon}
            alt="assignment-icon"
            className="list-icon"
          />
          <div className="list-text">Dashboard</div>
        </div>
        <div className="side-menu-list">
          <img
            src={AssignmentIcon}
            alt="assignment-icon"
            className="list-icon"
          />
          <div className="list-text">Job Execution</div>
        </div>
        <div className="side-menu-list">
          <img
            src={AssignmentIcon}
            alt="assignment-icon"
            className="list-icon"
          />
          <div className="list-text">Backlog Monitoring</div>
        </div>
        <div className="side-menu-list">
          <img
            src={AssignmentIcon}
            alt="assignment-icon"
            className="list-icon"
          />
          <div className="list-text">FC Monitoring</div>
        </div>
        <div className="side-menu-list">
          <img
            src={AssignmentIcon}
            alt="assignment-icon"
            className="list-icon"
          />
          <div className="list-text">Genset Monitoring</div>
        </div>
        <div className="side-menu-list">
          <img
            src={AssignmentIcon}
            alt="assignment-icon"
            className="list-icon"
          />
          <div className="list-text">Master Data Uploader</div>
        </div>
        <div className="side-menu-list">
          <img
            src={SettingsIcon}
            alt="assignment-icon"
            className="list-icon list-icon-setting"
          />
          <div className="list-text">Setting</div>
        </div>
      </div>
    </div>
  );
}
