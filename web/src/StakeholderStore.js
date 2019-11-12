import {decorate, observable} from "mobx";

export default class StakeholderStore
{
    constructor()
    {
        this.getStakeholders();
    }

    getStakeholders()
    {
        const localurl = "http://localhost:8080/rest/stakeholder";
        const remoteurl = "https://projektstyringsvaerktoej.herokuapp.com/rest/stakeholder";
        console.log("fetching");
        fetch(localurl)
            .then((response)=> response.json()
                .then((jsonresponse)=>{
                    console.log(jsonresponse);
                    this.stakeholders = jsonresponse;
                }
            )
        )
    }

    postStakeholder()
    {
        const localurl = "http://localhost:8080/rest/stakeholder";
        const remoteurl = "https://projektstyringsvaerktoej.herokuapp.com/rest/stakeholder";
        console.log("posting");
        fetch(localurl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.newStakeholderName,
                email: this.newStakeholderEmail,
            })
        })
            .then(() => this.getStakeholders())
    }

    /*
    stakeholders = [
        {name: "Daniel" , email: "s175207@student.dtu.dk"},
        {name: "Futte" , email: "s175204@student.dtu.dk"},
        {name: "Milishia" , email: "s175193@student.dtu.dk"},
        {name: "Caroline" , email: "s175201@student.dtu.dk"}];

     */

    stakeholders = [];




    newStakeholderName = "";
    newStakeholderEmail = "";
    addStakeHolder = ()=> {

        this.postStakeholder();
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