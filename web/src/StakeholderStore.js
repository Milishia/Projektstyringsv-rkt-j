import {decorate, observable} from "mobx";

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
}

decorate(StakeholderStore, {
    stakeholders: observable,
    newStakeholderName: observable,
    newStakeholderEmail: observable
});