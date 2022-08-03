import React, { useEffect, useLayoutEffect, useReducer, useState } from "react";
import "./MasterCustomer.scss";
import {
  DropdownIconWhite,
  ZoomIconWhite,
  KeyboardArrowDown,
  IconTrash,
} from "../../assets/icons";
import { ADD_CUSTOMER_FORM } from "../../common/constants";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialFormState, validate } from "./MasterCustomer.form";
import { Modal } from "../../helper/modal";
import {
  initialStatePage,
  MasterCustomerPageReducer,
} from "./MasterCustomer.reducer";
import {
  postMasterCustomerData,
  deleteMasterCustomerData,
  putMasterCustomerData,
  setShowEntries,
  setEntries,
  setCurrentPage,
  setTotalPages,
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
} from "./MasterCustomer.action";

export default function MasterCustomer(props) {
  const [state, dispatch] = useReducer(
    MasterCustomerPageReducer,
    initialStatePage
  );

  useLayoutEffect(() => {
    props.getMasterCustomerData();
  }, []);

  useEffect(() => {
    if (props.masterCustomerData.data !== null) {
      const totalPages = Math.ceil(
        props.masterCustomerData.data.length / state.totalEntries
      );
      setTotalPages(dispatch, totalPages);
      if (state.checkedData.length <= 0) {
        setCheckedData(
          dispatch,
          new Array(props.masterCustomerData.data.length).fill(false)
        );
      }
    }
  }, [props.masterCustomerData.data, state.totalEntries]);

  useEffect(() => {
    if (props.masterCustomerData.data !== null) {
      props.getFilterMasterCustomerData(
        state.customerNameFilter,
        "CustomerName"
      );
    }
  }, [state.customerNameFilter]);

  useEffect(() => {
    if (props.masterCustomerData.data !== null) {
      props.getFilterMasterCustomerData(state.cityFilter, "City");
    }
  }, [state.cityFilter]);

  useEffect(() => {
    const filter = state.checkedData.filter((data) => data === true);
    if (filter.length > 0) {
      setShowDeleteFilter(dispatch, true);
    } else {
      setShowDeleteFilter(dispatch, false);
    }
  }, [state.checkedData]);

  useEffect(() => {
    console.log(state.dataEditCustomer);
    if (state.dataEditCustomer !== null) {
      setShowEditCustomer(dispatch, true);
    }
  }, [state.dataEditCustomer]);

  useEffect(() => {
    if (state.modalSubmit) {
      if (state.modalStatus === "delete") {
        handleDeleteData();
      } else if (state.modalStatus === "post") {
        postMasterCustomerData(state.dataAddCustomer);
        props.getMasterCustomerData();
      } else if (state.modalStatus === "put") {
        putMasterCustomerData(state.dataEditCustomer);
        props.getMasterCustomerData();
      }
      modalReset(dispatch);
      reset(dispatch);
    }
  }, [state.modalSubmit]);

  const handleEntries = (index) => {
    setShowEntries(dispatch);
    setEntries(dispatch, index);
  };

  const handleCheckedData = (position) => {
    setCheckedData(
      dispatch,
      state.checkedData.map((data, index) =>
        index === position ? !data : data
      )
    );
  };

  const handleDeleteData = () => {
    state.checkedData.map((data, index) => {
      if (data === true) {
        deleteMasterCustomerData(props.masterCustomerData.data[index].custCode);
      }
    });
    props.getMasterCustomerData();
  };

  const handleSubmitData = (data) => {
    handleModal(true, "post", "Are you sure you want to submit new customer?");
    setDataAddCustomer(dispatch, data);
  };

  const handleEditData = (data) => {
    handleModal(true, "put", "Are you sure you want to submit new customer?");
    setDataEditCustomer(dispatch, data);
  };

  const handleCloseEditData = () => {
    setDataEditCustomer(dispatch, null);
    setShowEditCustomer(dispatch, false);
  };

  const handleModal = (modalShow, modalStatus, modalText) => {
    setShowModal(dispatch, modalShow);
    setModalStatus(dispatch, modalStatus);
    setModalText(dispatch, modalText);
  };

  const renderAddCustomer = () => {
    return (
      <div className="add-customer">
        <Formik
          initialValues={initialFormState}
          validate={validate}
          onSubmit={handleSubmitData}
        >
          <Form>
            <div className="form">
              <div className="row">
                <div className="form-input">
                  <div className="label">{ADD_CUSTOMER_FORM.CUSTOMER_CODE}</div>
                  <Field
                    className="input"
                    placeholder="Input Customer Code..."
                    type="text"
                    name="custCode"
                  />
                  <ErrorMessage name="custCode" />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_CUSTOMER_FORM.CUSTOMER_NAME}</div>
                  <Field
                    className="input"
                    placeholder="Input Customer Name..."
                    type="text"
                    name="customerName"
                  />
                  <ErrorMessage name="customerName" />
                </div>
              </div>
              <div className="row">
                <div className="form-input form-input-address">
                  <div className="label">{ADD_CUSTOMER_FORM.ADDRESS}</div>
                  <Field
                    className="input"
                    placeholder="Input Address..."
                    type="text"
                    name="address"
                  />
                  <ErrorMessage name="address" />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_CUSTOMER_FORM.CITY}</div>
                  <Field
                    className="input"
                    placeholder="Input City"
                    type="text"
                    name="city"
                  />
                  <ErrorMessage name="city" />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_CUSTOMER_FORM.ZIP_CODE}</div>
                  <Field
                    className="input"
                    placeholder="Input Zip Code"
                    type="text"
                    name="zipCode"
                  />
                  <ErrorMessage name="zipCode" />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_CUSTOMER_FORM.COUNTRY}</div>
                  <Field
                    className="input"
                    placeholder="Input Country"
                    type="text"
                    name="country"
                  />
                  <ErrorMessage name="country" />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_CUSTOMER_FORM.CONTACT_PERSON_NAME}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Contact Person Name..."
                    type="text"
                    name="cpName"
                  />
                  <ErrorMessage name="cpName" />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_CUSTOMER_FORM.CONTACT_PERSON_EMAIL}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Contact Person Email..."
                    type="text"
                    name="cpEmail"
                  />
                  <ErrorMessage name="cpEmail" />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_CUSTOMER_FORM.PHONE_NUMBER}</div>
                  <Field
                    className="input"
                    placeholder="Input Phone Number..."
                    type="text"
                    name="phoneNumber"
                  />
                  <ErrorMessage name="phoneNumber" />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_CUSTOMER_FORM.FAX_NUMBER}</div>
                  <Field
                    className="input"
                    placeholder="Input Fax Number..."
                    type="text"
                    name="fax"
                  />
                  <ErrorMessage name="fax" />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">{ADD_CUSTOMER_FORM.REMARK}</div>
                  <Field
                    className="input"
                    placeholder="Input Remark"
                    type="text"
                    name="remark"
                  />
                  <ErrorMessage name="remark" />
                </div>
              </div>
            </div>
            <div className="form-button">
              <div
                className="button cancel"
                onClick={() => setShowAddCustomer(dispatch)}
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

  const renderEditCustomer = (data) => {
    return (
      <div className="add-customer">
        <Formik
          initialValues={data}
          validate={validate}
          onSubmit={handleEditData}
        >
          <Form>
            <div className="form">
              <div
                className="edit-customer-button"
                onClick={() => setCanDataEditCustomer(dispatch)}
              >
                Edit
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">{ADD_CUSTOMER_FORM.CUSTOMER_CODE}</div>
                  <Field
                    className="input"
                    placeholder="Input Customer Code..."
                    type="text"
                    name="custCode"
                    disabled="disabled"
                  />
                  <ErrorMessage name="custCode" />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_CUSTOMER_FORM.CUSTOMER_NAME}</div>
                  <Field
                    className="input"
                    placeholder="Input Customer Name..."
                    type="text"
                    name="customerName"
                  />
                  <ErrorMessage name="customerName" />
                </div>
              </div>
              <div className="row">
                <div className="form-input form-input-address">
                  <div className="label">{ADD_CUSTOMER_FORM.ADDRESS}</div>
                  <Field
                    className="input"
                    placeholder="Input Address..."
                    type="text"
                    name="address"
                  />
                  <ErrorMessage name="address" />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_CUSTOMER_FORM.CITY}</div>
                  <Field
                    className="input"
                    placeholder="Input City"
                    type="text"
                    name="city"
                  />
                  <ErrorMessage name="city" />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_CUSTOMER_FORM.ZIP_CODE}</div>
                  <Field
                    className="input"
                    placeholder="Input Zip Code"
                    type="text"
                    name="zipCode"
                  />
                  <ErrorMessage name="zipCode" />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_CUSTOMER_FORM.COUNTRY}</div>
                  <Field
                    className="input"
                    placeholder="Input Country"
                    type="text"
                    name="country"
                  />
                  <ErrorMessage name="country" />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">
                    {ADD_CUSTOMER_FORM.CONTACT_PERSON_NAME}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Contact Person Name..."
                    type="text"
                    name="cpName"
                  />
                  <ErrorMessage name="cpName" />
                </div>
                <div className="form-input">
                  <div className="label">
                    {ADD_CUSTOMER_FORM.CONTACT_PERSON_EMAIL}
                  </div>
                  <Field
                    className="input"
                    placeholder="Input Contact Person Email..."
                    type="text"
                    name="cpEmail"
                  />
                  <ErrorMessage name="cpEmail" />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_CUSTOMER_FORM.PHONE_NUMBER}</div>
                  <Field
                    className="input"
                    placeholder="Input Phone Number..."
                    type="text"
                    name="phoneNumber"
                  />
                  <ErrorMessage name="phoneNumber" />
                </div>
                <div className="form-input">
                  <div className="label">{ADD_CUSTOMER_FORM.FAX_NUMBER}</div>
                  <Field
                    className="input"
                    placeholder="Input Fax Number..."
                    type="text"
                    name="fax"
                  />
                  <ErrorMessage name="fax" />
                </div>
              </div>
              <div className="row">
                <div className="form-input">
                  <div className="label">{ADD_CUSTOMER_FORM.REMARK}</div>
                  <Field
                    className="input"
                    placeholder="Input Remark"
                    type="text"
                    name="remark"
                  />
                  <ErrorMessage name="remark" />
                </div>
              </div>
            </div>
            <div className="form-button">
              <div
                className="button cancel"
                onClick={() => handleCloseEditData()}
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
        <div className="table-filter-item">
          <div className="table-filter-item-title">Customer Name</div>
          <div
            className="dropdown-icon"
            onClick={() => setShowCustomerNameFilter(dispatch)}
          >
            <img
              src={DropdownIconWhite}
              alt="dropdown"
              className="dropdown-icon-item"
            />
          </div>
          {state.showCustomerNameFilter && (
            <div className="filter-input">
              <input
                className="input"
                type="text"
                placeholder="type here..."
                value={state.customerNameFilter}
                onChange={(event) =>
                  setCustomerNameFilter(dispatch, event.target.value)
                }
              />
            </div>
          )}
        </div>
        <div className="table-filter-item">
          <div className="table-filter-item-title">City</div>
          <div
            className="dropdown-icon"
            onClick={() => setShowCityFilter(dispatch)}
          >
            <img
              src={DropdownIconWhite}
              alt="dropdown"
              className="dropdown-icon-item"
            />
          </div>
          {state.showCityFilter && (
            <div className="filter-input">
              <input
                className="input"
                type="text"
                placeholder="type here..."
                value={state.cityFilter}
                onChange={(event) =>
                  setCityFilter(dispatch, event.target.value)
                }
              />
            </div>
          )}
        </div>
        {state.showDeleteFilter && (
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
        <div
          className={
            state.showDeleteFilter
              ? "table-filter-search"
              : "table-filter-search table-filter-search-margin"
          }
        >
          <div className="filter-input">
            <input
              className="input"
              type="text"
              placeholder="Search"
              value={state.searchAllFilter}
              onChange={(event) =>
                setSearchAllFilter(dispatch, event.target.value)
              }
            />
          </div>
          <div className="search-icon">
            <img
              src={ZoomIconWhite}
              alt="search"
              className="search-icon-item"
            />
          </div>
        </div>
        <div className="table-filter-reset" onClick={() => reset(dispatch)}>
          reset
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
              state.checkedData.length > 0 && state.checkedData[position]
            }
            onChange={() => handleCheckedData(position)}
          />
        </div>
        <div
          className="customer-code"
          onClick={() => setDataEditCustomer(dispatch, data)}
        >
          {data.custCode}
        </div>
        <div
          className="customer-name"
          onClick={() => setDataEditCustomer(dispatch, data)}
        >
          {data.customerName}
        </div>
        <div
          className="address"
          onClick={() => setDataEditCustomer(dispatch, data)}
        >
          {data.address}
        </div>
        <div
          className="city"
          onClick={() => setDataEditCustomer(dispatch, data)}
        >
          {data.city}
        </div>
      </div>
    );
  };

  const renderPagination = () => {
    return (
      <div className="pagination">
        <div className="pagination-filter">
          <div>Show</div>
          <div className="filter-entries">
            {state.showEntries ? (
              <div className="multiple-entries">
                {state.totalEntries === 4 ? (
                  <div
                    className="entries entries-top entries-active"
                    onClick={() => setShowEntries(dispatch)}
                  >
                    4
                  </div>
                ) : (
                  <div
                    className="entries entries-top"
                    onClick={() => handleEntries(4)}
                  >
                    4
                  </div>
                )}
                {Array.from(Array(5), (_e, index) => {
                  if (index + 5 === state.totalEntries) {
                    return (
                      <div
                        key={index + 5}
                        className="entries entries-active"
                        onClick={() => setShowEntries(dispatch)}
                      >
                        {index + 5}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={index + 5}
                        className="entries"
                        onClick={() => handleEntries(index + 5)}
                      >
                        {index + 5}
                      </div>
                    );
                  }
                })}
                {state.totalEntries === 10 ? (
                  <div
                    className="entries entries-bottom entries-active"
                    onClick={() => setShowEntries(dispatch)}
                  >
                    10
                  </div>
                ) : (
                  <div
                    className="entries entries-bottom"
                    onClick={() => handleEntries(10)}
                  >
                    10
                  </div>
                )}
              </div>
            ) : (
              <div className="entries">{state.totalEntries}</div>
            )}
            <div
              className={
                state.showEntries
                  ? "dropdown-arrow dropdown-show-entries"
                  : "dropdown-arrow"
              }
              onClick={() => setShowEntries(dispatch)}
            >
              <img
                src={KeyboardArrowDown}
                alt="dropdown-arrow"
                className="arrow-item"
              />
            </div>
          </div>
          <div>Entries</div>
        </div>
        <div className="page">
          {/* << */}
          {state.currentPage !== 1 && (
            <div
              className="page-item page-item-left"
              onClick={() => setCurrentPage(dispatch, state.currentPage - 1)}
            >
              {"<<"}
            </div>
          )}
          {/* currentPage - 1 */}
          {state.currentPage !== 1 && (
            <div className="page-item">{state.currentPage - 1}</div>
          )}
          {/* currentPage */}
          {state.currentPage === 1 ? (
            <div className="page-item page-active page-item-left">
              {state.currentPage}
            </div>
          ) : state.currentPage === state.totalPage ? (
            <div className="page-item page-active page-item-right">
              {state.currentPage}
            </div>
          ) : (
            <div className="page-item page-active">{state.currentPage}</div>
          )}
          {/* currentPage + 1 */}
          {state.currentPage !== state.totalPage && (
            <div className="page-item">{state.currentPage + 1}</div>
          )}
          {/* >> */}
          {state.currentPage !== state.totalPage && (
            <div
              className="page-item page-item-right"
              onClick={() => setCurrentPage(dispatch, state.currentPage + 1)}
            >
              {">>"}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="background-customer">
      {state.showModal && (
        <Modal
          setShowModal={setShowModal}
          setModalSubmit={setModalSubmit}
          modalStatus={state.modalStatus}
          modalText={state.modalText}
          dispatch={dispatch}
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
        {state.showAddCustomer ? (
          renderAddCustomer()
        ) : state.showEditCustomer ? (
          renderEditCustomer(state.dataEditCustomer)
        ) : (
          <div>
            <div
              className="add-customer-button"
              onClick={() => setShowAddCustomer(dispatch)}
            >
              + Add Customer
            </div>
            <div>
              {renderFilter()}
              <div className="table-header">
                <div className="customer-code">Customer Code</div>
                <div className="customer-name">Customer Name</div>
                <div className="address">Address</div>
                <div className="city">City</div>
              </div>
              <div className="table-body">
                {Array.from(Array(state.totalEntries), (_e, i) => {
                  const index =
                    i + (state.currentPage - 1) * state.totalEntries;
                  return (
                    <div key={index}>
                      {props.masterCustomerData.data &&
                        props.masterCustomerData.data[index] &&
                        renderTable(
                          props.masterCustomerData.data[index],
                          index
                        )}
                    </div>
                  );
                })}
              </div>
              {renderPagination()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
