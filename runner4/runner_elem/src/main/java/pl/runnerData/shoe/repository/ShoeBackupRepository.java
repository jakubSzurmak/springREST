package pl.runnerData.shoe.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.runnerData.shoe.dto.GetShoeResponse;

import java.util.UUID;

@Repository
public interface ShoeBackupRepository extends MongoRepository<GetShoeResponse, UUID>{
}
