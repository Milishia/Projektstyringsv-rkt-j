package services;

import data.LoginData;
import data.User;
import exceptions.NotAuthorizedException;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;


@Path("login")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class LoginService {


    @POST
    public String getTokenFromUserdata(LoginData login) throws exceptions.NotAuthorizedException {
        System.out.println(login.getUsername());
        System.out.println(login.getPassword());
        if (login!=null &&"brugernavn".equals(login.getUsername()) && "password".equals(login.getPassword())){
            return JWTHandler.generateJWT(new User(login.getUsername(), ""));
        }
        throw new NotAuthorizedException("forkert brugernavn/kodeord");
    }

    @POST
    @Path("validateToken")
    public User validateToken(String token){
        System.out.println("Validating ...");
        User validate = JWTHandler.validate(token);
        return validate;
    }
}