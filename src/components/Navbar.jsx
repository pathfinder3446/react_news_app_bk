import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navbarr = () => {
  return (
    <Navbar className='nav-container d-flex justify-content-between' bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">BK MOBİL HABER</Navbar.Brand>
          <div>
            <Nav className="me-auto my-2 my-lg-3">
            <Nav.Link href="/">Anasayfa</Nav.Link>
            <Nav.Link href="/details/favourites">Favoriler</Nav.Link>
          </Nav>
          </div>
        </Container>
      </Navbar>
  )
}

export default Navbarr