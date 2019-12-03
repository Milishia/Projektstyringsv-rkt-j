import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;


@Path("login")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class LoginService {


    @POST
    public String postLoginData(LoginData login) throws NotAuthorizedException{
        if (login!=null &&"brian".equals(login.getUsername()) && "kodeord".equals(login.getPassword())){
            return JWTHandler.generateJWT(new User(login.getUsername(), ""));
        }
        throw new NotAuthorizedException("forkert brugernavn/kodeord");
    }

    @GET
    public String testPath()
    {
        return "Test";
    }
}