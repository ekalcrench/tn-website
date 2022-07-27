import React, { useLayoutEffect, useReducer, useEffect } from "react";
import { Genset } from "../../assets/imgs";
import "./GensetMonitoring.scss";
import {
  GensetDashboardReducer,
  initialStateGensetDashboard,
} from "./GensetMonitoring.reducer";
import { getGensetDashboardData } from "./GensetMonitoring.action";

function GensetMonitoring() {
  const [state, dispatch] = useReducer(
    GensetDashboardReducer,
    initialStateGensetDashboard
  );

  useLayoutEffect(() => {
    getGensetDashboardData(dispatch);
  }, []);

  useEffect(() => {
    // if (!state.loading) {
    //   setTimeout(() => getGensetDashboardData(dispatch), 2000);
    // }
  }, [state.loading]);

  const renderLoading = () => {
    return <div className="loading">Loading . . .</div>;
  };

  const renderPage = () => {
    return (
      <div className="container">
        <div className="header">
          <div>Genset Code: {state.gensetCode}</div>
          <div>Last Update: {state.lastUpdate}</div>
        </div>
        <div className="body">
          <div className="genset">
            <img src={Genset} alt="genset-machine" className="genset-img" />
            <div className="genset-location">{state.customerLocation}</div>
          </div>
          <div className="status">
            <div className="status-header">
              <div>STATUS</div>
              <div>on/off</div>
            </div>
            <div className="status-body">
              <div>Run/Stop</div>
              <div
                className={
                  state.runStop ? "status-color-green" : "status-color-red"
                }
              />
            </div>
            <div className="status-body">
              <div>Auto Start</div>
              <div
                className={
                  state.autoStart ? "status-color-green" : "status-color-red"
                }
              />
            </div>
            <div className="status-body">
              <div>Common Alarm</div>
              <div
                className={
                  state.commonAlarm ? "status-color-green" : "status-color-red"
                }
              />
            </div>
            <div className="status-body">
              <div>Fail to Start</div>
              <div
                className={
                  state.failToStart ? "status-color-green" : "status-color-red"
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="background-genset">
       {renderPage()}
      {/* {state.loading ? renderLoading() : renderPage()} */}
    </div>
  );
}

export default GensetMonitoring;
