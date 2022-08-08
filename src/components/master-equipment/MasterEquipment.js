import React, { useEffect, useLayoutEffect, useReducer } from "react";
import "./MasterEquipment.scss";
import {
  DropdownIconWhite,
  IconTrash,
} from "../../assets/icons";
import { ADD_EQUIPMENT_FORM } from "../../common/constants";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialFormState, validate } from "./MasterEquipment.form";
import { Modal } from "../../helper/modal";
import {
  initialStatePage,
  MasterEquipmentPageReducer,
  initialStateData,
  MasterEquipmentDataReducer,
  initialStateModal,
  MasterEquipmentModalReducer,
} from "./MasterEquipment.reducer";
import {
  getMasterEquipmentData,
  postMasterEquipmentData,
  deleteMasterEquipmentData,
  putMasterEquipmentData,
  setShowEntries,
  setEntries,
  setCurrentPage,
  setCheckedData,
  setShowDeleteFilter,
  setShowAddCustomer,
  setDataAddCustomer,
  setShowEditCustomer,
  setDataEditCustomer,
  setCanDataEditCustomer,
  setShowUnitCodeFilter,
  setShowUnitModelFilter,
  setShowSerialNumberFilter,
  setShowPlantCodeFilter,
  setShowCustomerNameFilter,
  setUnitCodeFilter,
  setUnitModelFilter,
  setSerialNumberFilter,
  setPlantCodeFilter,
  setCustomerNameFilter,
  pageReset,
  setShowModal,
  setModalStatus,
  setModalText,
  setModalSubmit,
  modalReset,
  filterReset,
} from "./MasterEquipment.action";

