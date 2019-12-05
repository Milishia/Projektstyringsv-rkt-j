import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;
import org.bson.Document;
import org.bson.conversions.Bson;

import java.util.ArrayList;
import java.util.List;

public class MongoDAO implements StakeholderDAO {
    @Override
    public List<Stakeholder> getStakeholder()
    {
        MongoCollection<Document> stakeholderCollection = MongoConnection.getInstance("Projektstyring").getDatabase().getCollection("Stakeholder");

        List<Stakeholder> Stakeholders = new ArrayList<>();

        for (Document document : stakeholderCollection.find())
        {
            Stakeholder newStakeholder = Stakeholder.builder().name(document.getString("name")).email(document.getString("email")).build();
            Stakeholders.add(newStakeholder);
        }
        return Stakeholders;
    }

    @Override
    public void putStakeholder(String name)
    {

    }

    @Override
    public void postStakeholder(String payload)
    {
        MongoCollection<Document> collection = MongoConnection.getInstance("Projektstyring").getDatabase().getCollection("Stakeholder");
        Document document = new Document(Document.parse(payload));
        collection.insertOne(document);
    }

    @Override

    public void deleteStakeholder(String name, String email)
    {
        MongoCollection<Document> collection = MongoConnection.getInstance("Projektstyring").getDatabase().getCollection("Stakeholder");
        Bson filter = Filters.and(Filters.eq("name" , name) , Filters.eq("email" , email));
        collection.deleteOne(filter);
    }
}
