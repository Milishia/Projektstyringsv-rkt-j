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
import {withRouter} from "react-router-dom";//
import {observer} from "mobx-react";

export const StakeholderComponent = withRouter (observer(({history}) => {
    return(
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
                            <Nav.Link onClick={()=>history.push("/keystakeholdercomponent")}>Identificer Key Stakeholders</Nav.Link>
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
                                I dette afsnit skal du identificere dine Stakeholders. En Stakeholder kan være en person eller organisation, der vil blive påvirket af projektet, enten negativt eller positivt.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Navn på Stakeholder</th>
                            <th>E-mail på Stakeholder</th>
                        </tr>
                        </thead>
                        <tbody>

                        {stakeholderStore.stakeholders.map((stakeholderName, key)=>
                            <tr key={key}><td>{key+1}</td><td>{stakeholderName.name}</td><td>{stakeholderName.email}</td></tr>)}



                        <tr>
                            <td> </td>
                            <td>
                                <Form.Row>
                                    <Col sm={"9"}>
                                        <Form.Control value={stakeholderStore.newStakeholderName} size="xs" type="text" placeholder="Indskriv navn" onChange={(e)=>stakeholderStore.newStakeholderName = e.target.value}/>
                                    </Col>

                                </Form.Row>

                            </td>
                            <td>
                                <Form.Row>
                                    <Col sm={"9"}>
                                        <Form.Control value={stakeholderStore.newStakeholderEmail} size="xs" type="text" placeholder="Indskriv E-mail" onChange={(e)=>stakeholderStore.newStakeholderEmail = e.target.value}/>
                                    </Col>
                                    <Col>
                                        <Button variant="outline-primary" onClick={()=>{
                                            stakeholderStore.addStakeHolder();
                                        }}>Tilføj</Button>
                                    </Col>

                                </Form.Row>


                            </td>


                        </tr>

                        </tbody>

                    </Table>

                </Col>
                <Col> {/*3 of 3*/}

                    <Button variant="primary" onClick={()=>history.push("/keystakeholdercomponent")}>Gå til næste side</Button>

                </Col>
            </Row>
        </Container>

    </div>
    )
}));

export default observer(StakeholderComponent)