export default function MasterEquipment(props) {
  const [statePage, dispatchPage] = useReducer(
    MasterEquipmentPageReducer,
    initialStatePage
  );

  const [stateData, dispatchData] = useReducer(
    MasterEquipmentDataReducer,
    initialStateData
  );

  const [stateModal, dispatchModal] = useReducer(
    MasterEquipmentModalReducer,
    initialStateModal
  );

  useLayoutEffect(() => {
    getMasterEquipmentData(
      dispatchData,
      statePage.currentPage,
      statePage.totalEntries
    );
  }, []);

  useEffect(() => {
    if (stateData.dataGet !== null) {
      setCheckedData(
        dispatchPage,
        new Array(stateData.dataGet.length).fill(false)
      );
    }
  }, [stateData.dataGet]);

  //   useEffect(() => {
  //     if (props.masterCustomerData.data !== null) {
  //       props.getMasterCustomerData(
  //         dispatch,
  //         state.currentPage,
  //         state.totalEntries
  //       );
  //     }
  //   }, [state.currentPage, state.totalEntries]);

  useEffect(() => {
    if (stateData.dataGet !== null) {
      console.log("Unit Code : ", stateData.unitCodeFilter);
      console.log("Unit Model : ", stateData.unitModelFilter);
      console.log("Serial Number : ", stateData.serialNumberFilter);
      console.log("Plant Code : ", stateData.plantCodeFilter);
      console.log("Customer Name : ", stateData.customerNameFilter);
      // if (state.customerNameFilter.length > 0 && state.cityFilter.length > 0) {
      //   const data = [state.cityFilter, state.customerNameFilter];
      //   const status = ["City", "CustomerName"];
      //   console.log(data, status);
      //   props.getFilterMasterCustomerData(data, status);
      // } else if (state.customerNameFilter.length > 0) {
      //   console.log(state.customerNameFilter, "CustomerName");
      //   props.getFilterMasterCustomerData(
      //     state.customerNameFilter,
      //     "CustomerName"
      //   );
      // } else if (state.cityFilter.length > 0) {
      //   console.log(state.cityFilter, "City");
      //   props.getFilterMasterCustomerData(state.cityFilter, "City");
      // }
    }
  }, [
    stateData.unitCodeFilter,
    stateData.unitModelFilter,
    stateData.serialNumberFilter,
    stateData.plantCodeFilter,
    stateData.customerNameFilter,
  ]);

  useEffect(() => {
    const filter = statePage.checkedData.filter((data) => data === true);
    if (filter.length > 0) {
      setShowDeleteFilter(dispatchPage, true);
    } else {
      setShowDeleteFilter(dispatchPage, false);
    }
  }, [statePage.checkedData]);

  useEffect(() => {
    console.log(stateData.dataEdit);
    if (stateData.dataEdit !== null) {
      setShowEditCustomer(dispatchPage, true);
    }
  }, [stateData.dataEdit]);

  useEffect(() => {
    if (stateModal.modalSubmit) {
      if (stateModal.modalStatus === "delete") {
        handleDeleteData();
      } else if (stateModal.modalStatus === "post") {
        postMasterEquipmentData(stateData.dataAdd);
        getMasterEquipmentData(
          dispatchData,
          statePage.currentPage,
          statePage.totalEntries
        );
      } else if (stateModal.modalStatus === "put") {
        putMasterEquipmentData(stateData.dataEdit);
        getMasterEquipmentData(
          dispatchData,
          statePage.currentPage,
          statePage.totalEntries
        );
      }
      modalReset(dispatchModal);
      pageReset(dispatchPage);
    }
  }, [stateModal.modalSubmit]);

  //   const handleEntries = (index) => {
  //     setShowEntries(dispatch);
  //     setEntries(dispatch, index);
  //   };

  const handleCheckedData = (position) => {
    console.log(stateData.dataGet[position]);
    setCheckedData(
      dispatchPage,
      statePage.checkedData.map((data, index) =>
        index === position ? !data : data
      )
    );
  };

  const handleDeleteData = () => {
    statePage.checkedData.map((data, index) => {
      if (data === true) {
        deleteMasterEquipmentData(stateData.dataGet[index].equipmentId);
      }
    });
    getMasterEquipmentData(
      dispatchData,
      statePage.currentPage,
      statePage.totalEntries
    );
  };

  const handleSubmitData = (data) => {
    handleModal(true, "post", "Are you sure you want to submit new equipment?");
    setDataAddCustomer(dispatchData, data);
  };

  const handleEditData = (data) => {
    handleModal(true, "put", "Are you sure you want to change the equipment?");
    setDataEditCustomer(dispatchData, data);
  };

  const handleCloseEditData = () => {
    setDataEditCustomer(dispatchData, null);
    setShowEditCustomer(dispatchPage, false);
  };

  const handleModal = (modalShow, modalStatus, modalText) => {
    setShowModal(dispatchModal, modalShow);
    setModalStatus(dispatchModal, modalStatus);
    setModalText(dispatchModal, modalText);
  };

  const handleReset = () => {
    pageReset(dispatchPage);
    filterReset(dispatchData);
  };

  const renderForm = (data) => {
    return (
      <div className="add-customer">
        <Formik
          initialValues={
            data && Object.keys(data).length > 0 ? data : initialFormState
          }
          validate={validate}
          onSubmit={
            data && Object.keys(data).length > 0
              ? handleEditData
              : handleSubmitData
          }
        >
          <Form>
            <div className="form">
              {data && Object.keys(data).length > 0 && (
                <div
                  className="edit-customer-button"
                  onClick={() => setCanDataEditCustomer(dispatchPage)}
                >
                  Edit
                </div>
              )}
              <div className="row">
                <div className="form-input">
                  <div className="label">{ADD_EQUIPMENT_FORM.MODEL_NUMBER}</div>
                  <Field
                    className="input"
                    placeholder="Input Model Number..."
                    type="text"
                    name="modelNumber"
                    disabled={
                      statePage.canDataEditCustomer
                        ? false
                        : data && Object.keys(data).length > 0
                        ? true
                        : false
                    }
                  />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_EQUIPMENT_FORM.UNIT_MODEL}</div>
                  <Field
                    className="input"
                    placeholder="Input Unit Model..."
                    type="text"
                    name="unitModel"
                  />
                  <div className="error-message">
                    <ErrorMessage name="unitModel" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.SERIAL_NUMBER}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Serial Number..."
                    type="text"
                    name="serialNumber"
                  />
                  <div className="error-message">
                    <ErrorMessage name="serialNumber" />
                  </div>
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.MATERIAL_NUMBER}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Material Number..."
                    type="text"
                    name="materialNumber"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.MATERIAL_GROUP}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Material Group..."
                    type="text"
                    name="materialGroup"
                  />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.EQUIPMENT_NUMBER}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Equipment Number..."
                    type="text"
                    name="equipmentNumber"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.EQUIPMENT_CATEGORY}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Euipment Category..."
                    type="text"
                    name="equipmentCategory"
                  />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_EQUIPMENT_FORM.UNIT_CODE}</div>
                  <Field
                    className="input"
                    placeholder="Input Unit Code..."
                    type="text"
                    name="unitCode"
                  />
                  <div className="error-message">
                    <ErrorMessage name="unitCode" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.UNIT_CODE_DESC}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Unit Code Description..."
                    type="text"
                    name="unitCodeDesc"
                  />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.OPERATION_STATUS}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Operation Status..."
                    type="number"
                    name="operationStatus"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.UNIT_DESCRIPTION}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Unit Description..."
                    type="text"
                    name="unitDescription"
                  />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.CUSTOMER_CODE}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Customer Code..."
                    type="text"
                    name="customerCode"
                  />
                  <div className="error-message">
                    <ErrorMessage name="customerCode" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.CUSTOMER_GROUP}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Customer Group..."
                    type="text"
                    name="customerGroup"
                  />
                  <div className="error-message">
                    <ErrorMessage name="customerGroup" />
                  </div>
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.CUSTOMER_NAME}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Customer Name..."
                    type="text"
                    name="customerName"
                  />
                  <div className="error-message">
                    <ErrorMessage name="customerName" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.CUSTOMER_GROUP_NAME}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Customer Group Name..."
                    type="text"
                    name="customerGroupName"
                  />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_EQUIPMENT_FORM.PLANT_CODE}</div>
                  <Field
                    className="input"
                    placeholder="Input Plant Code..."
                    type="text"
                    name="plantCode"
                  />
                  <div className="error-message">
                    <ErrorMessage name="plantCode" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">{ADD_EQUIPMENT_FORM.PLANT_DESC}</div>
                  <Field
                    className="input"
                    placeholder="Input Plant Description..."
                    type="text"
                    name="plantDesc"
                  />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.WORK_CENTER_CODE}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Work Center Code..."
                    type="text"
                    name="workCenterCode"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.WORK_CENTER_DESC}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Work Center Description..."
                    type="text"
                    name="workCenterDesc"
                  />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_EQUIPMENT_FORM.BRAND_CODE}</div>
                  <Field
                    className="input"
                    placeholder="Input Brand Code..."
                    type="text"
                    name="brandCode"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">{ADD_EQUIPMENT_FORM.ENGINE_MODEL}</div>
                  <Field
                    className="input"
                    placeholder="Input Engine Model..."
                    type="text"
                    name="engineModel"
                  />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.ENGINE_SERIAL_NUMBER}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Engine Serial Number..."
                    type="text"
                    name="engineSerialNumber"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">{ADD_EQUIPMENT_FORM.INDUSTRY}</div>
                  <Field
                    className="input"
                    placeholder="Input Industry..."
                    type="text"
                    name="industry"
                  />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_EQUIPMENT_FORM.ABC_IND}</div>
                  <Field
                    className="input"
                    placeholder="Input ABC Industry..."
                    type="text"
                    name="abcInd"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">{ADD_EQUIPMENT_FORM.OBJECT_TYPE}</div>
                  <Field
                    className="input"
                    placeholder="Input Object Type..."
                    type="text"
                    name="objectType"
                  />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.MASTER_WARRANTY}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Master Warranty..."
                    type="text"
                    name="masterWarranty"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.WARRANTY_START_DATE}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Warranty Start Date..."
                    type="text"
                    name="warrantyStartDate"
                    disabled
                  />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.WARRANTY_END_DATE}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Master Warranty..."
                    type="text"
                    name="warrantyEndDate"
                    disabled
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.WARRANTY_TYPE}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Warranty Type..."
                    type="text"
                    name="warratyType"
                  />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.START_TRANSMITTED}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Master Warranty..."
                    type="text"
                    name="startTransmitted"
                    disabled
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.LAST_TRANSMITTED}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Last Transmitted..."
                    type="text"
                    name="lastTransmitted"
                    disabled
                  />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.LAST_OPERATION_DATE}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Last Operation Date..."
                    type="text"
                    name="lastOperationDate"
                    disabled
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.TRANSMITTED_LATITUDE}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Transmitted Latitude..."
                    type="text"
                    name="transmittedLatitude"
                  />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.TRANSMITTED_LONGITUDE}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Transmitted Longitude..."
                    type="text"
                    name="transmittedLongitude"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.TRANSMITTED_PLANT_CODE}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Transmitted Plant Code..."
                    type="text"
                    name="transmittedPlantCode"
                  />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.TRANSMITTED_PLANT_KABUPATEN}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Transmitted Plant Kabupaten..."
                    type="text"
                    name="transmittedPlantKabupaten"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.TRANSMITTED_PLANT_ZIP_CODE}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Transmitted Plant ZIP Code..."
                    type="text"
                    name="transmittedPlantZIPCode"
                  />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.FUEL_CONSUMPTION_PER_DAY}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Fuel Consumption Per Day..."
                    type="number"
                    name="fuelConsumptionPerDay"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.SMR_VALUE_PER_DAY_IN_MINUTES}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input SMR Value Per Day In Minutes..."
                    type="number"
                    name="smrValuePerDayInMinutes"
                  />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.SMR_TOTAL_IN_MINUTES}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input SMR Total In Minutes..."
                    type="number"
                    name="smrTotalInMinutes"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.SMR_LAST_VALUE_DATE}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input SMR Last Value Date..."
                    type="text"
                    name="smrlAstValueDate"
                    disabled
                  />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_EQUIPMENT_FORM.UOM}</div>
                  <Field
                    className="input"
                    placeholder="Input UOM..."
                    type="text"
                    name="uom"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input form-input-checkbox">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.IS_INTER_BRANCH_STATUS}
                  </div>
                  <div className="input-checkbox">
                    <Field type="checkbox" name="isInterBranchStatus" />
                  </div>
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.INTER_BRANCH_DATE}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Inter Branch Date..."
                    type="text"
                    name="interBranchDate"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input form-input-checkbox">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.IS_PENDING_COMMISION}
                  </div>
                  <div className="input-checkbox">
                    <Field type="checkbox" name="isPendingCommisioning" />
                  </div>
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.COMMISIONING_STATUS}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Commisioning Status..."
                    type="number"
                    name="commisioningStatus"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.CAUTION_COUNTER}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Caution Counter..."
                    type="text"
                    name="cautionCounter"
                  />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_EQUIPMENT_FORM.LAST_DO_DATE}</div>
                  <Field
                    className="input"
                    placeholder="Input Last Do Date..."
                    type="text"
                    name="lastDODate"
                    disabled
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.LAST_MATERIAL_DATE}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Last Material Number..."
                    type="text"
                    name="lastMaterialNumber"
                  />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.DERLIVERY_DATE}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Delivery Date..."
                    type="text"
                    name="deliveryDate"
                    disabled
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.LAST_LOCATION_DATE}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Last Location Date..."
                    type="text"
                    name="lastLocationDate"
                    disabled
                  />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.TRANSMIT_STATUS}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Transmit Status..."
                    type="text"
                    name="transmitStatus"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.MEASURING_POINT}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Measuring Point..."
                    type="text"
                    name="measuringPoint"
                  />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.MEASURING_DOCUMENT}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Measuring Document..."
                    type="text"
                    name="measuringDocument"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.MANUFACTURE_PART_NUMBER}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Manufacture Part Number..."
                    type="text"
                    name="manufacturePartNumber"
                  />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.MANUFACTURE_SERIAL_NUMBER}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Manufacture Serial Number..."
                    type="text"
                    name="manufactureSerialNumber"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.SYSTEM_STATUS}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input System Status..."
                    type="text"
                    name="systemStatus"
                  />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_EQUIPMENT_FORM.UNIT_STATUS}</div>
                  <Field
                    className="input"
                    placeholder="Input Unit Status..."
                    type="text"
                    name="unitStatus"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.KOMTRAX_METER_READING}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Komtrax Meter Reading..."
                    type="text"
                    name="komtraxMeterReading"
                  />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.KOMTRAX_METER_READING_DATE}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Komtrax Meter Reading Date..."
                    type="number"
                    name="komtraxMeterReadingDate"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.CONTRACT_PACKAGE}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Contract Package..."
                    type="text"
                    name="contractPackage"
                  />
                </div>
                <div className="form-input form-input-checkbox">
                  <div className="label">{ADD_EQUIPMENT_FORM.IS_AVAILABLE}</div>
                  <div className="input-checkbox">
                    <Field type="checkbox" name="isAvailable" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-input form-input-checkbox">
                  <div className="label">{ADD_EQUIPMENT_FORM.IS_ACTIVE}</div>
                  <div className="input-checkbox">
                    <Field type="checkbox" name="isActive" />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-button">
              <div
                className="button cancel"
                onClick={() =>
                  data && Object.keys(data).length > 0
                    ? handleCloseEditData()
                    : setShowAddCustomer(dispatchPage)
                }
              >
                Cancel
              </div>
              <button className="button submit" type="submit">
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    );
  };

  const renderFilter = () => {
    return (
      <div className="table-filter">
        <div className="table-filter-left">
          <div className="table-filter-item">
            <div className="table-filter-item-title">Unit Code</div>
            <div
              className="dropdown-icon"
              onClick={() => setShowUnitCodeFilter(dispatchPage)}
            >
              <img
                src={DropdownIconWhite}
                alt="dropdown"
                className="dropdown-icon-item"
              />
            </div>
            {statePage.showUnitCodeFilter && (
              <div className="filter-input">
                <input
                  className="input"
                  type="text"
                  placeholder="type here..."
                  value={stateData.unitCodeFilter}
                  onChange={(event) =>
                    setUnitCodeFilter(dispatchData, event.target.value)
                  }
                />
              </div>
            )}
          </div>
          <div className="table-filter-item">
            <div className="table-filter-item-title">Unit Model</div>
            <div
              className="dropdown-icon"
              onClick={() => setShowUnitModelFilter(dispatchPage)}
            >
              <img
                src={DropdownIconWhite}
                alt="dropdown"
                className="dropdown-icon-item"
              />
            </div>
            {statePage.showUnitModelFilter && (
              <div className="filter-input">
                <input
                  className="input"
                  type="text"
                  placeholder="type here..."
                  value={stateData.unitModelFilter}
                  onChange={(event) =>
                    setUnitModelFilter(dispatchData, event.target.value)
                  }
                />
              </div>
            )}
          </div>
          <div className="table-filter-item">
            <div className="table-filter-item-title">Serial Number</div>
            <div
              className="dropdown-icon"
              onClick={() => setShowSerialNumberFilter(dispatchPage)}
            >
              <img
                src={DropdownIconWhite}
                alt="dropdown"
                className="dropdown-icon-item"
              />
            </div>
            {statePage.showSerialNumberFilter && (
              <div className="filter-input">
                <input
                  className="input"
                  type="text"
                  placeholder="type here..."
                  value={stateData.serialNumberFilter}
                  onChange={(event) =>
                    setSerialNumberFilter(dispatchData, event.target.value)
                  }
                />
              </div>
            )}
          </div>
          <div className="table-filter-item">
            <div className="table-filter-item-title">Plant Code</div>
            <div
              className="dropdown-icon"
              onClick={() => setShowPlantCodeFilter(dispatchPage)}
            >
              <img
                src={DropdownIconWhite}
                alt="dropdown"
                className="dropdown-icon-item"
              />
            </div>
            {statePage.showPlantCodeFilter && (
              <div className="filter-input">
                <input
                  className="input"
                  type="text"
                  placeholder="type here..."
                  value={stateData.plantCodeFilter}
                  onChange={(event) =>
                    setPlantCodeFilter(dispatchData, event.target.value)
                  }
                />
              </div>
            )}
          </div>
          <div className="table-filter-item">
            <div className="table-filter-item-title">Customer Name</div>
            <div
              className="dropdown-icon"
              onClick={() => setShowCustomerNameFilter(dispatchPage)}
            >
              <img
                src={DropdownIconWhite}
                alt="dropdown"
                className="dropdown-icon-item"
              />
            </div>
            {statePage.showCustomerNameFilter && (
              <div className="filter-input">
                <input
                  className="input"
                  type="text"
                  placeholder="type here..."
                  value={stateData.customerNameFilter}
                  onChange={(event) =>
                    setCustomerNameFilter(dispatchData, event.target.value)
                  }
                />
              </div>
            )}
          </div>
        </div>
        <div className="table-filter-right">
          {statePage.showDeleteFilter && (
            <div
              className="delete-customer"
              onClick={() =>
                handleModal(
                  true,
                  "delete",
                  "Are you sure you want to delete data?"
                )
              }
            >
              <img className="icon-trash" src={IconTrash} alt="trash" />
              <div className="text">Delete Customer</div>
            </div>
          )}
          <div className="table-filter-reset" onClick={() => handleReset()}>
            reset
          </div>
        </div>
      </div>
    );
  };

  const renderTable = (data, position) => {
    return (
      <div className="table-list">
        <div className="checkbox">
          <input
            type="checkbox"
            className="checkbox-item"
            checked={
              statePage.checkedData.length > 0 &&
              statePage.checkedData[position]
            }
            onChange={() => handleCheckedData(position)}
          />
        </div>
        <div
          className="item unit-code"
          onClick={() => setDataEditCustomer(dispatchData, data)}
        >
          {data.unitCode}
        </div>
        <div
          className="item unit-model"
          onClick={() => setDataEditCustomer(dispatchData, data)}
        >
          {data.unitModel}
        </div>
        <div
          className="item serial-number"
          onClick={() => setDataEditCustomer(dispatchData, data)}
        >
          {data.serialNumber}
        </div>
        <div
          className="item plant-code"
          onClick={() => setDataEditCustomer(dispatchData, data)}
        >
          {data.plantCode}
        </div>
        <div
          className="item customer-name"
          onClick={() => setDataEditCustomer(dispatchData, data)}
        >
          {data.customerName}
        </div>
      </div>
    );
  };

  //   const renderPagination = () => {
  //     return (
  //       <div className="pagination">
  //         <div className="pagination-filter">
  //           <div>Show</div>
  //           <div className="filter-entries">
  //             {state.showEntries ? (
  //               <div className="multiple-entries">
  //                 {state.totalEntries === 4 ? (
  //                   <div
  //                     className="entries entries-top entries-active"
  //                     onClick={() => setShowEntries(dispatch)}
  //                   >
  //                     4
  //                   </div>
  //                 ) : (
  //                   <div
  //                     className="entries entries-top"
  //                     onClick={() => handleEntries(4)}
  //                   >
  //                     4
  //                   </div>
  //                 )}
  //                 {Array.from(Array(5), (_e, index) => {
  //                   if (index + 5 === state.totalEntries) {
  //                     return (
  //                       <div
  //                         key={index + 5}
  //                         className="entries entries-active"
  //                         onClick={() => setShowEntries(dispatch)}
  //                       >
  //                         {index + 5}
  //                       </div>
  //                     );
  //                   } else {
  //                     return (
  //                       <div
  //                         key={index + 5}
  //                         className="entries"
  //                         onClick={() => handleEntries(index + 5)}
  //                       >
  //                         {index + 5}
  //                       </div>
  //                     );
  //                   }
  //                 })}
  //                 {state.totalEntries === 10 ? (
  //                   <div
  //                     className="entries entries-bottom entries-active"
  //                     onClick={() => setShowEntries(dispatch)}
  //                   >
  //                     10
  //                   </div>
  //                 ) : (
  //                   <div
  //                     className="entries entries-bottom"
  //                     onClick={() => handleEntries(10)}
  //                   >
  //                     10
  //                   </div>
  //                 )}
  //               </div>
  //             ) : (
  //               <div className="entries">{state.totalEntries}</div>
  //             )}
  //             <div
  //               className={
  //                 state.showEntries
  //                   ? "dropdown-arrow dropdown-show-entries"
  //                   : "dropdown-arrow"
  //               }
  //               onClick={() => setShowEntries(dispatch)}
  //             >
  //               <img
  //                 src={KeyboardArrowDown}
  //                 alt="dropdown-arrow"
  //                 className="arrow-item"
  //               />
  //             </div>
  //           </div>
  //           <div>Entries</div>
  //         </div>
  //         <div className="page">
  //           {/* << */}
  //           {state.currentPage !== 1 && (
  //             <div
  //               className="page-item page-item-left"
  //               onClick={() => setCurrentPage(dispatch, state.currentPage - 1)}
  //             >
  //               {"<<"}
  //             </div>
  //           )}
  //           {/* currentPage - 1 */}
  //           {state.currentPage !== 1 && (
  //             <div className="page-item">{state.currentPage - 1}</div>
  //           )}
  //           {/* currentPage */}
  //           {state.currentPage === 1 ? (
  //             <div className="page-item page-active page-item-left">
  //               {state.currentPage}
  //             </div>
  //           ) : state.currentPage === state.totalPage ? (
  //             <div className="page-item page-active page-item-right">
  //               {state.currentPage}
  //             </div>
  //           ) : (
  //             <div className="page-item page-active">{state.currentPage}</div>
  //           )}
  //           {/* currentPage + 1 */}
  //           {state.currentPage !== state.totalPage && (
  //             <div className="page-item">{state.currentPage + 1}</div>
  //           )}
  //           {/* >> */}
  //           {state.currentPage !== state.totalPage && (
  //             <div
  //               className="page-item page-item-right"
  //               onClick={() => setCurrentPage(dispatch, state.currentPage + 1)}
  //             >
  //               {">>"}
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //     );
  //   };

  return (
    <div className="background-equipment">
      {stateModal.showModal && (
        <Modal
          setShowModal={setShowModal}
          setModalSubmit={setModalSubmit}
          modalStatus={stateModal.modalStatus}
          modalText={stateModal.modalText}
          dispatch={dispatchModal}
        />
      )}
      <div className="body">
        <div className="body-header">
          <div className="home">Home</div>
          <div className="arrow-right">{">"}</div>
          <div className="current-component">
            {props.sideMenu.currentComponent}
          </div>
        </div>
        {statePage.showAddCustomer ? (
          renderForm()
        ) : statePage.showEditCustomer ? (
          renderForm(stateData.dataEdit)
        ) : (
          <div>
            <div
              className="add-customer-button"
              onClick={() => setShowAddCustomer(dispatchPage)}
            >
              + Add Customer
            </div>
            <div>
              {renderFilter()}
              <div className="table-header">
                <div className="unit-code">Unit Code</div>
                <div className="unit-model">Unit Model</div>
                <div className="serial-number">Serial Number</div>
                <div className="plant-code">Plant Code</div>
                <div className="customer-name">Customer Name</div>
              </div>
              <div className="table-body">
                {stateData.dataGet?.map((data, index) => {
                  return <div key={index}>{renderTable(data, index)}</div>;
                })}
              </div>
              {/* {renderPagination()} */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
