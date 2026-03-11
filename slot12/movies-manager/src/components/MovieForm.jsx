// src/components/MovieForm.jsx
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Modal, Image, Card } from 'react-bootstrap';
import { useMovieState, useMovieDispatch } from '../contexts/MovieContext';
import { initialMovieState } from '../reducers/movieReducers';

const MovieFields = ({ currentMovie, handleInputChange, handleFileChange, imagePreview, genres, errors = {}, validated = false }) => (
  <>
    <Row className="mb-3">
      <Col md={6}>
        <Form.Group>
          <Form.Label>Ảnh Avatar</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleFileChange} className="mb-2" />
          <Form.Control
            type="text"
            name="avatar"
            value={currentMovie.avatar || ''}
            onChange={handleInputChange}
            placeholder="Hoặc nhập URL"
            isInvalid={validated && errors.avatar}
          />
          <Form.Control.Feedback type="invalid">
            {errors.avatar}
          </Form.Control.Feedback>

          {imagePreview && (
            <div className="mt-2">
              <Image src={imagePreview} thumbnail style={{ maxWidth: '150px' }} />
            </div>
          )}
        </Form.Group>
      </Col>

      <Col md={6}>
        <Form.Group>
          <Form.Label>Tên phim *</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={currentMovie.title || ''}
            onChange={handleInputChange}
            required
            isInvalid={validated && errors.title}
          />
          <Form.Control.Feedback type="invalid">
            {errors.title}
          </Form.Control.Feedback>
        </Form.Group>
      </Col>
    </Row>

    <Row className="mb-3">
      <Col md={12}>
        <Form.Group>
          <Form.Label>Mô tả *</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={currentMovie.description || ''}
            onChange={handleInputChange}
            required
            isInvalid={validated && errors.description}
          />
        </Form.Group>
      </Col>
    </Row>

    <Row>
      <Col md={4}>
        <Form.Select name="genreId" value={currentMovie.genreId || ''} onChange={handleInputChange}>
          <option value="">Chọn thể loại</option>
          {genres.map(g => (
            <option key={g.id} value={g.id}>{g.name}</option>
          ))}
        </Form.Select>
      </Col>

      <Col md={4}>
        <Form.Control
          type="number"
          name="duration"
          placeholder="Thời lượng"
          value={currentMovie.duration || ''}
          onChange={handleInputChange}
        />
      </Col>

      <Col md={4}>
        <Form.Control
          type="number"
          name="year"
          placeholder="Năm"
          value={currentMovie.year || ''}
          onChange={handleInputChange}
        />
      </Col>
    </Row>
  </>
);

const MovieForm = () => {
  const state = useMovieState();
  const { dispatch, handleCreateOrUpdate } = useMovieDispatch();
  const { currentMovie, isEditing, showEditModal, genres } = state;

  const [imagePreview, setImagePreview] = useState('');
  const [validated, setValidated] = useState(false);

  const handleInputChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      payload: { name: e.target.name, value: e.target.value }
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
        dispatch({
          type: 'UPDATE_FIELD',
          payload: { name: 'avatar', value: event.target.result }
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);

    const success = await handleCreateOrUpdate(currentMovie, isEditing !== null, isEditing);
    if (success && isEditing === null) {
      setImagePreview('');
      setValidated(false);
    }
  };

  return (
    <>
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h4 className="mb-3">➕ Thêm Phim</h4>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <MovieFields
              currentMovie={isEditing === null ? currentMovie : initialMovieState.currentMovie}
              handleInputChange={handleInputChange}
              handleFileChange={handleFileChange}
              imagePreview={imagePreview}
              genres={genres}
            />
            <Button variant="success" className="mt-3" type="submit">
              Thêm Phim
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Modal show={showEditModal} onHide={() => dispatch({ type: 'CLOSE_EDIT_MODAL' })} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Chỉnh sửa Phim</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <MovieFields
              currentMovie={currentMovie}
              handleInputChange={handleInputChange}
              handleFileChange={handleFileChange}
              imagePreview={currentMovie.avatar}
              genres={genres}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => dispatch({ type: 'CLOSE_EDIT_MODAL' })}>
              Hủy
            </Button>
            <Button variant="warning" type="submit">
              Lưu
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default MovieForm;