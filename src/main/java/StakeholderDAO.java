public interface StakeholderDAO
{
    String getStakeholder();

    void putStakeholder(String name);

    void postStakeholder(String payload);

    void deleteStakeholder(String name);
}
