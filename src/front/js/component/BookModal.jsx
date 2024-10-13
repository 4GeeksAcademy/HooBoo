import React from 'react';
import { Modal } from 'react-bootstrap';
import BookDetail from './BookDetail.jsx';

const BookModal = ({ show, handleClose, bookId }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Detalles del Libro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BookDetail bookId={bookId} />
      </Modal.Body>
    </Modal>
  );
};

export default BookModal;
