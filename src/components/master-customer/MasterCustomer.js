import React, { useEffect, useLayoutEffect } from "react";
import "./MasterCustomer.scss";
import {
  DropdownIconWhite,
  ZoomIconWhite,
  KeyboardArrowDown,
} from "../../assets/icons";
import { ADD_CUSTOMER_FORM } from "../../common/constants";

export default function MasterCustomer(props) {
  useLayoutEffect(() => {
    props.getMasterCustomerData();
  }, []);

  useEffect(() => {
    if (props.masterCustomerData.data !== null) {
      const totalPages = Math.ceil(
        props.masterCustomerData.data.length /
          props.masterCustomerPage.totalEntries
      );
      props.setTotalPages(totalPages);
    }
  }, [props.masterCustomerData.data, props.masterCustomerPage.totalEntries]);

  const handleEntries = (index) => {
    props.showEntries();
    props.setEntries(index);
  };

  const renderAddCustomer = () => {
    return (
      <div className="add-customer">
        <form>
          <div className="form">
            <div className="row">
              <div className="form-input">
                <div className="label">{ADD_CUSTOMER_FORM.CUSTOMER_CODE}</div>
                <input
                  className="input"
                  placeholder="Input Customer Code..."
                  type="text"
                  value={props.masterCustomerPost.CustomerCode}
                />
              </div>
              <div className="form-input">
                <div className="label">{ADD_CUSTOMER_FORM.CUSTOMER_NAME}</div>
                <input
                  className="input"
                  placeholder="Input Customer Name..."
                  type="text"
                  value={props.masterCustomerPost.CustomerName}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-input form-input-address">
                <div className="label">{ADD_CUSTOMER_FORM.ADDRESS}</div>
                <input
                  className="input"
                  placeholder="Input Address..."
                  type="text"
                  value={props.masterCustomerPost.Address}
                />
              </div>
              <div className="form-input">
                <div className="label">{ADD_CUSTOMER_FORM.CITY}</div>
                <input
                  className="input"
                  placeholder="Input City"
                  type="text"
                  value={props.masterCustomerPost.City}
                />
              </div>
              <div className="form-input">
                <div className="label">{ADD_CUSTOMER_FORM.ZIP_CODE}</div>
                <input
                  className="input"
                  placeholder="Input Zip Code"
                  type="text"
                  value={props.masterCustomerPost.ZipCode}
                />
              </div>
              <div className="form-input">
                <div className="label">{ADD_CUSTOMER_FORM.COUNTRY}</div>
                <input
                  className="input"
                  placeholder="Input Country"
                  type="text"
                  value={props.masterCustomerPost.Country}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-input">
                <div className="label">{ADD_CUSTOMER_FORM.CONTACT_PERSON_NAME}</div>
                <input
                  className="input"
                  placeholder="Input Contact Person Name..."
                  type="text"
                  value={props.masterCustomerPost.ContactPersonName}
                />
              </div>
              <div className="form-input">
                <div className="label">{ADD_CUSTOMER_FORM.CONTACT_PERSON_EMAIL}</div>
                <input
                  className="input"
                  placeholder="Input Contact Person Email..."
                  type="text"
                  value={props.masterCustomerPost.ContactPersonEmail}
                />
              </div>
              <div className="form-input">
                <div className="label">{ADD_CUSTOMER_FORM.PHONE_NUMBER}</div>
                <input
                  className="input"
                  placeholder="Input Phone Number..."
                  type="text"
                  value={props.masterCustomerPost.PhoneNumber}
                />
              </div>
              <div className="form-input">
                <div className="label">{ADD_CUSTOMER_FORM.FAX_NUMBER}</div>
                <input
                  className="input"
                  placeholder="Input Fax Number..."
                  type="text"
                  value={props.masterCustomerPost.FaxNumber}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-input">
                <div className="label">{ADD_CUSTOMER_FORM.REMARK}</div>
                <input
                  className="input"
                  placeholder="Input Remark"
                  type="text"
                  value={props.masterCustomerPost.Remark}
                />
              </div>
            </div>
          </div>
          <div className="form-button" onClick={() => props.showAddCustomer()}>
            <div className="button cancel">Cancel</div>
            <div className="button submit">Submit</div>
          </div>
        </form>
      </div>
    );
  };

  const renderTable = (data) => {
    return (
      <div className="table-list">
        <div className="checkbox">
          <input type="checkbox" className="checkbox-item" />
        </div>
        <div className="customer-code">{data.CustomerCode}</div>
        <div className="customer-name">{data.CustomerName}</div>
        <div className="address">{data.Address}</div>
        <div className="city">{data.City}</div>
      </div>
    );
  };

  const renderPagination = () => {
    return (
      <div className="pagination">
        <div className="pagination-filter">
          <div>Show</div>
          <div className="filter-entries">
            {props.masterCustomerPage.showEntries ? (
              <div className="multiple-entries">
                {props.masterCustomerPage.totalEntries === 4 ? (
                  <div
                    className="entries entries-top entries-active"
                    onClick={() => props.showEntries()}
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
                  if (index + 5 === props.masterCustomerPage.totalEntries) {
                    return (
                      <div
                        key={index + 5}
                        className="entries entries-active"
                        onClick={() => props.showEntries()}
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
                {props.masterCustomerPage.totalEntries === 10 ? (
                  <div
                    className="entries entries-bottom entries-active"
                    onClick={() => props.showEntries()}
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
              <div className="entries">
                {props.masterCustomerPage.totalEntries}
              </div>
            )}
            <div
              className={
                props.masterCustomerPage.showEntries
                  ? "dropdown-arrow dropdown-show-entries"
                  : "dropdown-arrow"
              }
              onClick={() => props.showEntries()}
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
          {props.masterCustomerPage.currentPage !== 1 && (
            <div
              className="page-item page-item-left"
              onClick={() =>
                props.setCurrentPage(props.masterCustomerPage.currentPage - 1)
              }
            >
              {"<<"}
            </div>
          )}
          {/* currentPage - 1 */}
          {props.masterCustomerPage.currentPage !== 1 && (
            <div className="page-item">
              {props.masterCustomerPage.currentPage - 1}
            </div>
          )}
          {/* currentPage */}
          {props.masterCustomerPage.currentPage === 1 ? (
            <div className="page-item page-active page-item-left">
              {props.masterCustomerPage.currentPage}
            </div>
          ) : props.masterCustomerPage.currentPage ===
            props.masterCustomerPage.totalPage ? (
            <div className="page-item page-active page-item-right">
              {props.masterCustomerPage.currentPage}
            </div>
          ) : (
            <div className="page-item page-active">
              {props.masterCustomerPage.currentPage}
            </div>
          )}
          {/* currentPage + 1 */}
          {props.masterCustomerPage.currentPage !==
            props.masterCustomerPage.totalPage && (
            <div className="page-item">
              {props.masterCustomerPage.currentPage + 1}
            </div>
          )}
          {/* >> */}
          {props.masterCustomerPage.currentPage !==
            props.masterCustomerPage.totalPage && (
            <div
              className="page-item page-item-right"
              onClick={() =>
                props.setCurrentPage(props.masterCustomerPage.currentPage + 1)
              }
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
      <div className="body">
        <div className="body-header">
          <div className="home">Home</div>
          <div className="arrow-right">{">"}</div>
          <div className="current-component">
            {props.sideMenu.currentComponent}
          </div>
        </div>
        {props.masterCustomerPage.showAddCustomer ? (
          renderAddCustomer()
        ) : (
          <div>
            <div
              className="add-customer-button"
              onClick={() => props.showAddCustomer()}
            >
              + Add Customer
            </div>
            <div>
              <div className="table-filter">
                <div className="table-filter-item">
                  <div className="table-filter-item-title">Customer Name</div>
                  <div className="dropdown-icon">
                    <img
                      src={DropdownIconWhite}
                      alt="dropdown"
                      className="dropdown-icon-item"
                    />
                  </div>
                </div>
                <div className="table-filter-item">
                  <div className="table-filter-item-title">City</div>
                  <div className="dropdown-icon">
                    <img
                      src={DropdownIconWhite}
                      alt="dropdown"
                      className="dropdown-icon-item"
                    />
                  </div>
                </div>
                <div className="table-filter-search">
                  <div className="table-filter-search-title">Search</div>
                  <div className="search-icon">
                    <img
                      src={ZoomIconWhite}
                      alt="search"
                      className="search-icon-item"
                    />
                  </div>
                </div>
                <div className="table-filter-reset">reset</div>
              </div>
              <div className="table-header">
                <div className="customer-code">Customer Code</div>
                <div className="customer-name">Customer Name</div>
                <div className="address">Address</div>
                <div className="city">City</div>
              </div>
              <div className="table-body">
                {Array.from(
                  Array(props.masterCustomerPage.totalEntries),
                  (_e, i) => {
                    const index =
                      i +
                      (props.masterCustomerPage.currentPage - 1) *
                        props.masterCustomerPage.totalEntries;
                    return (
                      <div key={index}>
                        {props.masterCustomerData.data &&
                          props.masterCustomerData.data[index] &&
                          renderTable(props.masterCustomerData.data[index])}
                      </div>
                    );
                  }
                )}
              </div>
              {renderPagination()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
