// import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbarmenu = () => {
  const cartProducts = useSelector(state => state.cart)

  console.log(cartProducts.length)

  return (
      <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
        <Navbar.Brand to="/">My E-Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: 'flex-end' }}>
            <Nav className="me-auto">
                <Nav.Link to="/" as={Link} >Products</Nav.Link>
            </Nav>              
          <Nav>
            <Nav.Link as={Link} to="/cart">
              Cart {cartProducts.length}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
        </Navbar>
    </div>
  )
}

export default Navbarmenu
