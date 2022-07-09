import "./Home.scss";
import {
  CalendarIcon,
  DropdownIcon,
  KeyboardArrowUp,
  KeyboardArrowDown,
  Zoom,
} from "../../assets/icons";
import { HorizontalLine } from "../../assets/imgs";

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-content-header">
          <div className="reporting">Reporting</div>
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
              <div className="table-filter-item-title">Job Type</div>
              <div className="dropdown-icon">
                <img
                  src={DropdownIcon}
                  alt="dropdown"
                  className="dropdown-icon-item"
                />
              </div>
            </div>
            <div className="table-filter-item">
              <div className="table-filter-item-title">Unit Model</div>
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
              <div className="table-filter-item-title">From</div>
              <div className="dropdown-icon">
                <img
                  src={DropdownIcon}
                  alt="dropdown"
                  className="dropdown-icon-item"
                />
              </div>
            </div>
            <div className="table-filter-item">
              <div className="table-filter-item-title">Up to</div>
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
              <div className="table-header-item-title job-type">JOB TYPE</div>
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
              <div className="table-header-item-title unit-model">
                UNIT MODEL
              </div>
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
              <div className="table-header-item-title unit-code">UNIT CODE</div>
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
              <div className="table-header-item-title work-order">
                WORK ORDER
              </div>
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
              <div className="table-header-item-title date-execution">
                DATE EXECUTION
              </div>
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
            <div className="table-list">
              <div className="table-list-job-type">Periodic Inspection</div>
              <div className="table-list-unit-model">HD785-7</div>
              <div className="table-list-unit-code">DT4110</div>
              <div className="table-list-work-order">70672345</div>
              <div className="table-list-customer">PAMAPERSADA NUSANTARA</div>
              <div className="table-list-date-execution">9 Oktober 2018</div>
            </div>
            <div className="table-list">
              <div className="table-list-job-type">Periodic Inspection</div>
              <div className="table-list-unit-model">HD785-7</div>
              <div className="table-list-unit-code">DT4110</div>
              <div className="table-list-work-order">70672345</div>
              <div className="table-list-customer">PAMAPERSADA NUSANTARA</div>
              <div className="table-list-date-execution">9 Oktober 2018</div>
            </div>
            <div className="table-list">
              <div className="table-list-job-type">Periodic Inspection</div>
              <div className="table-list-unit-model">HD785-7</div>
              <div className="table-list-unit-code">DT4110</div>
              <div className="table-list-work-order">70672345</div>
              <div className="table-list-customer">PAMAPERSADA NUSANTARA</div>
              <div className="table-list-date-execution">9 Oktober 2018</div>
            </div>
            <div className="table-list">
              <div className="table-list-job-type">Periodic Inspection</div>
              <div className="table-list-unit-model">HD785-7</div>
              <div className="table-list-unit-code">DT4110</div>
              <div className="table-list-work-order">70672345</div>
              <div className="table-list-customer">PAMAPERSADA NUSANTARA</div>
              <div className="table-list-date-execution">9 Oktober 2018</div>
            </div>
            <div className="pagination">
              <div className="page-item page-active">1</div>
              <div className="page-item">2</div>
              <div className="page-item">{">"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
