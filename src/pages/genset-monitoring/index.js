import { connect } from "react-redux";
import GensetMonitoring from "./GensetMonitoring";
import { getDataCurrentPageAction } from "./GensetMonitoring.action";

const mapStateToProps = (state) => {
  return {
    gensetData: state.gensetMonitoringPage.gensetData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataCurrentPage: (indexDataStartRequest, dataLengthRequest) => dispatch(getDataCurrentPageAction(indexDataStartRequest, dataLengthRequest)),
  };
};

const gensetMonitoring = connect(mapStateToProps, mapDispatchToProps)(GensetMonitoring)

export { gensetMonitoring as GensetMonitoring };
