import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

public class ConnectToDatabase
{
    public static void main(String[] args)
    {
        MongoCollection<Document> collection = MongoConnection.getInstance("").getDatabase().getCollection("Weatherstation1");
        Document document = new Document("name" , "Anders" ).append("email" , "AndersEmail@gmail.com");
        collection.insertOne(document);
    }
}
