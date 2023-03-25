import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../components/chef.png'

const MyNavbar = () => {
  return (
    <div>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={logo}
              width="35"
              height="35"
              className="d-inline-block align-top"
            />{''}
            The Recipe Kitchen
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavbar
