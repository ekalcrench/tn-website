import React, { useEffect, useLayoutEffect, useReducer } from "react";
import "./TnLocation.scss";
import { DropdownIconWhite, IconTrash } from "../../assets/icons";
import { ADD_TN_LOCATION_FORM } from "../../common/constants";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialFormState, validate } from "./TnLocation.form";
import { Modal } from "../../helper/modal";
import {
  initialStatePage,
  TnLocationPageReducer,
  initialStateData,
  TnLocationDataReducer,
  initialStateModal,
  TnLocationModalReducer,
} from "./TnLocation.reducer";
import {
  getTnLocationData,
  postTnLocationData,
  deleteTnLocationData,
  putTnLocationData,
  getFilterTnLocationData,
  setShowEntries,
  setEntries,
  setCurrentPage,
  setCheckedData,
  setShowDeleteFilter,
  setShowAddLocation,
  setDataAddLocation,
  setShowEditLocation,
  setDataEditLocation,
  setCanDataEditLocation,
  setShowPlantCodeFilter,
  setShowPlantNameFilter,
  setPlantCodeFilter,
  setPlantNameFilter,
  pageReset,
  setShowModal,
  setModalStatus,
  setModalText,
  setModalSubmit,
  modalReset,
  filterReset,
} from "./TnLocation.action";

export default function TnLocation(props) {
  const [statePage, dispatchPage] = useReducer(
    TnLocationPageReducer,
    initialStatePage
  );

  const [stateData, dispatchData] = useReducer(
    TnLocationDataReducer,
    initialStateData
  );

  const [stateModal, dispatchModal] = useReducer(
    TnLocationModalReducer,
    initialStateModal
  );

  useLayoutEffect(() => {
    getTnLocationData(
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
      let data1 = "";
      let data2 = "";
      if (stateData.plantCodeFilter.length > 0) {
        data1 = "PlantCode=" + stateData.plantCodeFilter + "&";
      }
      if (stateData.plantNameFilter.length > 0) {
        data2 = "PlantName=" + stateData.plantNameFilter;
      }
      getFilterTnLocationData(dispatchData, data1, data2);
    }
  }, [stateData.plantCodeFilter, stateData.plantNameFilter]);

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
      setShowEditLocation(dispatchPage, true);
    }
  }, [stateData.dataEdit]);

  useEffect(() => {
    if (stateModal.modalSubmit) {
      if (stateModal.modalStatus === "delete") {
        handleDeleteData();
      } else if (stateModal.modalStatus === "post") {
        postTnLocationData(stateData.dataAdd);
        getTnLocationData(
          dispatchData,
          statePage.currentPage,
          statePage.totalEntries
        );
      } else if (stateModal.modalStatus === "put") {
        putTnLocationData(stateData.dataEdit);
        getTnLocationData(
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
        deleteTnLocationData(stateData.dataGet[index].equipmentId);
      }
    });
    getTnLocationData(
      dispatchData,
      statePage.currentPage,
      statePage.totalEntries
    );
  };

  const handleSubmitData = (data) => {
    handleModal(true, "post", "Are you sure you want to submit new equipment?");
    setDataAddLocation(dispatchData, data);
  };

  const handleEditData = (data) => {
    handleModal(true, "put", "Are you sure you want to change the equipment?");
    setDataEditLocation(dispatchData, data);
  };

  const handleCloseEditData = () => {
    setDataEditLocation(dispatchData, null);
    setShowEditLocation(dispatchPage, false);
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
                  onClick={() => setCanDataEditLocation(dispatchPage)}
                >
                  Edit
                </div>
              )}
              <div className="row">
                <div className="form-input">
                  <div className="label">{ADD_TN_LOCATION_FORM.PLANT_CODE}</div>
                  <Field
                    className="input"
                    placeholder="Input Model Number..."
                    type="text"
                    name="plantCode"
                  />
                  <div className="error-message">
                    <ErrorMessage name="unitModel" />
                  </div>
                </div>
                <div className="form-input">
                  <div className="label">{ADD_TN_LOCATION_FORM.PLANT_NAME}</div>
                  <Field
                    className="input"
                    placeholder="Input Unit Model..."
                    type="text"
                    name="plantName"
                  />
                  <div className="error-message">
                    <ErrorMessage name="unitModel" />
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
                    : setShowAddLocation(dispatchPage)
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
            <div className="table-filter-item-title">Plant Name</div>
            <div
              className="dropdown-icon"
              onClick={() => setShowPlantNameFilter(dispatchPage)}
            >
              <img
                src={DropdownIconWhite}
                alt="dropdown"
                className="dropdown-icon-item"
              />
            </div>
            {statePage.showPlantNameFilter && (
              <div className="filter-input">
                <input
                  className="input"
                  type="text"
                  placeholder="type here..."
                  value={stateData.plantNameFilter}
                  onChange={(event) =>
                    setPlantNameFilter(dispatchData, event.target.value)
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
          onClick={() => setDataEditLocation(dispatchData, data)}
        >
          {data.unitCode}
        </div>
        <div
          className="item unit-model"
          onClick={() => setDataEditLocation(dispatchData, data)}
        >
          {data.unitModel}
        </div>
        <div
          className="item serial-number"
          onClick={() => setDataEditLocation(dispatchData, data)}
        >
          {data.serialNumber}
        </div>
        <div
          className="item plant-code"
          onClick={() => setDataEditLocation(dispatchData, data)}
        >
          {data.plantCode}
        </div>
        <div
          className="item customer-name"
          onClick={() => setDataEditLocation(dispatchData, data)}
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
    <div className="background-tn-location">
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
        {statePage.showAddLocation ? (
          renderForm()
        ) : statePage.showEditLocation? (
          renderForm(stateData.dataEdit)
        ) : (
          <div>
            <div
              className="add-customer-button"
              onClick={() => setShowAddLocation(dispatchPage)}
            >
              + Add Customer
            </div>
            <div>
              {renderFilter()}
              <div className="table-header">
                <div className="unit-code">Unit Code</div>
                <div className="unit-model">Unit Model</div>
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
