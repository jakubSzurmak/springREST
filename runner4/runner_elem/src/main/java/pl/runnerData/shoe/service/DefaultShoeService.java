package pl.runnerData.shoe.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.runnerData.shoe.dto.GetShoeResponse;
import pl.runnerData.shoe.dto.GetShoesResponse;
import pl.runnerData.shoe.entity.Shoe;
import pl.runnerData.shoe.function.ShoeToResponseFunction;
import pl.runnerData.shoe.repository.ShoeBackupRepository;
import pl.runnerData.shoe.repository.ShoeRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class DefaultShoeService {
    private final ShoeRepository shoeRepository;
    private final ShoeBackupRepository shoeBackupRepository;

    @Autowired
    public DefaultShoeService(ShoeRepository shoeRepository, ShoeBackupRepository shoeBackupRepository) {
        this.shoeRepository = shoeRepository;
        this.shoeBackupRepository = shoeBackupRepository;
    }

    public List<Shoe> findAll() {
        return shoeRepository.findAll();
    }

    public List<Shoe> findAllByOwnerId(UUID id){
        return shoeRepository.findAllByOwnerId(id);
    }

    public Optional<Shoe> findById(UUID id){
        return shoeRepository.findById(id);
    }

    public void create(Shoe shoe) {
        shoeRepository.save(shoe);
        shoeBackupRepository.save(shoeToResponse(shoe));
    }

    public void delete(UUID id){
        shoeRepository.findById(id).ifPresent(shoeRepository::delete);
    }

    private GetShoeResponse shoeToResponse(Shoe shoe) {
        ShoeToResponseFunction shoeToResponseFunction = new ShoeToResponseFunction();
        return shoeToResponseFunction.apply(shoe);
    }
}
