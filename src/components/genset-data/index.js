import { connect } from "react-redux";
import GensetData from "./GensetData";
import { getDataGensetMonitoringAction } from "./GensetData.action";

const mapStateToProps = (state) => {
  return {
    gensetData: state.gensetMonitoringPage.gensetData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataGensetMonitoring: (indexDataStartRequest, dataLengthRequest) => dispatch(getDataGensetMonitoringAction(indexDataStartRequest, dataLengthRequest)),
  };
};

const gensetData = connect(mapStateToProps, mapDispatchToProps)(GensetData)

export { gensetData as GensetData };
