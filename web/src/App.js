import React, {useState} from 'react';
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
import StakeholderStore from "./StakeholderStore";
import {observer} from "mobx-react";
import Route from "react-router-dom/es/Route";
import StakeholderComponent from "./StakeholderComponent";
import Login from "./Login";
import KeyStakeholderComponent from "./KeyStakeholderComponent";




function App() {
    return (
        <switch>
            <Route path ={"/StakeholderComponent"} component={StakeholderComponent}/>
            <Route path = "/KeyStakeholderComponent" component={KeyStakeholderComponent}/>
            <Route exact path = "/" component={Login}/>
        </switch>
    )
}

export default observer(App);
