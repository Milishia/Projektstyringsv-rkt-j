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
            <Route exact path = "/" component={Login}/>
            <Route path = "/stakeholdercomponent" component={StakeholderComponent}/>
            <Route path = "/keystakeholdercomponent" component={KeyStakeholderComponent}/>
            <Route render={() => <h1> Display 404 page here </h1>} />
        </Switch>
    )
}

export default observer(App);
