import React from "react";
import { GensetData } from "../../components/genset-data";
import { GensetDashboard } from "../../components/genset-dashboard";
import { Component_Name } from "../../common/constants";

function GensetMonitoring(props) {
  return (
    <div>
      {props.sideMenu.currentComponent === Component_Name.GENSET_DATA && (
        <GensetData />
      )}
      {props.sideMenu.currentComponent === Component_Name.GENSET_DASHBOARD && (
        <GensetDashboard />
      )}
    </div>
  );
}

export default GensetMonitoring;
