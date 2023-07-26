import React from 'react'
import "./MovieView.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../assets/Logo.png";

function MovieView( { movie } ) {

  return (
    <>
    <div>
      <Navbar expand="xxl" className="bg-body-tertiary">
          <Container className="justify-content-start">
            <Navbar.Brand href="/">
              <img
                alt=""
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Container>
      </Navbar>
    </div>
    <Container fluid>
      <Row className='bg-body-tertiary'>
        <Col>
          <div className='row-banner'>
      <div className='MovieView'>
        <img src={movie.banner} />
      </div>
      <div className='flex'>
        <div className='card-info'>
          <h1 className='card-info-tit'>{movie.title}</h1>
          <p>Dirigida por <span className='sp-dir'>{movie.director}</span></p>
          <p>Cast: {movie.cast}</p> 
          <p>{movie.year}</p>
          <p className='card-info-gen'>{movie.genero}</p>
        </div>
        <div className='card-sin'>
          <h2>Sinopsis</h2>
          <p>{movie.text}</p>
        </div>
        <div className='btn-watch'>
        <button>VER PELICULA</button>
        </div>
      </div>
    </div>
        </Col>
      </Row>
    </Container>
    
    </>
  )
}

export default MovieView;