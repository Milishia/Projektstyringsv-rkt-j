import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import './App.css';

function App() {
  return (
    <div className="App">
        <Container>
            <Row>

                <Col>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand >Projektstyringsværktøj</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </Navbar>
                </Col>

            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col xs={6}>
                    <Card style={{ width: '33.6rem' }}>
                        <Card.Body>
                            <Card.Title>Info</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <Form.Row>
                                    <Col sm={"9"}>
                                        <Form.Control size="xs" type="text" placeholder="Small text" />
                                    </Col>
                                    <Col>
                                        <Button variant="primary">Primary</Button>
                                    </Col>
                                    </Form.Row>

                                </td>

                            </tr>

                        </tbody>

                    </Table>

                </Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>

    </div>
  );
}

export default App;
