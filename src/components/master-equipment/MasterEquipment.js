import React, { useEffect, useLayoutEffect, useReducer } from "react";
import "./MasterEquipment.scss";
import {
  DropdownIconWhite,
  ZoomIconWhite,
  KeyboardArrowDown,
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
  postMasterCustomerData,
  deleteMasterCustomerData,
  putMasterCustomerData,
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
  setShowCustomerNameFilter,
  setCustomerNameFilter,
  setShowCityFilter,
  setCityFilter,
  setSearchAllFilter,
  reset,
  setShowModal,
  setModalStatus,
  setModalText,
  setModalSubmit,
  modalReset,
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

  //   useEffect(() => {
  //     if (props.masterCustomerData.data !== null) {
  //       if (state.customerNameFilter.length > 0 && state.cityFilter.length > 0) {
  //         const data = [state.cityFilter, state.customerNameFilter];
  //         const status = ["City", "CustomerName"];
  //         console.log(data, status);
  //         props.getFilterMasterCustomerData(data, status);
  //       } else if (state.customerNameFilter.length > 0) {
  //         console.log(state.customerNameFilter, "CustomerName");
  //         props.getFilterMasterCustomerData(
  //           state.customerNameFilter,
  //           "CustomerName"
  //         );
  //       } else if (state.cityFilter.length > 0) {
  //         console.log(state.cityFilter, "City");
  //         props.getFilterMasterCustomerData(state.cityFilter, "City");
  //       }
  //     }
  //   }, [state.customerNameFilter, state.cityFilter]);

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
        postMasterCustomerData(stateData.dataAdd);
        getMasterEquipmentData(
          dispatchData,
          statePage.currentPage,
          statePage.totalEntries
        );
      } else if (stateModal.modalStatus === "put") {
        putMasterCustomerData(stateData.dataEdit);
        getMasterEquipmentData(
          dispatchData,
          statePage.currentPage,
          statePage.totalEntries
        );
      }
      modalReset(dispatchModal);
      reset(dispatchPage);
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
        deleteMasterCustomerData(props.masterCustomerData.data[index].custCode);
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
                    name="ModelNumber"
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
                    name="UnitModel"
                  />
                  <ErrorMessage name="UnitModel" />
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
                    name="SerialNumber"
                  />
                  <ErrorMessage name="SerialNumber" />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.MATERIAL_NUMBER}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Material Number..."
                    type="text"
                    name="MaterialNumber"
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
                    name="MaterialGroup"
                  />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.EQUIPMENT_CATEGORY}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Euipment Category..."
                    type="text"
                    name="EquipmentCategory"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">{ADD_EQUIPMENT_FORM.UNIT_CODE}</div>
                  <Field
                    className="input"
                    placeholder="Input Unit Code..."
                    type="text"
                    name="UnitCode"
                  />
                  <ErrorMessage name="UnitCode" />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.UNIT_CODE_DESC}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Unit Code Description..."
                    type="text"
                    name="UnitCodeDesc"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.OPERATION_STATUS}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Operation Status..."
                    type="text"
                    name="OperationStatus"
                  />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.UNIT_DESCRIPTION}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Unit Description..."
                    type="text"
                    name="UnitDescription"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.CUSTOMER_CODE}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Customer Code..."
                    type="text"
                    name="CustomerCode"
                  />
                  <ErrorMessage name="CustomerCode" />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.CUSTOMER_GROUP}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Customer Group..."
                    type="text"
                    name="CustomerGroup"
                  />
                  <ErrorMessage name="CustomerGroup" />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.CUSTOMER_NAME}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Customer Name..."
                    type="text"
                    name="CustomerName"
                  />
                  <ErrorMessage name="CustomerName" />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.CUSTOMER_GROUP_NAME}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Customer Group Name..."
                    type="text"
                    name="CustomerGroupName"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">{ADD_EQUIPMENT_FORM.PLANT_CODE}</div>
                  <Field
                    className="input"
                    placeholder="Input Plant Code..."
                    type="text"
                    name="PlantCode"
                  />
                  <ErrorMessage name="PlantCode" />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_EQUIPMENT_FORM.PLANT_DESC}</div>
                  <Field
                    className="input"
                    placeholder="Input Plant Description..."
                    type="text"
                    name="PlantDescription"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.WORK_CENTER_CODE}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Work Center Code..."
                    type="text"
                    name="WorkCenterCode"
                  />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.WORK_CENTER_DESC}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Work Center Description..."
                    type="text"
                    name="WorkCenterDescription"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">{ADD_EQUIPMENT_FORM.BRAND_CODE}</div>
                  <Field
                    className="input"
                    placeholder="Input Brand Code..."
                    type="text"
                    name="BrandCode"
                  />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_EQUIPMENT_FORM.ENGINE_MODEL}</div>
                  <Field
                    className="input"
                    placeholder="Input Engine Model..."
                    type="text"
                    name="EngineModel"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.ENGINE_SERIAL_NUMBER}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Engine Serial Number..."
                    type="text"
                    name="EngineSerialNumber"
                  />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_EQUIPMENT_FORM.INDUSTRY}</div>
                  <Field
                    className="input"
                    placeholder="Input Industry..."
                    type="text"
                    name="Industry"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">{ADD_EQUIPMENT_FORM.ABC_IND}</div>
                  <Field
                    className="input"
                    placeholder="Input ABC Industry..."
                    type="text"
                    name="ABCIndustry"
                  />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_EQUIPMENT_FORM.OBJECT_TYPE}</div>
                  <Field
                    className="input"
                    placeholder="Input Object Type..."
                    type="text"
                    name="ObjectType"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_EQUIPMENT_FORM.MASTER_WARRANTY}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Master Warranty..."
                    type="text"
                    name="MasterWarranty"
                  />
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

  //   const renderFilter = () => {
  //     return (
  //       <div className="table-filter">
  //         <div className="table-filter-item">
  //           <div className="table-filter-item-title">Customer Name</div>
  //           <div
  //             className="dropdown-icon"
  //             onClick={() => setShowCustomerNameFilter(dispatch)}
  //           >
  //             <img
  //               src={DropdownIconWhite}
  //               alt="dropdown"
  //               className="dropdown-icon-item"
  //             />
  //           </div>
  //           {state.showCustomerNameFilter && (
  //             <div className="filter-input">
  //               <input
  //                 className="input"
  //                 type="text"
  //                 placeholder="type here..."
  //                 value={state.customerNameFilter}
  //                 onChange={(event) =>
  //                   setCustomerNameFilter(dispatch, event.target.value)
  //                 }
  //               />
  //             </div>
  //           )}
  //         </div>
  //         <div className="table-filter-item">
  //           <div className="table-filter-item-title">City</div>
  //           <div
  //             className="dropdown-icon"
  //             onClick={() => setShowCityFilter(dispatch)}
  //           >
  //             <img
  //               src={DropdownIconWhite}
  //               alt="dropdown"
  //               className="dropdown-icon-item"
  //             />
  //           </div>
  //           {state.showCityFilter && (
  //             <div className="filter-input">
  //               <input
  //                 className="input"
  //                 type="text"
  //                 placeholder="type here..."
  //                 value={state.cityFilter}
  //                 onChange={(event) =>
  //                   setCityFilter(dispatch, event.target.value)
  //                 }
  //               />
  //             </div>
  //           )}
  //         </div>
  //         {state.showDeleteFilter && (
  //           <div
  //             className="delete-customer"
  //             onClick={() =>
  //               handleModal(
  //                 true,
  //                 "delete",
  //                 "Are you sure you want to delete data?"
  //               )
  //             }
  //           >
  //             <img className="icon-trash" src={IconTrash} alt="trash" />
  //             <div className="text">Delete Customer</div>
  //           </div>
  //         )}
  //         <div
  //           className={
  //             state.showDeleteFilter
  //               ? "table-filter-search"
  //               : "table-filter-search table-filter-search-margin"
  //           }
  //         >
  //           <div className="filter-input">
  //             <input
  //               className="input"
  //               type="text"
  //               placeholder="Search"
  //               value={state.searchAllFilter}
  //               onChange={(event) =>
  //                 setSearchAllFilter(dispatch, event.target.value)
  //               }
  //             />
  //           </div>
  //           <div className="search-icon">
  //             <img
  //               src={ZoomIconWhite}
  //               alt="search"
  //               className="search-icon-item"
  //             />
  //           </div>
  //         </div>
  //         <div className="table-filter-reset" onClick={() => reset(dispatch)}>
  //           reset
  //         </div>
  //       </div>
  //     );
  //   };

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
          {data.UnitCode}
        </div>
        <div
          className="item unit-model"
          onClick={() => setDataEditCustomer(dispatchData, data)}
        >
          {data.UnitModel}
        </div>
        <div
          className="item serial-number"
          onClick={() => setDataEditCustomer(dispatchData, data)}
        >
          {data.SerialNumber}
        </div>
        <div
          className="item plant-code"
          onClick={() => setDataEditCustomer(dispatchData, data)}
        >
          {data.PlantCode}
        </div>
        <div
          className="item customer-name"
          onClick={() => setDataEditCustomer(dispatchData, data)}
        >
          {data.CustomerName}
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
              {/* {renderFilter()} */}
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
