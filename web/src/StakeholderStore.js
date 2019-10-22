import {decorate, observable} from "mobx";
import React, {useState} from 'react';

export default class StakeholderStore
{
    stakeholders = ["Daniel" , "Futte" , "Caroline" , "Milishia"];
    newStakeHolder = "";
    addStakeHolder = (name)=> {
        this.stakeholders.push(name);
        this.newStakeHolder="";

    };
    removeStakeholder(e) {

    }
    message = (key)=>{
        alert("this is something"+ key);
    }


}

decorate(StakeholderStore, {
    stakeholders: observable,
    newStakeHolder: observable
})