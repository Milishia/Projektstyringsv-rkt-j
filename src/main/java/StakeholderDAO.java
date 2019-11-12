import java.util.List;

public interface StakeholderDAO
{
    List<Stakeholder> getStakeholder();

    void putStakeholder(String name);

    void postStakeholder(String payload);

    void deleteStakeholder(String name);
}
