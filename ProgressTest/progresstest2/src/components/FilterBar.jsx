import React from 'react';
import { Form } from 'react-bootstrap';

const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="mt-2">
      <Form.Group>
      
        <Form.Label className="small text-muted mb-1 fw-bold">Category</Form.Label>
        <Form.Select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border-light bg-light"
          style={{ borderRadius: '8px' }}
        >
          <option value="">All categories</option>
          <option value="Food">Food</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Cafe">Cafe</option>
          <option value="Mua Sắm">Mua Sắm</option>
          
        </Form.Select>
      </Form.Group>
    </div>
  );
};

export default FilterBar;