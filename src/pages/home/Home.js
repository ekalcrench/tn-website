import React from "react";
import { GensetMonitoring } from "../../components/genset-monitoring";
import { Component_Name } from "../../common/constants";
import { MasterCustomer } from "../../components/master-customer";
import { MasterEquipment } from "../../components/master-equipment";
import { TnLocation } from "../../components/tn-location";

function Home(props) {
  return (
    <div>
      {props.sideMenu.currentComponent === Component_Name.GENSET_MONITORING && (
        <GensetMonitoring />
      )}
      {props.sideMenu.currentComponent === Component_Name.MASTER_CUSTOMER && (
        <MasterCustomer />
      )}
      {props.sideMenu.currentComponent === Component_Name.MASTER_EQUIPMENT && (
        <MasterEquipment />
      )}
      {props.sideMenu.currentComponent === Component_Name.TN_LOCATION && (
        <TnLocation />
      )}
    </div>
  );
}

export default Home;
