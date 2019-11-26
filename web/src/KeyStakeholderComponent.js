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
import InputGroup from "react-bootstrap/InputGroup"


const KeyStakeholderComponent = withRouter(observer(({history}) => {
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
                                <Card.Title>Identificer Key stakeholders</Card.Title>
                                <Card.Text>
                                    I dette afsnit skal du identificere dine Keystakeholders ud fra D.A.N.C.E metoden.
                                    Hvad er D.A.N.C.E? <br /><br />
                                    <b>DECISIONS:</b> <br />
                                    Tager beslutninger der kan har indflydelse på projektets budget.<br /><br />

                                    <b>AUTHORITY:</b> <br />
                                    Have the authority to grant permission to proceed with the project.<br /><br />

                                    <b>NEED:</b> <br />
                                    Directly benefit from or are impacted by the project and consequently need to know all about it.<br /><br />

                                    <b>CONNECTIONS:</b> <br />
                                    Are connected to the people, money, or resources required to remove roadblocks or exert influence to ensure project success. These are the champions, the active supporters who will ensure your project's success.<br /><br />

                                    <b>ENERGY:</b> <br />
                                    Have positive or negative energy that could affect project success
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



                            <tr>

                                    {stakeholderStore.stakeholders.map((stakeholderName, key)=>
                                        <tr key={key}><td>{key+1}</td></tr>)}

                                <th>
                                    {/*  {stakeholderStore.stakeholders.map((stakeholderName, key)=>
                                        <tr><td>{stakeholderName.name}</td></tr>)}*/}
                                </th>
                                <th>
                                    <label>
                                        <InputGroup.Prepend>
                                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                        </InputGroup.Prepend>
                                    </label>
                                </th>
                                <th>
                                    <label>
                                        <InputGroup.Prepend>
                                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                        </InputGroup.Prepend>
                                    </label>
                                </th>
                                <th>
                                    <label>
                                        <InputGroup.Prepend>
                                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                        </InputGroup.Prepend>
                                    </label>
                                </th>
                                <th>
                                    <label>
                                        <InputGroup.Prepend>
                                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                        </InputGroup.Prepend>
                                    </label>
                                </th>
                                <th>
                                    <label>
                                        <InputGroup.Prepend>
                                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                        </InputGroup.Prepend>
                                    </label>
                                </th>
                            </tr>
                        </Table>

                    </Col>
                    <Col>
                        <Button variant="primary">Gå til næste side</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}));

export default observer(KeyStakeholderComponent)