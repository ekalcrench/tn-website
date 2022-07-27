import React, { useEffect } from "react";
import "./MasterCustomer.scss";
import {
  DropdownIconWhite,
  ZoomIconWhite,
  KeyboardArrowDown,
} from "../../assets/icons";

export default function MasterCustomer(props) {

  const renderTable = () => {
    return (
      <div className="table-list">
        <div className="checkbox">
          <input type="checkbox" className="checkbox-item" />
        </div>
        <div className="customer-code">CSTMTN001</div>
        <div className="customer-name">CUSTOMER TRAKTOR NUSANTARA</div>
        <div className="address">
          Jl. Rawagelam I No.9, Kawasan Industri Pulogadung Jakarta 13930,
          Indonesia
        </div>
        <div className="city">Jakarta</div>
      </div>
    );
  };

  const renderPagination = () => {
    return (
      <div className="pagination">
        <div className="pagination-filter">
          <div>Show</div>
          <div className="filter-entries">
            <div className="entries">5</div>
            <div className="dropdown-arrow">
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
          <div className="page-item page-active page-item-left">1</div>
          <div className="page-item">2</div>
          <div className="page-item page-item-right">{">>"}</div>
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
        <div className="add-customer">+ Add Customer</div>
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
            {renderTable()}
            {renderTable()}
            {renderTable()}
            {renderTable()}
            {renderTable()}
          </div>
          {renderPagination()}
        </div>
      </div>
    </div>
  );
}
