package pl.runnerData.runner.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.runnerData.runner.entity.Runner;

@Repository
public interface RunnerBackupRepository extends MongoRepository<Runner, String> {

}
