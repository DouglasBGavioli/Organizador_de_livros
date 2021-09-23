import React from "react";
import "../css/Modal.css";


const Modal = ({ onClose = () => {}, children }) => {
  return (
    <div className="modal">
      <div className="container">
        <button className="close" onClick={onClose}>
          X
        </button>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};
export default Modal;
