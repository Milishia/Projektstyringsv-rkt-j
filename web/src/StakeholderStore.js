import {decorate, observable} from "mobx";

export default class StakeholderStore
{
    stakeholders = ["Daniel" , "Futte" , "Caroline" , "Milishia"];
    newStakeHolder = "";
    addStakeHolder = (name)=> {
        this.stakeholders.push(name);
        this.newStakeHolder="";
    };
}

decorate(StakeholderStore, {
    stakeholders: observable,
    newStakeHolder: observable
})