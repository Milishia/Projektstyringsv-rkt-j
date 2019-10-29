import javax.ws.rs.*;

@Path("stakeholder")
public class StakeholderService {
    private StakeholderDAO DatabaseAccess = new MongoDAO();

    @GET
    public String getStakeholder()
    {
        return DatabaseAccess.getStakeholder();
    }

    @PUT
    @Path("{stakeholderName}")
    public void putStakeholder(@PathParam("stakeholderName") String stakeholderName)
    {
        DatabaseAccess.putStakeholder(stakeholderName);
    }

    @POST
    public void postStakeholder(String payload)
    {
        DatabaseAccess.postStakeholder(payload);
    }


    @DELETE
    @Path("{stakeholderName}")
    public void deleteStakeholder(@PathParam("stakeholderName") String stakeholderName)
    {
        DatabaseAccess.deleteStakeholder(stakeholderName);
    }
}