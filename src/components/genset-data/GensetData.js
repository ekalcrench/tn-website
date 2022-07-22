import "./GensetData.scss";
import {
  CalendarIcon,
  DropdownIcon,
  KeyboardArrowUp,
  KeyboardArrowDown,
  Zoom,
} from "../../assets/icons";
import { HorizontalLine } from "../../assets/imgs";
import { useLayoutEffect } from "react";
import { useWindowDimensions } from "../../helper/window-size";

export default function GensetData(props) {
  const dataLengthRequest = 4;
  console.log("gensetData :", props.gensetData);
  const { height } = useWindowDimensions();

  useLayoutEffect(() => {
    props.getDataGensetMonitoring(props.gensetData.startRequest, dataLengthRequest);
    props.getDataGensetMonitoring(dataLengthRequest, dataLengthRequest);
  }, []);

  const renderPagination = () => {
    return (
      <div className="pagination">
        {/* <div className="page-item page-active">1</div>
        <div className="page-item">2</div>
        <div className="page-item">{">"}</div> */}
        {!props.gensetData.loading && props.gensetData.dataCurrentPage?.length > 0 && (
          <div className="page-item page-active">1</div>
        )}
      </div>
    );
  };

  return (
    <div className={height > 540 ? "home" : "home fix-height"}>
      <div className="home-content">
        <div className="home-content-header">
          <div className="reporting">Genset Dashboard</div>
          <div className="header-date">
            <div className="header-date-item">
              <div className="header-date-item-title">From</div>
              <div className="header-date-item-content">
                <img
                  src={CalendarIcon}
                  alt="calendar"
                  className="calendar-icon"
                />
                <div className="vertical-line" />
                12 January 2019
              </div>
            </div>
            <div className="header-date-item">
              <div className="header-date-item-title">Up to</div>
              <div className="header-date-item-content">
                <img
                  src={CalendarIcon}
                  alt="calendar"
                  className="calendar-icon"
                />
                <div className="vertical-line" />
                17 April 2019
              </div>
            </div>
          </div>
        </div>
        <div className="line-dashed">
          <img
            src={HorizontalLine}
            alt="horizontal-line"
            className="line-dashed-icon"
          />
          <img
            src={HorizontalLine}
            alt="horizontal-line"
            className="line-dashed-icon"
          />
        </div>
        <div>
          <div className="table-filter">
            <div className="table-filter-item">
              <div className="table-filter-item-title">Genset</div>
              <div className="dropdown-icon">
                <img
                  src={DropdownIcon}
                  alt="dropdown"
                  className="dropdown-icon-item"
                />
              </div>
            </div>
            <div className="table-filter-item">
              <div className="table-filter-item-title">Customer</div>
              <div className="dropdown-icon">
                <img
                  src={DropdownIcon}
                  alt="dropdown"
                  className="dropdown-icon-item"
                />
              </div>
            </div>
            <div className="table-filter-item">
              <div className="table-filter-item-title">Location</div>
              <div className="dropdown-icon">
                <img
                  src={DropdownIcon}
                  alt="dropdown"
                  className="dropdown-icon-item"
                />
              </div>
            </div>
            <div className="table-filter-search">
              <img src={Zoom} alt="zoom" className="zoom-icon" />
              <div className="table-filter-search-placeholder">Search</div>
            </div>
          </div>
          <div className="table-header">
            <div className="table-header-item">
              <div className="table-header-item-title genset">GENSET</div>
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
              <div className="table-header-item-title customer">CUSTOMER</div>
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
              <div className="table-header-item-title location">LOCATION</div>
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
              <div className="table-header-item-title user">USER</div>
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
            {props.gensetData.dataCurrentPage?.length > 0 ? (
              props.gensetData.dataCurrentPage.map((element, index) => {
                return (
                  <div className="table-list" key={index}>
                    <div className="table-list-genset">{element.name}</div>
                    <div className="table-list-customer">
                      {element.customer}
                    </div>
                    <div className="table-list-location">
                      {element.location}
                    </div>
                    <div className="table-list-user">{element.user}</div>
                  </div>
                );
              })
            ) : (
              <div>DATA KOSONG</div>
            )}
            {renderPagination()}
          </div>
        </div>
      </div>
    </div>
  );
}
