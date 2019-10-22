import {decorate, observable} from "mobx";
import React, {useState} from 'react';

export default class StakeholderStore
{
    stakeholders = [
        {name: "Daniel" , email: "s175207@student.dtu.dk"},
        {name: "Futte" , email: "s175207@student.dtu.dk"},
        {name: "Milishia" , email: "s175207@student.dtu.dk"},
        {name: "Caroline" , email: "s175207@student.dtu.dk"}];


    newStakeholderName = "";
    newStakeholderEmail = "";
    addStakeHolder = ()=> {

        const newStakeholderTemp = {name: this.newStakeholderName, email: this.newStakeholderEmail};
        this.stakeholders.push(newStakeholderTemp);
        this.newStakeholderName="";
        this.newStakeholderEmail="";
    };
    removeStakeholder(e) {

    }
    message = (key)=>{
        alert("this is something"+ key);
    }


}

decorate(StakeholderStore, {
    stakeholders: observable,
    newStakeholderName: observable,
    newStakeholderEmail: observable
});