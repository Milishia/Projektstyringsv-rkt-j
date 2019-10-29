import com.mongodb.ConnectionString;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

class MongoConnection
{
    private static MongoConnection mongoConnection = null;

    static MongoConnection getInstance(String database)
    {
            if (mongoConnection == null)
            {
                mongoConnection = new MongoConnection(database);
            }
            return mongoConnection;
    }

    private MongoClient mongoClient = null;
    private MongoDatabase mongoDatabase = null;

    MongoConnection(String database)
    {
        String username = System.getenv("MONGO_STAKEHOLDER_USERNAME");
        String password = System.getenv("MONGO_STAKEHOLDER_PASSWORD");
        ConnectionString connectionString;
        connectionString = new ConnectionString("mongodb+srv://" + username + ":" + password + "@stakeholders-oznv1.gcp.mongodb.net/" + database + "?retryWrites=true&w=majority");
        mongoClient = MongoClients.create(connectionString);
        mongoDatabase = mongoClient.getDatabase(database);
    }

    MongoDatabase getDatabase()
    {
        return mongoDatabase;
    }
}
