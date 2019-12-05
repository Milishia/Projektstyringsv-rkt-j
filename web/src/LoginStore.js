import {decorate, observable} from "mobx";

export const Loginstates = {LOGGING_IN:"Loading", LOGGEDOUT:"Logout", LOGGED_IN:"LoggedIn"};
class LoginStore
{
    state = Loginstates.LOGGEDOUT;
    loginUsername = "";
    loginPassword = "";
    token = null;
    triedToLogin=false;

    constructor() {

        if(localStorage.getItem("JWToken") !== null)
        {
            this.token = localStorage.getItem("JWToken");
            this.state = Loginstates.LOGGED_IN;
        }
        else
        {
            this.state = Loginstates.LOGGEDOUT;
        }
        //Validate if token is still good and keep/discard token and set state
    }

    Login()
    {
        this.state = Loginstates.LOGGING_IN;
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
        }).then((response)=> {
            console.log("Response status: " + response.status);
            if(response.status === 200)
            {
                response.text()
                    .then((token)=>{
                            console.log(token);
                            this.token=token;
                            localStorage.setItem("JWToken",token);
                            this.state = Loginstates.LOGGED_IN;
                            console.log("State is " + this.state);
                        }
                    );


            }
            else
            {
                this.triedToLogin = true;
                console.log(response);
                this.token = null;
                this.state = Loginstates.LOGGEDOUT;
            }
            }
        )
            .catch(()=> this.state = Loginstates.LOGGEDOUT);
    }
    Logud()
    {
        localStorage.removeItem("JWToken");
        this.token = null;
        loginStore.state = Loginstates.LOGGEDOUT
    }
}
decorate(LoginStore, {
    loginUsername: observable,
    loginPassword: observable,
    state: observable,
    token: observable,
    triedToLogin: observable
});
export const loginStore = new LoginStore();