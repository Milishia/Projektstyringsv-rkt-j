package services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import database.MongoDAO;
import database.StakeholderDAO;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("stakeholder")
public class StakeholderService {
    private StakeholderDAO DatabaseAccess = new MongoDAO();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getStakeholder() throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(DatabaseAccess.getStakeholder());
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
    @Path("{stakeholderName}/{stakeholderEmail}")
    public void deleteStakeholder(@PathParam("stakeholderName") String stakeholderName , @PathParam("stakeholderEmail") String stakeholderEmail)
    {
        DatabaseAccess.deleteStakeholder(stakeholderName , stakeholderEmail);
    }
}