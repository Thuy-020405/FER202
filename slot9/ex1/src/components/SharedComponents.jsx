import React from 'react';
import { Modal, Button, Toast, ToastContainer } from 'react-bootstrap';

// Modal dùng chung: Nhận title và body để hiển thị linh hoạt
export const SharedModal = ({ show, handleClose, title, body }) => (
    <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton className="bg-danger text-white">
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4 fs-5 text-center">
            {body}
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center">
            <Button variant="dark" className="px-4" onClick={handleClose}>
                Tiếp tục
            </Button>
        </Modal.Footer>
    </Modal>
);

// Toast dùng chung: Hiện ở góc màn hình
export const SharedToast = ({ show, onClose, message }) => (
    <ToastContainer position="top-end" className="p-3">
        <Toast show={show} onClose={onClose} delay={3000} autohide bg="success">
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">Hệ thống Pizza</strong>
            </Toast.Header>
            <Toast.Body className="text-white fw-bold">{message}</Toast.Body>
        </Toast>
    </ToastContainer>
);