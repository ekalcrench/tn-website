import React from "react";
import { GensetMonitoring } from "../../components/genset-monitoring";
import { Component_Name } from "../../common/constants";
import { MasterCustomer } from "../../components/master-customer";
import { Location } from "../../components/location";

function Home(props) {
  return (
    <div>
      {props.sideMenu.currentComponent === Component_Name.GENSET_MONITORING && (
        <GensetMonitoring />
      )}
      {props.sideMenu.currentComponent === Component_Name.MASTER_CUSTOMER && (
        <MasterCustomer />
      )}
    </div>
  );
}

export default Home;
