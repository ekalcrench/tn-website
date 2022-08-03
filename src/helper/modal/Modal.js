import React from "react";
import { CloseModalButton } from "../../assets/icons";
import "./Modal.scss";

function Modal(props) {
  console.log(props);
  return (
    <div className="background-modal">
      <div className="container">
        <div className="modal-header">
          <img
            className="close-button"
            src={CloseModalButton}
            alt="close-button"
            onClick={() => props.setShowModal(props.dispatch, false)}
          />
        </div>
        <div className="modal-body">{props.modalText}</div>
        <div className="modal-footer">
          <button
            className="button cancel-button"
            onClick={() => props.setShowModal(props.dispatch, false)}
          >
            Cancel
          </button>
          <button
            className="button submit-button"
            onClick={() => {
              props.setModalSubmit(props.dispatch, true);
              props.setShowModal(props.dispatch, false);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
