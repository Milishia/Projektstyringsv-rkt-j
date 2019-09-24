import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Nav, NavItem, Navbar, NavDropdown} from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className="App">
        <Container>
            <Row>

                <Col>{/*1 of 1*/}
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand >Projektstyringsværktøj</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </Navbar>
                </Col>

            </Row>
            <Row>
                <Col> {/*1 of 3*/}

                    <Nav>
                        <Nav.Item>
                            <Nav.Link >Identificer Stakeholders</Nav.Link>
                            <Nav.Link >Identificer Key Stakeholders</Nav.Link>
                            <Nav.Link >Project Scope</Nav.Link>
                            <Nav.Link >Risk Management</Nav.Link>
                            <Nav.Link >Closing Checklist</Nav.Link>
                        </Nav.Item>
                    </Nav>

                </Col>
                <Col xs={6}> {/*2 of 3*/}
                    <Card style={{ width: '33.6rem' }}>
                        <Card.Body>
                            <Card.Title>Identificer Stakeholder</Card.Title>
                            <Card.Text>
                                I dette afsnit skal du identificere dine Stakeholders. Hvad er en stakeholder?
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
                                        <Form.Control size="xs" type="text" placeholder="Indskriv din stakeholder" />
                                    </Col>
                                    <Col>
                                        <Button variant="outline-primary">Tilføj</Button>
                                    </Col>
                                    </Form.Row>

                                </td>

                            </tr>

                        </tbody>

                    </Table>

                </Col>
                <Col> {/*3 of 3*/}

                    <Button variant="primary">Gå til næste side</Button>

                </Col>
            </Row>
        </Container>

    </div>
  );
}

export default App;
