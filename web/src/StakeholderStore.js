import {decorate, observable} from "mobx";

export default class StakeholderStore
{
    fetchStakeholders()
    {
        console.log("fetching");
        fetch('https://projektstyringsvaerktoej.herokuapp.com/rest/stakeholder')
            .then((response)=> response.json()
                .then((jsonresponse)=> this.stakeholders = jsonresponse
                    .then(console.log(this.stakeholders))
            )
        )
    }

    stakeholders = [
        {name: "Daniel" , email: "s175207@student.dtu.dk"},
        {name: "Futte" , email: "s175204@student.dtu.dk"},
        {name: "Milishia" , email: "s175193@student.dtu.dk"},
        {name: "Caroline" , email: "s175201@student.dtu.dk"}];


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

export const stakeholderStore = new StakeholderStore();