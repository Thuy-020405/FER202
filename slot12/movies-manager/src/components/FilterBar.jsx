// src/components/FilterBar.jsx
import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useMovieState } from '../contexts/MovieContext';

const FilterBar = ({ setFilteredMovies }) => {
  const { movies, genres } = useMovieState();

  const [search, setSearch] = useState('');
  const [genreId, setGenreId] = useState('');
  const [minDuration, setMinDuration] = useState('');
  const [maxDuration, setMaxDuration] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    applyFilter();
  }, [search, genreId, minDuration, maxDuration, sortOrder, movies]);

  const applyFilter = () => {
    let result = [...movies];

    // 🔍 Search theo title
    if (search) {
      result = result.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // 🎭 Lọc theo thể loại
    if (genreId) {
      result = result.filter(movie =>
        movie.genreId === parseInt(genreId)
      );
    }

    // ⏱ Lọc theo thời lượng
    if (minDuration) {
      result = result.filter(movie =>
        movie.duration >= parseInt(minDuration)
      );
    }

    if (maxDuration) {
      result = result.filter(movie =>
        movie.duration <= parseInt(maxDuration)
      );
    }

    // 🔼 Sắp xếp
    if (sortOrder === 'asc') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortOrder === 'desc') {
      result.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredMovies(result);
  };

  const handleReset = () => {
    setSearch('');
    setGenreId('');
    setMinDuration('');
    setMaxDuration('');
    setSortOrder('');
    setFilteredMovies(movies);
  };

  return (
    <Card className="shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-3">🔎 Bộ lọc phim</h5>

        <Row className="g-3">
          <Col md={3}>
            <Form.Control
              placeholder="Tìm theo tên phim..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>

          <Col md={2}>
            <Form.Select
              value={genreId}
              onChange={(e) => setGenreId(e.target.value)}
            >
              <option value="">Tất cả thể loại</option>
              {genres.map(g => (
                <option key={g.id} value={g.id}>{g.name}</option>
              ))}
            </Form.Select>
          </Col>

          <Col md={2}>
            <Form.Control
              type="number"
              placeholder="Min phút"
              value={minDuration}
              onChange={(e) => setMinDuration(e.target.value)}
            />
          </Col>

          <Col md={2}>
            <Form.Control
              type="number"
              placeholder="Max phút"
              value={maxDuration}
              onChange={(e) => setMaxDuration(e.target.value)}
            />
          </Col>

          <Col md={2}>
            <Form.Select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">Sắp xếp</option>
              <option value="asc">Tên A → Z</option>
              <option value="desc">Tên Z → A</option>
            </Form.Select>
          </Col>

          <Col md={1}>
            <Button variant="secondary" onClick={handleReset}>
              Reset
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default FilterBar;