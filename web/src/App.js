import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {observer} from "mobx-react";
import { Route } from "react-router-dom";
import StakeholderComponent from "./StakeholderComponent";
import Login from "./Login";
import KeyStakeholderComponent from "./KeyStakeholderComponent";
import { Switch } from "react-router-dom";

function App() {
    return (
        <Switch>
            <Route path = {"/stakeholdercomponent"} component={StakeholderComponent}/>
            <Route path = {"/keystakeholdercomponent"} component={KeyStakeholderComponent}/>
            <Route exact path = "/" component={Login}/>
        </Switch>
    )
}

export default observer(App);
