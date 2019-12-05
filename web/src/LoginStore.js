import {decorate, observable} from "mobx";

export default class LoginStore
{
    loginUsername = "";
    loginPassword = "";
    getToken()
    {
        const url = "https://projektstyringsvaerktoej.herokuapp.com/rest/login";
        console.log("Acquiring token");
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.loginUsername,
                password: this.loginPassword,
            })
        }).then((response)=> response.text()
            .then((text)=>{
                    console.log(text);
                }
            )
        )
    }
}
decorate(LoginStore, {
    loginUsername: observable,
    loginPassword: observable
});
export const loginStore = new LoginStore();