import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Header = ({ setQuery, getData }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        getData();
      };
  return (
    <div>
        <Form onSubmit={handleSubmit} className="input d-flex m-auto mt-4 w-50">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button type='submit' variant="success">Search</Button>
        </Form>
    </div>
  )
}

export default Header