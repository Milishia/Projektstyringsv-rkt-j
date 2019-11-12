import com.mongodb.client.MongoCollection;
import org.bson.Document;

public class MongoDAO implements StakeholderDAO {
    @Override
    public String getStakeholder()
    {
        StringBuilder returnString = new StringBuilder();
        MongoCollection<Document> stakeholders = MongoConnection.getInstance("Projektstyring").getDatabase().getCollection("Stakeholder");

        for (Document document : stakeholders.find()) 
        {
            returnString.append(document.toJson());
            System.out.println(document);
        }
        return returnString.toString();
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

    public void deleteStakeholder(String name) {
    }
}
