import kong.unirest.Unirest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;

@Path("inside")
public class InsideLogin {

    @GET
    @Path("login")
    public Response login(){
        String URI =  "https://auth.dtu.dk/dtu/?service=http://localhost:8080/rest/inside/redirect";
        return Response.seeOther(UriBuilder.fromUri(URI).build()).build();
    }

    @GET @Path("redirect")
    public Response redirect(@QueryParam("ticket") String cnTicket){
        System.out.println(cnTicket);
        String body =
                Unirest.get("https://auth.dtu.dk/dtu/validate?service=http://localhost:8080/rest/inside/redirect&ticket="
                        + cnTicket)
                        .asString()
                        .getBody();
        if ("yes".equals(body.split("\n")[0])){
            String userID = body.split("\n")[1];
            String token = JWTHandler.generateJWT(new User(userID, ""));
            return Response.seeOther(UriBuilder.fromUri("http://localhost:3000/?token="+ token).build()).build();
        }
        return login();
    }
}