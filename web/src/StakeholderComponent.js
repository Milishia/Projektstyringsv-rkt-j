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
    <div>
        <Container>
            <Row>

                <Col>{/*1 of 1*/}
                    <Navbar bg="light" expand="lg">
                        <img
                            alt="/web/public/dragon.png"
                            src="dragon.png"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />
                        <Navbar.Brand>Dragon Planner</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link>Identificer Stakeholders</Nav.Link>
                            <Nav.Link onClick={()=>history.push("/keystakeholdercomponent")}>Identificer Key Stakeholders</Nav.Link>
                        </Nav>
                            <Nav>
                                <Button variant="light">Log ud</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>

            </Row>

            <Row>
                <Col> {/*1 of 3*/}

                </Col>
                <Col sm="auto"> {/*2 of 3*/}
                    <Container>
                    <Card style={{ width: '33.6rem' }}>
                        <Card.Body>
                            <Card.Title>Identificer Stakeholders</Card.Title>
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
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>


                        {stakeholderStore.stakeholders.map((stakeholder, key)=>

                            <tr key={key}>
                                <td>{key+1}</td>
                                <td>{stakeholder.name}</td>
                                <td>{stakeholder.email}</td>
                                <td>
                                    <Button style={{position:'relative' , zIndex:'10000000'}} variant="outline-danger" onClick={()=>{stakeholderStore.deleteStakeholder(stakeholder.name , stakeholder.email)}}> x </Button>
                                </td>
                            </tr>
                        )}



                        <tr>
                            <td> </td>
                            <td>
                                <Form.Row>
                                    <Col sm={"9"}>
                                        <Form.Control value={stakeholderStore.newStakeholderName} size="xs" type="text" placeholder="Navn" onChange={(e)=>stakeholderStore.newStakeholderName = e.target.value}/>
                                    </Col>

                                </Form.Row>

                            </td>
                            <td>
                                <Form.Row>
                                    <Col sm={"9"}>
                                        <Form.Control value={stakeholderStore.newStakeholderEmail} size="xs" type="text" placeholder="E-mail" onChange={(e)=>stakeholderStore.newStakeholderEmail = e.target.value}/>
                                    </Col>


                                </Form.Row>


                            </td>
                            <td>
                                <Button variant="outline-success" onClick={()=>{
                                    console.log(stakeholderStore.newStakeholderEmail)
                                    console.log(stakeholderStore.newStakeholderName)
                                    if(stakeholderStore.addStakeHolder() === "error")
                                    {
                                        window.alert("Name and Email can't be empty");
                                    }
                                }}>Tilføj</Button>
                            </td>


                        </tr>

                        </tbody>

                    </Table>
                </Container>
                </Col>
                <Col> {/*3 of 3*/}

                    <Button variant="info" onClick={()=>history.push("/keystakeholdercomponent")}>Gå til næste side</Button>

                </Col>
            </Row>
        </Container>

    </div>
    )
}));

export default observer(StakeholderComponent)