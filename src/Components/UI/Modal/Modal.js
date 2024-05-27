import React from "react";
import Modal from "react-bootstrap/Modal";

const ModalComponent = ({ show, onHide, title, children, size = "lg" }) => {
  return (
    <Modal show={show} onHide={onHide} size={size}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
