import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Nav, Navbar} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import {stakeholderStore} from "./StakeholderStore";
import {withRouter} from "react-router-dom";
import {observer} from "mobx-react";

const KeyStakeholderComponent = withRouter(observer(({history, match}) => {
    return(
        <div>
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
                                <Nav.Link onClick={()=>history.push("/stakeholdercomponent")}>Identificer Stakeholders</Nav.Link>
                                <Nav.Link >Identificer Key Stakeholders</Nav.Link>
                                <Nav.Link >Project Scope Statement</Nav.Link>
                                <Nav.Link >Identificer arbejdsopgaver</Nav.Link>
                                <Nav.Link >Identificer risici</Nav.Link>
                                <Nav.Link >Vurder risici</Nav.Link>
                                <Nav.Link >Imødekom risici</Nav.Link>
                                <Nav.Link >Closing Checklist</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col xs={6}> {/*2 of 3*/}
                        <Card style={{ width: '33.6rem' }}>
                            <Card.Body>
                                <Card.Title>Identificer Stakeholder</Card.Title>
                                <Card.Text>
                                    I dette afsnit skal du identificere dine Keystakeholders ud fra D.A.N.C.E metoden.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Navn på Stakeholder</th>
                                <th>D</th>
                                <th>A</th>
                                <th>N</th>
                                <th>C</th>
                                <th>E</th>

                            </tr>
                            </thead>
                        </Table>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}));

export default observer(KeyStakeholderComponent)