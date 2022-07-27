import React from "react";
import "./Location.scss"
import {
  DropdownIcon,
  KeyboardArrowUp,
  KeyboardArrowDown,
} from "../../assets/icons";

export default function Location() {

  const renderTable = () => {
    return (
      <div className="table-list">
        <div className="table-list-item">lorem ipsum lorem ipsum</div>
        <div className="table-list-item">lorem ipsum lorem ipsum</div>
        <div className="table-list-item aksi">
          <div className="aksi-button add">Add</div>
          <div className="aksi-button edit">Edit</div>
        </div>
      </div>
    );
  };

  const renderPagination = () => {
    return (
      <div className="pagination">
        <div className="page-item page-active">1</div>
        <div className="page-item">2</div>
        <div className="page-item">{">"}</div>
      </div>
    );
  };

  return (
    <div className="background-location">
      <div className="body">
        <div className="body-header">Location</div>
        <div>
          <div className="table-filter">
            <div className="table-filter-item">
              <div className="table-filter-item-title">Plant Code</div>
              <div className="dropdown-icon">
                <img
                  src={DropdownIcon}
                  alt="dropdown"
                  className="dropdown-icon-item"
                />
              </div>
            </div>
            <div className="table-filter-item">
              <div className="table-filter-item-title">Work Center Description</div>
              <div className="dropdown-icon">
                <img
                  src={DropdownIcon}
                  alt="dropdown"
                  className="dropdown-icon-item"
                />
              </div>
            </div>
          </div>
          <div className="table-header">
            <div className="table-header-item">
              <div className="table-header-item-title">Plant Code</div>
              <div>
                <div className="arrow-up">
                  <img
                    src={KeyboardArrowUp}
                    alt="arrow-up"
                    className="keyboard-arrow-item"
                  />
                </div>
                <div className="arrow-down">
                  <img
                    src={KeyboardArrowDown}
                    alt="arrow-down"
                    className="keyboard-arrow-item"
                  />
                </div>
              </div>
            </div>
            <div className="table-header-item">
              <div className="table-header-item-title">Work Center Description</div>
              <div>
                <div className="arrow-up">
                  <img
                    src={KeyboardArrowUp}
                    alt="arrow-up"
                    className="keyboard-arrow-item"
                  />
                </div>
                <div className="arrow-down">
                  <img
                    src={KeyboardArrowDown}
                    alt="arrow-down"
                    className="keyboard-arrow-item"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="table-body">
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
