// src/components/MovieTable.jsx
import React from 'react';
import { Table, Button, Image, Modal, Spinner, Badge, Card } from 'react-bootstrap';
import { useMovieState, useMovieDispatch } from '../contexts/MovieContext';

const MovieTable = ({ filteredMovies }) => {
  const { movies, genres, loading, movieToDelete, showDeleteModal } = useMovieState();
  const { dispatch, confirmDelete } = useMovieDispatch();

  // 👉 Nếu có filteredMovies thì dùng, không thì dùng movies từ context
  const displayMovies =
    filteredMovies && filteredMovies.length > 0
      ? filteredMovies
      : movies;

  // Tạo map genre để hiển thị tên
  const genreMap = genres.reduce((map, g) => {
    map[g.id] = g.name;
    return map;
  }, {});

  return (
    <>
      <Card className="shadow-sm mt-4">
        <Card.Body>
          <h4 className="mb-3">📋 Danh sách Phim</h4>

          {loading ? (
            <div className="text-center">
              <Spinner animation="border" />
            </div>
          ) : (
            <Table hover responsive className="align-middle">
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th>ID</th>
                  <th>Tên Phim</th>
                  <th>Thể loại</th>
                  <th>Thời lượng</th>
                  <th>Thao tác</th>
                </tr>
              </thead>

              <tbody>
                {displayMovies.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center text-muted">
                      Không có phim nào
                    </td>
                  </tr>
                ) : (
                  displayMovies.map((movie) => (
                    <tr key={movie.id}>
                      <td>
                        <Image
                          src={movie.poster}
                          alt={movie.title}
                          width={60}
                          height={80}
                          rounded
                          style={{ objectFit: 'cover' }}
                        />
                      </td>

                      <td>#{movie.id}</td>

                      <td>
                        <strong>{movie.title}</strong>
                        <br />
                        <small className="text-muted">
                          ({movie.year})
                        </small>
                      </td>

                      <td>
                        <Badge bg="info">
                          {genreMap[movie.genreId] || 'Unknown'}
                        </Badge>
                      </td>

                      <td>{movie.duration} phút</td>

                      <td>
                        <Button
                          size="sm"
                          variant="outline-primary"
                          className="me-2"
                          onClick={() =>
                            dispatch({
                              type: 'OPEN_EDIT_MODAL',
                              payload: movie,
                            })
                          }
                        >
                          Sửa
                        </Button>

                        <Button
                          size="sm"
                          variant="outline-danger"
                          onClick={() =>
                            dispatch({
                              type: 'OPEN_DELETE_MODAL',
                              payload: movie,
                            })
                          }
                        >
                          Xóa
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>

      {/* MODAL XÁC NHẬN XÓA */}
      <Modal
        show={showDeleteModal}
        onHide={() => dispatch({ type: 'CLOSE_DELETE_MODAL' })}
      >
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xóa</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Bạn có chắc muốn xóa phim
          <strong> "{movieToDelete?.title}" </strong>
          (ID: {movieToDelete?.id}) không?
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => dispatch({ type: 'CLOSE_DELETE_MODAL' })}
          >
            Hủy
          </Button>

          <Button
            variant="danger"
            onClick={() => confirmDelete(movieToDelete.id)}
          >
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieTable;